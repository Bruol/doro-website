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
    portrait: "/assets/images/01-about-no-bg.webp",
    portraitOriginal: "/assets/images/01-about.webp",
    paragraphs: [
      "Von 2006 bis 2009 absolvierte ich die Ausbildung zur Geigenbau Gesellin an der Staatlichen Fachschule für Musikinstrumentenbau in Mittenwald.",
      "Wichtige Erfahrung sammelte ich darüber hinaus bei Hannes Jacobs in Johannesburg (Süd Afrika), bei Markus Wörz in München, bei Thomas Schmitt in Saarbrücken und bei Christoph Egenolf in Essen.",
      "2016 habe ich die Meisterprüfung an der Handwerkskammer Chemnitz abgelegt.",
      "Arbeitsschwerpunkte sind die Restaurierung von Saiteninstrumenten sowie der Bau von neuen Streichinstrumenten in Alemannischer und Italienischer Bauweise."
    ]
  },
  impressionen: {
    title: "Impressionen",
    veranstaltungen: [
      { text: "Ausstellung in Berlin 30.5.2020 bis 1.6.2020", url: null },
      { text: "Gläserner Bauernhof 2020", url: null }
    ],
    kunden: [
      { text: "Muriel Razavi Bratschistin", url: "https://www.murielrazavi.com/" },
      { text: "Muriel Razavi playing Tenorviola", url: "https://ro-ro.facebook.com/YIMFE/photos/a.1907435022807872/2325728947645142/?type=3" },
      { text: "Picuki Viola Performance", url: "https://www.picuki.com/media/2118006146924117798" },
      { text: "Tenorgeige on Tour", url: "https://www.picuki.com/media/2244226374625739742" }
    ],
    presse: [
      { text: "Freie Presse 16.12.2020", url: "https://www.freiepresse.de/vogtland/oberes-vogtland/geigenbaumeisterin-sichert-sich-filetstuecken-heimischer-fichte-artikel11252760" },
      { text: "Musicon Valley 27.5.2019", url: "https://www.facebook.com/erlebnisweltmusikinstrumentenbau/photos/sch%C3%B6ner-bericht-%C3%BCber-dorothea-van-der-woerd-die-auch-unsere-g%C3%A4ste-mit-ihren-toll/2336203049756729/" },
      { text: "Freie Presse 11.5.2019", url: "https://www.freiepresse.de/vogtland/oberes-vogtland/geschafft-geigen-sind-fertig-artikel10513627" },
      { text: "Vogtland Anzeiger 8.5.2019", url: "https://www.vogtland-anzeiger.de/vogtland/klangfuelle-der-ur-instrumente-artikel10511273" },
      { text: "April 2019", url: "https://www.picuki.com/media/2009650709678649407" },
      { text: "Freie Presse 13.7.2017", url: "https://www.freiepresse.de/vogtland/oberes-vogtland/geigenbauerin-aus-dem-ruhrpott-schlaegt-im-vogtland-wurzeln-artikel9950562" }
    ]
  },
  leistungen: {
    title: "Leistungen",
    items: [
      {
        id: "neubau",
        title: "Neubau",
        image: "/assets/images/03-neubau-no-bg.webp",
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
        image: "/assets/images/06-leihinstrumente-no-bg.webp",
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
        "/assets/images/allemanische-01-no-bg.webp",
        "/assets/images/alemannische-02-no-bg.webp",
        "/assets/images/alemannische-03-no-bg.webp",
        "/assets/images/alemannische-04-no-bg.webp",
        "/assets/images/alemannische-05-no-bg.webp",
        "/assets/images/alemannische-06-no-bg.webp"
      ],
      originals: [
        "/assets/images/alemannische-01.webp",
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
      email: "info@geigenbau-meisterin.de"
    },
    berufsbezeichnung: "Instrumentenbauerin",
    kammer: "Handwerkskammer Passau",
    verliehen_durch: "Handwerkskammer Chemnitz"
  }
};
