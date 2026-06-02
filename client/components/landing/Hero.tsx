"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { healthcareCategories } from "@/lib/constant";
import { CheckCircle2 } from "lucide-react";

const Hero = () => {
  const handleclick = (categoryTitle: string) => {
    console.log(`Navigating to category: ${categoryTitle}`);
  };
  const trustIndicators = [
    "500+ Certified Doctors",
    "50,000+ Satisfied Patients",
    "24/7 Availability",
  ];

  return (
    <section className="relative pt-32 pb-20 px-4 bg-linear-to-b from-azure-calm/50 to-cloud-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-vital-mint/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold font-heading tracking-tight text-trust-indigo leading-[1.1] mb-6">
          The Place where <br className="hidden md:block" />
          <span className="text-vital-mint relative">
            doctors listens to you.
          </span>
          {/* <svg className="absolute w-full h-3 -bottom-1 left-0 text-vital-mint/30" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none"/>
          </svg> */}
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-depth/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Online primary care that's affordable with or without insurance.
          Quality healthcare, accessible anytime, anywhere.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-semibold bg-trust-indigo text-cloud-white hover:text-trust-indigo/90 shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/">Book a video visit</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-semibold border-2 border-trust-indigo/20 text-trust-indigo hover:bg-azure-calm hover:border-trust-indigo/40 transition-all"
          >
            <Link href="/login/doctor">Login as Doctor</Link>
          </Button>
        </div>

        {/* Healthcare categories */}

        <div className="mb-16">
          <p className="text-sm font-medium text-slate-depth/60 uppercase tracking-wider mb-6">
            Browse by Speciality
          </p>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-cloud-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-cloud-white to-transparent z-10 pointer-events-none" />
            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 pt-2 px-4 snap-x custom-scrollbar">
              {healthcareCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleclick(category.title)}
                  className="flex flex-col items-center min-w-[110px] group outline-none snap-start"
                >
                  <div
                    className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-3 group-hover:translate-y-1 group-hover:shadow-lg transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-trust-indigo ring-offset-2`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-depth group-hover:text-trust-indigo transition-colors leading-tight">
                    {category.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 pt-8 border-t border-border/50 max-w-4xl mx-auto">
          {trustIndicators.map((text, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-azure-calm/50 px-4 py-2 rounded-full border border-trust-indigo/5"
            >
              <CheckCircle2 className="w-4 h-4 text-vital-mint" />
              <span className="text-sm font-medium text-slate-depth">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
