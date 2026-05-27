export interface DialogueSegment {
  id: string; // e.g. "s1", "s2_1", "s2_2"
  spanishText: string;
  armenianTranslation: string;
  explanation: string;
  highlightedSpanishVerbs: string[]; // Spanish verbs discussed
}

export interface DialogueTurn {
  id: string;
  speaker: "Gor" | "Gayane";
  fullSpanish: string;
  fullArmenian: string;
  // A turn might contain one or more segments with grammatical explanations
  segments: DialogueSegment[];
}

export interface GrammarForm {
  subject: string;
  auxiliary: string;
  participio: string;
  meaning: string;
}
