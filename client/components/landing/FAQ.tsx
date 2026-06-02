"use client";

import React from "react";
import { faqs } from "@/lib/constant";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircleQuestion, PhoneCall } from "lucide-react";
import Link from "next/link";

const FAQ = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cloud-white">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-azure-calm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-trust-indigo/10">
            <MessageCircleQuestion className="w-8 h-8 text-trust-indigo" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-trust-indigo tracking-tight mb-4">
            Frequently Asked <span className="text-vital-mint">Questions</span>
          </h2>
          <p className="text-lg text-slate-depth/70 max-w-2xl mx-auto">
            Everything you need to know about the product and billing. Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
        </div>

        {/* Interactive Accordion */}
        <div className="bg-cloud-white rounded-3xl border border-border/50 shadow-sm p-4 sm:p-8 mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border/50 last:border-0"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-trust-indigo hover:text-trust-indigo/80 hover:no-underline py-6 group">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-slate-depth/80 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Fallback Support CTA */}
        <div className="bg-azure-calm/30 rounded-3xl p-8 text-center border border-trust-indigo/5">
          <h3 className="text-xl font-bold font-heading text-trust-indigo mb-2">
            Still have questions?
          </h3>
          <p className="text-slate-depth/70 mb-6">
            Our support team is available 24/7 to help you with any queries.
          </p>
          <Button 
            className="bg-trust-indigo text-cloud-white hover:bg-trust-indigo/90 rounded-full px-8"
            asChild
          >
            <Link href="/support" className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4" />
              Contact Support
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;