import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

const CONTACT_TO_EMAIL = "lorin@urbantat.eu";
const CONTACT_FROM_EMAIL = "no-reply@geigenbau-meisterin.de";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

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
      env?: Record<string, string | undefined>;
    };
  }).runtime;

  const smtpHost = runtime?.env?.SMTP_HOST;
  const smtpPort = Number(runtime?.env?.SMTP_PORT ?? "587");
  const smtpUser = runtime?.env?.SMTP_USER;
  const smtpPass = runtime?.env?.SMTP_PASS;
  const smtpSecure = runtime?.env?.SMTP_SECURE === "true";
  const contactTo = runtime?.env?.CONTACT_TO_EMAIL ?? CONTACT_TO_EMAIL;
  const contactFrom = runtime?.env?.CONTACT_FROM_EMAIL ?? CONTACT_FROM_EMAIL;

  if (!smtpHost || !smtpUser || !smtpPass || Number.isNaN(smtpPort)) {
    console.error("Missing SMTP configuration for contact form.");
    return wantsJson
      ? json({ error: "Die Kontaktfunktion ist gerade nicht verfügbar." }, 500)
      : redirectToStatus(request, "error");
  }

  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeNachricht = escapeHtml(nachricht).replace(/\n/g, "<br />");

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Website Kontakt" <${contactFrom}>`,
      to: contactTo,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        "",
        "Nachricht:",
        nachricht,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>E-Mail:</strong> ${safeEmail}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${safeNachricht}</p>
      `,
    });

    return wantsJson ? json({ ok: true }) : redirectToStatus(request, "success");
  } catch (error) {
    console.error("Failed to send contact form email.", error);
    return wantsJson
      ? json({ error: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." }, 500)
      : redirectToStatus(request, "error");
  }
};
