import FAQ from "@/components/landing/FAQ";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Testimonials from "@/components/landing/Testimonials";
import { Footer } from "react-day-picker";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
    <Header showDashboardNav={false}/> 

    <div className="flex-1">
      <Hero />
      <Testimonials />
      <FAQ />
    </div>

    <Footer />
    </main>
  );
}