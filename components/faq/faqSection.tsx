"use client";

import { useState, useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectFaq } from "@/store/selectors/faqselectors";
import { FAQ_Fallback } from "@/constants/faqFallback";
import FaqItem from "./faqItem";

export default function FaqSection() {
  // get API data
  const apiFaq = useAppSelector(selectFaq);

  const faqs = useMemo(
    () => (apiFaq && apiFaq.length > 0 ? apiFaq : FAQ_Fallback),
    [apiFaq],
  );

  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-serif mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {faqs.map((faq) => (
            <FaqItem
              key={faq.id}
              {...faq}
              open={openId === faq.id}
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
