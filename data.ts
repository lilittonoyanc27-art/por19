import { DialogueTurn, GrammarForm } from "./types";

export const CONJUGATIONS: GrammarForm[] = [
  { subject: "yo (ես)", auxiliary: "había", participio: "pensado / comido / vivido", meaning: "ես արել էի" },
  { subject: "tú (դու)", auxiliary: "habías", participio: "pensado / comido / vivido", meaning: "դու արել էիր" },
  { subject: "él / ella / usted (նա / Դուք)", auxiliary: "había", participio: "pensado / comido / vivido", meaning: "նա արել էր" },
  { subject: "nosotros / nosotras (մենք)", auxiliary: "habíamos", participio: "pensado / comido / vivido", meaning: "մենք արել էինք" },
  { subject: "vosotros / vosotras (դուք)", auxiliary: "habíais", participio: "pensado / comido / vivido", meaning: "դուք արել էիք" },
  { subject: "ellos / ellas / ustedes (նրանք / Դուք)", auxiliary: "habían", participio: "pensado / comido / vivido", meaning: "նրանք արել էին" }
];

export const GENERAL_RULE_ARM = `
**Pluscuamperfecto** օգտագործում ենք, երբ անցյալում մի գործողություն կատարվել էր ավելի շուտ, հետո ուրիշ բան եղավ։

Օրինակ՝
**Cuando llegué, la película ya había empezado.**
*(Երբ ես հասա, ֆիլմը արդեն սկսվել էր։)*

Այստեղ՝
- **había empezado** (սկսվել էր) — ավելի շուտ էր եղել [Pluscuamperfecto]
- **llegué** (հասա) — հետո եղավ [Pretérito Indefinido]
`;

export const VERB_COMPARISON_ARM = [
  {
    tense: "Pretérito Indefinido",
    focus: "կոնկրետ ավարտված գործողություն անցյալում",
    exampleSp: "Ayer fui al cine.",
    exampleArm: "Երեկ գնացի կինո։"
  },
  {
    tense: "Pretérito Imperfecto",
    focus: "վիճակ, նկարագրություն, շարունակվող գործողություն անցյալում",
    exampleSp: "Mis amigos me esperaban.",
    exampleArm: "Ընկերներս ինձ սպասում էին։"
  },
  {
    tense: "Pluscuamperfecto",
    focus: "ավելի վաղ անցյալ, արդեն արված գործողություն (ավելի շուտ քան մյուսը)",
    exampleSp: "La película ya había empezado.",
    exampleArm: "Ֆիլմը արդեն սկսվել էր։"
  }
];

