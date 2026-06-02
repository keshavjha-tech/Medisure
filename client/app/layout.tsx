import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Standard UI/Data font
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap', 
});

// Brand/Heading font
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'MediSure | Professional Online Doctor Consultations',
    template: '%s | MediSure'
  },
  description: 'Connect with certified doctors online for quality healthcare. MediSure provides secure, real-time video consultations and digital prescriptions.',
  keywords: ['telemedicine', 'online doctor', 'healthcare', 'ZEGOCLOUD video call', 'medical advice'],
  authors: [{ name: 'MediSure Team' }],
  // S-Tier: Essential for production medical apps
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={cn(
        "scroll-smooth", 
        inter.variable, 
        plusJakarta.variable
      )}
    >
      <body className="antialiased selection:bg-trust-indigo/10 selection:text-trust-indigo">
        {children}
      </body>
    </html>
  );
}
