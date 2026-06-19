export type KnowledgeArticle = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  readTime: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "eiwitwaarde-w-waarde-pl",
    title: "Eiwitwaarde, W-waarde en P/L",
    eyebrow: "Bloemwaarden",
    summary: "De technische signalen achter sterkte, rekbaarheid en fermentatiegedrag van bloem.",
    readTime: "4 min",
    sections: [
      {
        title: "Eiwit is niet het hele verhaal",
        body:
          "Een hoger eiwitpercentage kan helpen bij structuur, maar zegt niet automatisch hoe sterk of soepel een deeg wordt. De kwaliteit van het gluten, de maling en de tarwesoort bepalen samen hoe de bloem reageert."
      },
      {
        title: "W-waarde gaat over kracht",
        body:
          "De W-waarde geeft een indicatie van de deegsterkte. Voor lange fermentatie of hoge hydratatie wil je meestal een bloem die genoeg kracht heeft om gas vast te houden zonder snel in te zakken."
      },
      {
        title: "P/L laat balans zien",
        body:
          "P/L zegt iets over elasticiteit tegenover rekbaarheid. Een deeg dat te elastisch is veert sterk terug; een deeg dat te rekbaar is kan snel slap worden. Voor pizza en zuurdesem zoek je vaak een specifieke balans."
      }
    ]
  },
  {
    slug: "fermentatie-biga-poolish-zuurdesem",
    title: "Biga, poolish en zuurdesem",
    eyebrow: "Fermentatie",
    summary: "Hoe verschillende prefermenten invloed hebben op smaak, structuur en planning.",
    readTime: "5 min",
    sections: [
      {
        title: "Fermentatie als keuze",
        body:
          "Fermentatie is meer dan rijstijd. De methode bepaalt hoeveel enzymactiviteit, zuren, aroma en deegsterkte je opbouwt voordat het deeg de oven in gaat."
      },
      {
        title: "Biga bouwt kracht en aroma",
        body:
          "Biga is relatief droog en wordt vaak gebruikt voor kracht, aroma en een open structuur. De juiste bloemkeuze is belangrijk omdat het deeg lang moet kunnen dragen."
      },
      {
        title: "Poolish geeft soepelheid",
        body:
          "Poolish is natter en kan zorgen voor een soepel deeg met milde smaakontwikkeling. Het past goed bij baksels waar extensibiliteit en een lichte kruim belangrijk zijn."
      }
    ]
  },
  {
    slug: "bloem-voor-lange-fermentatie",
    title: "Bloem voor lange fermentatie",
    eyebrow: "Selectie",
    summary: "Waar je op let als deeg 24, 48 of 72 uur moet fermenteren.",
    readTime: "4 min",
    sections: [
      {
        title: "Sterkte moet passen bij tijd",
        body:
          "Hoe langer de fermentatie, hoe belangrijker het wordt dat de bloem genoeg structuur kan houden. Te zwakke bloem kan slap worden voordat smaak en luchtigheid zijn opgebouwd."
      },
      {
        title: "Niet elke sterke bloem is ideaal",
        body:
          "Een heel sterke bloem kan ook stug of moeilijk vormbaar worden. Voor pizza, brood en focaccia zijn andere balansen tussen kracht en rekbaarheid nodig."
      },
      {
        title: "Testen blijft nodig",
        body:
          "Specificaties helpen bij kiezen, maar de echte waarde zit in testen: hydratatie, temperatuur, rijstijd en bakmethode bepalen samen het resultaat."
      }
    ]
  }
];

export function getKnowledgeArticle(slug: string) {
  return knowledgeArticles.find((article) => article.slug === slug);
}