export const DIALOGUE: DialogueTurn[] = [
  {
    id: "turn_1",
    speaker: "Gor",
    fullSpanish: "Hola, Gayane. Ayer fui al cine, pero la película ya había empezado.",
    fullArmenian: "Բարև, Գայանե։ Երեկ ես գնացի կինո, բայց ֆիլմը արդեն սկսվել էր։",
    segments: [
      {
        id: "seg_1",
        spanishText: "Ayer fui al cine, pero la película ya había empezado.",
        armenianTranslation: "Երեկ ես գնացի կինո, բայց ֆիլմը արդեն սկսվել էր։",
        highlightedSpanishVerbs: ["fui", "había empezado"],
        explanation: `**fui** — **Pretérito Indefinido**
Օգտագործում ենք, որովհետև կա կոնկրետ ավարտված ժամանակ՝ **ayer — երեկ**։
**fui** = գնացի։

**había empezado** — **Pluscuamperfecto**
Օգտագործում ենք, որովհետև ֆիլմը սկսվել էր ավելի շուտ, հետո Գոռը գնաց / հասավ կինո։

- **Սկզբում՝** ֆիլմը սկսվել էր (*había empezado*)։
- **Հետո՝** Գոռը եկավ կինո (*fui*)։`
      }
    ]
  },
  {
    id: "turn_2",
    speaker: "Gayane",
    fullSpanish: "¿Llegaste tarde?",
    fullArmenian: "Դու ուշացա՞ր։",
    segments: [
      {
        id: "seg_2",
        spanishText: "¿Llegaste tarde?",
        armenianTranslation: "Դու ուշացա՞ր։",
        highlightedSpanishVerbs: ["llegaste"],
        explanation: `**llegaste** — **Pretérito Indefinido**
Սա կոնկրետ ավարտված գործողություն է անցյալում։
**llegaste** = դու հասար / եկար (այստեղ՝ ուշացար)։`
      }
    ]
  },
  {
    id: "turn_3",
    speaker: "Gor",
    fullSpanish: "Sí, porque antes había perdido el autobús.",
    fullArmenian: "Այո, որովհետև մինչ այդ ավտոբուսը բաց էի թողել։",
    segments: [
      {
        id: "seg_3",
        spanishText: "Sí, porque antes había perdido el autobús.",
        armenianTranslation: "Այսինքն՝ այո, որովհետև մինչ այդ ավտոբուսը բաց էի թողել։",
        highlightedSpanishVerbs: ["había perdido"],
        explanation: `**había perdido** — **Pluscuamperfecto**
Օգտագործում ենք, որովհետև ավտոբուսը բաց թողնելը եղել էր ավելի շուտ, հետո նոր Գոռը ուշացավ։

- **Սկզբում՝** նա ավտոբուսը բաց էր թողել (*había perdido*)։
- **Հետո՝** նա ուշացավ/եկավ ուշ (*llegó tarde*)։`
      }
    ]
  },
  {
    id: "turn_4",
    speaker: "Gayane",
    fullSpanish: "¡Qué pena! ¿Habías comprado la entrada antes?",
    fullArmenian: "Ափսոս։ Դու տոմսը նախօրոք գնե՞լ էիր։",
    segments: [
      {
        id: "seg_4",
        spanishText: "¡Qué pena! ¿Habías comprado la entrada antes?",
        armenianTranslation: "Ափսոս։ Դու տոմսը նախօրոք գնե՞լ էիր։",
        highlightedSpanishVerbs: ["habías comprado"],
        explanation: `**habías comprado** — **Pluscuamperfecto**
Սա նշանակում է՝ **գնել էիր**։
Հարցը վերաբերում է այն բանին՝ տոմսը գնված էր արդյոք ավելի շուտ, մինչև կինո գնալը։

- **habías** օգտագործվում է **tú** (դու) դեմքի համար։
- **tú habías comprado** = դու գնել էիր։`
      }
    ]
  },
  {
    id: "turn_5",
    speaker: "Gor",
    fullSpanish: "Sí, ya había comprado la entrada por internet.",
    fullArmenian: "Այո, ես արդեն տոմսը ինտերնետով գնել էի։",
    segments: [
      {
        id: "seg_5",
        spanishText: "Sí, ya había comprado la entrada por internet.",
        armenianTranslation: "Այո, ես արդեն տոմսը ինտերնետով գնել էի։",
        highlightedSpanishVerbs: ["había comprado"],
        explanation: `**había comprado** — **Pluscuamperfecto**
Տոմսը գնվել էր ավելի շուտ՝ մինչև կինո գնալը։

- **ya** նշանակում է **արդեն**, և շատ հաճախ օգտագործվում է Pluscuamperfecto-ի հետ։
- Գործողությունն արդեն ավարտվել էր մինչև կինոթատրոն հասնելը։`
      }
    ]
  },
  {
    id: "turn_6",
    speaker: "Gayane",
    fullSpanish: "¿Y tus amigos estaban allí?",
    fullArmenian: "Իսկ քո ընկերները այնտե՞ղ էին։",
    segments: [
      {
        id: "seg_6",
        spanishText: "¿Y tus amigos estaban allí?",
        armenianTranslation: "Իսկ քո ընկերները այնտե՞ղ էին։",
        highlightedSpanishVerbs: ["estaban"],
        explanation: `**estaban** — **Pretérito Imperfecto**
Այստեղ գործողություն չէ, այլ վիճակ / իրավիճակ անցյալում։ Նրանք պարզապես այնտեղ էին այդ պահին։

- **estaban** = նրանք էին / գտնվում էին։`
      }
    ]
  },
  {
    id: "turn_7",
    speaker: "Gor",
    fullSpanish: "Sí, ellos ya habían llegado y me esperaban en la entrada.",
    fullArmenian: "Այո, նրանք արդեն հասել էին և ինձ սպասում էին մուտքի մոտ։",
    segments: [
      {
        id: "seg_7",
        spanishText: "Sí, ellos ya habían llegado y me esperaban en la entrada.",
        armenianTranslation: "Այո, նրանք արդեն հասել էին և ինձ սպասում էին մուտքի մոտ։",
        highlightedSpanishVerbs: ["habían llegado", "me esperaban"],
        explanation: `**habían llegado** — **Pluscuamperfecto**
Ընկերները հասել էին ավելի շուտ, մինչև Գոռը եկավ։
**ellos habían llegado** = նրանք հասել էին։

**me esperaban** — **Pretérito Imperfecto**
Սա երկար ընթացք էր անցյալում․ նրանք որոշ ժամանակ սպասում էին։
**me esperaban** = ինձ սպասում էին։`
      }
    ]
  },
  {
    id: "turn_8",
    speaker: "Gayane",
    fullSpanish: "¿Viste toda la película?",
    fullArmenian: "Դու ամբողջ ֆիլմը դիտեցի՞ր։",
    segments: [
      {
        id: "seg_8",
        spanishText: "¿Viste toda la película?",
        armenianTranslation: "Դու ամբողջ ֆիլմը դիտեցի՞ր։",
        highlightedSpanishVerbs: ["viste"],
        explanation: `**viste** — **Pretérito Indefinido**
Հարցը կոնկրետ ավարտված գործողության մասին է՝ դիտեցի՞ր, թե՞ չդիտեցիր։

- **viste** = դու տեսար / դիտեցիր։`
      }
    ]
  },
  {
    id: "turn_9",
    speaker: "Gor",
    fullSpanish: "No, cuando entré, ya habían pasado veinte minutos.",
    fullArmenian: "Ոչ, երբ ներս մտա, արդեն քսան րոպե անցել էր։",
    segments: [
      {
        id: "seg_9",
        spanishText: "No, cuando entré, ya habían pasado veinte minutos.",
        armenianTranslation: "Ոչ, երբ ներս մտա, արդեն քսան րոպե անցել էր։",
        highlightedSpanishVerbs: ["entré", "habían pasado"],
        explanation: `**entré** — **Pretérito Indefinido**
Սա կոնկրետ պահ է անցյալում՝ ես ներս մտա։
**entré** = ես մտա։

**habían pasado** — **Pluscuamperfecto**
Քսան րոպեն անցել էր ավելի շուտ, մինչև նա ներս մտավ։

- **Սկզբում՝** քսան րոպե արդեն անցել էր (*habían pasado*)։
- **Հետո՝** նա մտավ ներս (*entré*)։`
      }
    ]
  },
  {
    id: "turn_10",
    speaker: "Gayane",
    fullSpanish: "Entonces no entendiste bien la historia.",
    fullArmenian: "Այսինքն՝ լավ չհասկացար պատմությունը։",
    segments: [
      {
        id: "seg_10",
        spanishText: "Entonces no entendiste bien la historia.",
        armenianTranslation: "Այսինքն՝ լավ չհասկացար պատմությունը։",
        highlightedSpanishVerbs: ["entendiste"],
        explanation: `**entendiste** — **Pretérito Indefinido**
Սա ավարտված արդյունք է անցյալում՝ նա չհասկացավ պատմությունը։

- **entendiste** = դու հասկացար (իսկ "no entendiste" = չհասկացար)։`
      }
    ]
  },
  {
    id: "turn_11",
    speaker: "Gor",
    fullSpanish: "Exacto. Además, antes no había leído la descripción de la película.",
    fullArmenian: "Ճիշտ է։ Բացի այդ, մինչ այդ ես ֆիլմի նկարագրությունը չէի կարդացել։",
    segments: [
      {
        id: "seg_11",
        spanishText: "Exacto. Además, antes no había leído la descripción de la película.",
        armenianTranslation: "Ճիշտ է։ Բացի այդ, մինչ այդ ես ֆիլմի նկարագրությունը չէի կարդացել։",
        highlightedSpanishVerbs: ["no había leído"],
        explanation: `**había leído** — **Pluscuamperfecto**
Սա նշանակում է՝ **կարդացել էի**։ Բայց այստեղ կա ժխտում՝ **no**'
**no había leído** = չէի կարդացել։

Օգտագործվում է, որովհետև նա պետք է կարդացած լիներ ավելի շուտ՝ մինչև ֆիլմը դիտելը, բայց չէր կարդացել։`
      }
    ]
  },
  {
    id: "turn_12",
    speaker: "Gayane",
    fullSpanish: "Yo ya había visto esa película la semana pasada. Es muy interesante.",
    fullArmenian: "Ես այդ ֆիլմը արդեն դիտել էի անցյալ շաբաթ։ Այն շատ հետաքրքիր է։",
    segments: [
      {
        id: "seg_12",
        spanishText: "Yo ya había visto esa película la semana pasada.",
        armenianTranslation: "Ես այդ ֆիլմը արդեն դիտել էի անցյալ շաբաթ։",
        highlightedSpanishVerbs: ["había visto"],
        explanation: `**había visto** — **Pluscuamperfecto**
Գայանեն ասում է, որ ինքը այդ ֆիլմը արդեն տեսել էր ավելի շուտ՝ մինչև Գոռի հետ այս խոսակցությունը։

- **ver → visto** — Սա անկանոն participio է (անցյալ դերբայ)։`
      },
      {
        id: "seg_13",
        spanishText: "Es muy interesante.",
        armenianTranslation: "Այն շատ հետաքրքիր է։",
        highlightedSpanishVerbs: ["es"],
        explanation: `**es** — **Presente (ներկա ժամանակ)**
Այստեղ օգտագործվում է ներկա ժամանակ, որովհետև ֆիլմը հիմա էլ հետաքրքիր է (ընդհանուր նկարագրություն)։

- **es** = է (ser բայից)։`
      }
    ]
  },
  {
    id: "turn_13",
    speaker: "Gor",
    fullSpanish: "Entonces, ¿puedes explicarme el principio?",
    fullArmenian: "Այդ դեպքում կարո՞ղ ես ինձ բացատրել սկիզբը։",
    segments: [
      {
        id: "seg_14",
        spanishText: "Entonces, ¿puedes explicarme el principio?",
        armenianTranslation: "Այդ դեպքում կարո՞ղ ես ինձ բացատրել սկիզբը։",
        highlightedSpanishVerbs: ["puedes", "explicarme"],
        explanation: `**puedes** — **Presente**
Գոռը հիմա է խնդրում բացատրել։
**puedes** = կարող ես (poder բայից)։

**explicarme** = բացատրել ինձ։
- **explicar** (բացատրել) + **me** (ինձ) դերանունը միացած է բայի վերջին։`
      }
    ]
  },
  {
    id: "turn_14",
    speaker: "Gayane",
    fullSpanish: "Claro. Al principio, el protagonista había perdido su teléfono y no podía llamar a nadie.",
    fullArmenian: "Իհարկե։ Սկզբում գլխավոր հերոսը կորցրել էր իր հեռախոսը և չէր կարողանում ոչ մեկին զանգել։",
    segments: [
      {
        id: "seg_15",
        spanishText: "Al principio, el protagonista había perdido su teléfono y no podía llamar a nadie.",
        armenianTranslation: "Իհարկե։ Սկզբում գլխավոր հերոսը կորցրել էր իր հեռախոսը և չէր կարողանում ոչ մեկին զանգել։",
        highlightedSpanishVerbs: ["había perdido", "no podía"],
        explanation: `**había perdido** — **Pluscuamperfecto**
Հերոսը հեռախոսը կորցրել էր ավելի շուտ (*había perdido*), քան չէր կարողանում զանգել։

**no podía** — **Pretérito Imperfecto**
Սա երկարատև վիճակ / անկարողություն էր անցյալում։ Նա չէր կարողանում զանգել։

- **no podía** = չէր կարողանում / չէր կարող։`
      }
    ]
  },
  {
    id: "turn_15",
    speaker: "Gor",
    fullSpanish: "Ah, ahora entiendo. Yo había pensado que era otra historia.",
    fullArmenian: "Ահա, հիմա հասկանում եմ։ Ես մտածել էի, որ դա ուրիշ պատմություն է։",
    segments: [
      {
        id: "seg_16",
        spanishText: "Ah, ahora entiendo.",
        armenianTranslation: "Ահա, հիմա հասկանում եմ։",
        highlightedSpanishVerbs: ["entiendo"],
        explanation: `**entiendo** — **Presente (ներկա ժամանակ)**
Գոռը հիմա է հասկանում իրավիճակը (entendiendo en el presente)։

- **entiendo** = հասկանում եմ (entender բայից)։
- **ahora** = հիմա։`
      },
      {
        id: "seg_17",
        spanishText: "Yo había pensado que era otra historia.",
        armenianTranslation: "Ես մտածել էի, որ դա ուրիշ պատմություն էր / է։",
        highlightedSpanishVerbs: ["había pensado", "era"],
        explanation: `**había pensado** — **Pluscuamperfecto**
Գոռը ավելի շուտ այդպես էր մտածել (մինչև Գայանեի բացատրելը)։

- **había pensado** = մտածել էի (pensar բայից)։

**era** — **Pretérito Imperfecto**
Սա նկարագրություն / պատկերացում է անցյալում։ Նա կարծում էր, որ դա ուրիշ պատմություն էր։

- **era** = էր (ser բայի անկատար ձևը)։`
      }
    ]
  }
];
