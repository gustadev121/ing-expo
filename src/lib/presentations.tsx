import { EnglishGrammarPresentation } from "@/topics/english-grammar/presentation/slides";
import { MicrophotoPresentation } from "@/topics/microphoto/presentation/slides";

export const presentations = [
  {
    slug: "microphoto",
    path: "/presentations/microphoto",
    title: "Microphoto",
    description:
      "Procesamiento paralelo de imágenes sobre una arquitectura de sistemas distribuidos",
    component: MicrophotoPresentation,
  },
  {
    slug: "english-grammar",
    path: "/presentations/english-grammar",
    title: "Past Simple & Past Continuous",
    description:
      "Understanding the difference between Past Simple and Past Continuous tenses in English",
    component: EnglishGrammarPresentation,
  },
];
