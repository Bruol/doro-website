import type { APIRoute } from "astro";
import { sendMail, type SmtpConfig } from "cloudflare-smtp";

export const prerender = false;


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactRateLimiter {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}

type RuntimeEnv = Record<string, string | undefined> & {
  CONTACT_RATE_LIMITER?: ContactRateLimiter;
};

function json(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

function redirectToStatus(request: Request, status: "success" | "error") {
  const url = new URL(request.url);
  url.pathname = "/";
  url.hash = "kontakt";
  url.searchParams.set("contact", status);
  return Response.redirect(url, 303);
}

function rateLimitResponse(request: Request, wantsJson: boolean) {
  return wantsJson
    ? json({ error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." }, 429)
    : redirectToStatus(request, "error");
}

function formatLines(lines: Array<[string, string | undefined]>) {
  return lines
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

export const POST: APIRoute = async ({ request, locals }) => {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const nachricht = String(formData.get("nachricht") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();
  const wantsJson = request.headers.get("accept")?.includes("application/json");

  if (website) {
    return wantsJson ? json({ ok: true }) : redirectToStatus(request, "success");
  }

  if (!name || !email || !nachricht) {
    return wantsJson
      ? json({ error: "Bitte füllen Sie alle Felder aus." }, 400)
      : redirectToStatus(request, "error");
  }

  if (!emailPattern.test(email)) {
    return wantsJson
      ? json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }, 400)
      : redirectToStatus(request, "error");
  }

  const runtime = (locals as {
    runtime?: {
      env?: RuntimeEnv;
    };
  }).runtime;

  const rateLimiter = runtime?.env?.CONTACT_RATE_LIMITER;
  if (rateLimiter) {
    const clientIp = request.headers.get("cf-connecting-ip");
    const rateLimitKey = clientIp ? `contact:${clientIp}` : "contact:unknown";
    const { success } = await rateLimiter.limit({ key: rateLimitKey });

    if (!success) {
      return rateLimitResponse(request, wantsJson);
    }
  }

  const smtpHost = runtime?.env?.SMTP_HOST;
  const smtpPort = Number(runtime?.env?.SMTP_PORT ?? "587");
  const smtpUser = runtime?.env?.SMTP_USER;
  const smtpPass = runtime?.env?.SMTP_PASSWORD ?? runtime?.env?.SMTP_PASS;
  const contactTo = runtime?.env?.CONTACT_TO_EMAIL;
  const contactFrom = runtime?.env?.CONTACT_FROM_EMAIL;

  if (
    !smtpHost ||
    !smtpUser ||
    !smtpPass ||
    !contactTo ||
    !contactFrom ||
    Number.isNaN(smtpPort)
  ) {
    console.error("Missing SMTP configuration for contact form.");
    return wantsJson
      ? json({ error: "Die Kontaktfunktion ist gerade nicht verfügbar." }, 500)
      : redirectToStatus(request, "error");
  }

  try {
    const config: SmtpConfig = {
      host: smtpHost,
      port: smtpPort,
      username: smtpUser,
      password: smtpPass,
      from: contactFrom,
      to: contactTo,
      heloName: "geigenbau-meisterin.de",
      messageIdDomain: "geigenbau-meisterin.de",
    };

    await sendMail(config, {
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: formatLines([
        ["Name", name],
        ["E-Mail", email],
        ["Nachricht", nachricht],
      ]),
    });

    try {
      await sendMail(
        { ...config, to: email },
        {
          subject: "Ihre Nachricht ist angekommen",
          text: [
            `Hallo ${name},`,
            "",
            "vielen Dank fuer Ihre Nachricht. Ich habe Ihre Anfrage erhalten und melde mich so bald wie moeglich bei Ihnen.",
            "",
            "Ihre Nachricht:",
            nachricht,
            "",
            "Viele Grüße,",
            "Dorothea Urbantat",
          ].join("\n"),
        },
      );
    } catch (error) {
      console.error("Failed to send confirmation email.", error);
    }

    return wantsJson ? json({ ok: true }) : redirectToStatus(request, "success");
  } catch (error) {
    console.error("Failed to send contact form email.", error);
    return wantsJson
      ? json({ error: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." }, 500)
      : redirectToStatus(request, "error");
  }
};
