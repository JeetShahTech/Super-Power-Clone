export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_Fallback: Faq[] = [
  {
    id: "f1",
    question: "Do I need to speak with a doctor?",
    answer:
      "Not always. Many members are approved based on their assessment alone. If needed, a brief telehealth visit may be scheduled.",
  },
  {
    id: "f2",
    question: "Is my information secure?",
    answer:
      "Yes. Your personal and health information is handled securely and reviewed only by authorized healthcare professionals.",
  },
  {
    id: "f3",
    question: "Are there long-term commitments?",
    answer:
      "No. SanaVida offers flexible plans with transparent pricing. You stay in control of your care at every step.",
  },
];
