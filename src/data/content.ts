export const siteData = {
  header: {
    title: "Dorothea Urbantat",
    subtitle: "Geigenbaumeisterin",
  },
  hero: {
    image: "/assets/images/00-hero-bg.webp",
    pillars: ["Klang", "Wert", "Erlebnis", "Lebensgefühl"],
  },
  about: {
    title: "Über mich",
    portrait: "/assets/images/01-about-no-bg.png",
    portraitOriginal: "/assets/images/01-about.png",
    paragraphs: [
      "Von 2006 bis 2009 absolvierte ich die Ausbildung zur Geigenbau Gesellin an der Staatlichen Fachschule für Musikinstrumentenbau in Mittenwald.",
      "Wichtige Erfahrung sammelte ich darüber hinaus bei Hannes Jacobs in Johannesburg (Süd Afrika), bei Markus Wörz in München, bei Thomas Schmitt in Saarbrücken und bei Christoph Egenolf in Essen.",
      "2016 habe ich die Meisterprüfung an der Handwerkskammer Chemnitz abgelegt.",
      "Arbeitsschwerpunkte sind die Restaurierung von Saiteninstrumenten sowie der Bau von neuen Streichinstrumenten in Alemannischer und Italienischer Bauweise."
    ]
  },
  testimonial: {
    eyebrow: "Referenz",
    name: "Muriel Razavi",
    role: "Bratschistin",
    image: "/assets/images/murial_razavi.png",
    websiteUrl: "https://www.murielrazavi.com/",
    instagramUrl: "https://www.instagram.com/murielrazaviviola/",
  },
  leistungen: {
    title: "Leistungen",
    items: [
      {
        id: "neubau",
        title: "Neubau",
        image: "/assets/images/03-neubau-no-bg.png",
        description: "Ich kreiere Ihnen mit Ihrer Hilfe und Zusammenarbeit das Instrument Ihrer Wünsche. Zur Auswahl stehen klassische Modelle italienischer Bauweise sowie aufwändig verzierte Instrumente nordalpiner Geigenbaukunst. Durch persönliche Absprachen und regelmäßige Treffen während des Bauprozesses können Sie aktiv an der Klanggestaltung Ihres Instrumentes mitwirken."
      },
      {
        id: "reparatur",
        title: "Reparatur",
        image: "/assets/images/04-reparatur.webp",
        description: "Ihre Lieblingsstücke sind bei mir in besten Händen: vom Kratzer bis zum Riss, vom neuen Steg bis zum restaurierten Griffbrett, von der abgenutzten Spielstelle zum gereinigten Instrument wird alles von mir professionell restauriert."
      },
      {
        id: "setup",
        title: "Persönliches Setup",
        image: "/assets/images/05-setup-no-bg.webp",
        description: "Ich helfen Ihnen dabei, aus Ihren Lieblingsstücken den Klang hervor zu zaubern, von dem Sie schon immer geträumt haben."
      },
      {
        id: "kurse",
        title: "Kurse & Workshops",
        image: "/assets/images/02-werkzeuge.webp",
        description: "Hatten Sie jemals den Wunsch, auf einem von Ihnen selbst gebauten Instrument zu spielen? In meiner Werkstatt können Sie Ihren Traum verwirklichen. Zunächst werden wir den zeitlichen Rahmen Ihren Bedürfnissen anpassen und Sie können dann entscheiden, wie viel Sie an Ihrem persönlichen Instrument mitarbeiten wollen. Für gewöhnlich reichen zwei bis drei Wochen intensiver Arbeit aus. Unter meiner Anleitung werden dann, je nach Ihren handwerklichen Fähigkeiten, Fertigkeiten und Kenntnissen, mindestens die Hälfte der Arbeiten selbst ausgeführt. Die schwierigen Bauabschnitte übernehme ich gern für Sie. So können Sie anschließend Ihr ganz eigenes Instrument mit nach Hause nehmen und sich zusätzlich über die gewonnenen Erfahrungen freuen.",
        preise: [
          { label: "Violine", price: "2.500 € zzgl. Materialkosten" },
          { label: "Viola", price: "2.900 € zzgl. Materialkosten" },
          { label: "Violoncello", price: "5.000 € zzgl. Materialkosten" }
        ]
      },
      {
        id: "leihinstrumente",
        title: "Leihinstrumente",
        image: "/assets/images/06-leihinstrumente-no-bg.png",
        description: "Leihen Sie bei mir ein Schülerinstrument für Ihr Kind und lassen Sie sich die Miete auf Ihr bei mir gefertigtes Meisterinstrument anrechnen. Ein Mietkauf lohnt sich, denn Klang bildet."
      }
    ]
  },
  instrumente: {
    alemannische: {
      title: "Alemannische Instrumente",
      subtitle: "Instrumente in Alemannischer Bauweise (Model 1665)",
      models: ["Viola Alemannisches Model 1665", "Violine Alemannisches Model 1665"],
      images: [
        "/assets/images/alemannische-01-no-bg.png",
        "/assets/images/alemannische-02-no-bg.webp",
        "/assets/images/alemannische-03-no-bg.webp",
        "/assets/images/alemannische-04-no-bg.png",
        "/assets/images/alemannische-05-no-bg.webp",
        "/assets/images/alemannische-06-no-bg.png"
      ],
      scales: [1, 0.8, 0.8, 1, 1, 1],
      originals: [
        "/assets/images/alemannische-01-no-bg.webp",
        "/assets/images/alemannische-02.webp",
        "/assets/images/alemannische-03.webp",
        "/assets/images/alemannische-04.webp",
        "/assets/images/alemannische-05.webp",
        "/assets/images/alemannische-06.webp"
      ]
    },
    italienische: {
      title: "Italienische Instrumente",
      subtitle: "Instrumente in Italienischer Bauweise",
      models: ["Viola Italienisches Model (Guadagnini Model)", "Violine Italienisches Model (Stradivari Model, Guadagnini Model)"],
      images: [
        "/assets/images/italienische-01-no-bg.webp",
        "/assets/images/italienische-02-no-bg.webp",
        "/assets/images/italienische-03-no-bg.webp",
        "/assets/images/italienische-04-no-bg.webp",
        "/assets/images/italienische-05-no-bg.webp"
      ],
      scales: [1, 1, 1, 0.8, 0.8],
      originals: [
        "/assets/images/italienische-01.webp",
        "/assets/images/italienische-02.webp",
        "/assets/images/italienische-03.webp",
        "/assets/images/italienische-04.webp",
        "/assets/images/italienische-05.webp"
      ]
    }
  },
  kontakt: {
    title: "Kontakt",
    intro: "Bei Fragen aller Art nutzen Sie das Kontaktformular oder wenden Sie sich telefonisch an Ihre Geigenbaumeisterin.",
    greeting: "Mit herzlichen Grüßen, Dorothea Urbantat"
  },
  impressum: {
    title: "Impressum",
    angaben: [
      { name: "Dorothea Urbantat", title: "Geigenbaumeisterin", address: "Thalberg-Steindlbach 3\n94110 Wegscheid" },
      { name: "Dorothea Urbantat", title: "Geigenbaumeisterin", address: "Gunzener Straße 5\n08258 Markneukirchen-Breitenfeld" }
    ],
    kontakt: {
      telefon: "01573 5230786",
      email: "info@geigenbau-meisterin.de",
      instagramHandle: "@geigenbau_meisterin",
      instagramUrl: "https://www.instagram.com/geigenbau_meisterin/"
    },
    berufsbezeichnung: "Instrumentenbauerin",
    kammer: "Handwerkskammer Passau",
    verliehen_durch: "Handwerkskammer Chemnitz"
  }
};
