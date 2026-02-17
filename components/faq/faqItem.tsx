"use client";

import { useRef } from "react";

type Props = {
  id: string;
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
};

export default function FaqItem({ question, answer, open, onClick }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
      aria-label="faqitem"
        onClick={onClick}
        className="cursor-pointer w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-2xl">{open ? "-" : "+"}</span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <div
          className="pt-4 text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
}
