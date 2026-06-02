import { testimonials } from "@/lib/constant";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Quote, Star } from "lucide-react";
import { Button } from "../ui/button";

const Testimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-azure-calm/30 overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-vital-mint/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-trust-indigo tracking-tight mb-6">
            Real stories from <br />
            <span className="text-vital-mint">real patients.</span>
          </h2>

          {/* Aggregate rating */}
          <div className="inline-flex flex-col items-center bg-cloud-white px-6 py-4 rounded-2xl shadow:sm border border-border/50">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl font-bold text-text-slate-depth">
                4.8
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < 4 ? "fill-digital-peach text-digital-peach" : "fill-digital-peach/30 text-digital-peach/30"}`}
                  />
                ))}
              </div>
            </div>
            <span className="text-sm font-medium text-slate-depth/60">
              Based on 5,000+ verified reviews
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="bg-cloud-white border-border/50 hover:shadow-xl hover:border-trust-indigo/20 transition-all duration-300 group flex flex-col h-full relative"
            >
              <CardContent className="p-8 flex flex-col flex-1">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-azure-calm/70 rotate-180 z-0" />

                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, starId) => (
                    <Star
                      key={starId}
                      className="w-4 h-4 fill-digital-peach text-digital-peach"
                    />
                  ))}
                </div>

                <p className="text-base text-slate-depth/80 mb-8 leading-relaxed flex-1 relative z-10">
                  {testimonial.text}
                </p>

                <div className="mt-auto relative z-10 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    {/* Placeholder Avatar based on Initial */}
                    <div className="w-10 h-10 rounded-full bg-trust-indigo/5 text-trust-indigo flex items-center justify-center font-bold font-heading text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-trust-indigo leading-none mb-1">
                        {testimonial.author}
                      </p>
                      <p className="text-xs font-medium text-slate-depth/60 uppercase tracking-wider">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-2 border-trust-indigo/20 text-trust-indigo hover:bg-trust-indigo hover:text-cloud-white transition-all font-semibold px-8"
          >
            Read more patient stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
