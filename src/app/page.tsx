'use client'

import React from 'react';
import { Search, FileText, Zap, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="flex items-center gap-3">
        {icon}
        <span className="font-sans text-xl">{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-500">{description}</p>
    </CardContent>
  </Card>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="h-12 flex items-center">
            <img src="/images/logo_h.svg" alt="CaseFox Logo" className="h-full w-auto object-contain" />
          </div>
          <Button variant="default" className="bg-burnt-sienna hover:bg-sandy-brown" onClick={() => window.location.href = 'https://app.casefox.in'}>
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-sans font-extrabold mb-6 text-persian-green">
            Transform Your Legal Practice with AI-Powered Precision
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
            Meet <span className="font-semibold text-persian-green">CaseFox</span>: Your Intelligent Legal Partner. We empower Indian advocates and law practitioners to 
            <span className="font-semibold"> navigate complex legal landscapes effortlessly</span>, saving you time and enhancing the quality of your services.
          </p>
          <Button variant="default" size="lg" className="bg-burnt-sienna hover:bg-sandy-brown" onClick={() => window.location.href = 'https://app.casefox.in'}>
            Experience the Future of Legal Practice
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-sans font-semibold mb-12 text-persian-green text-center">
            CaseFox Has You Covered
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <FeatureCard
              icon={<Search className="w-8 h-8 text-saffron" />}
              title="Intelligent Search"
              description="Find the most relevant cases instantly with our AI-powered search engine, saving you hours of manual research."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-sandy-brown" />}
              title="AI-Powered Insights"
              description="Receive expert legal perspectives on any Indian law scenario, enhancing your decision-making process."
            />
            <FeatureCard
              icon={<FileText className="w-8 h-8 text-burnt-sienna" />}
              title="Efficient Drafting"
              description="Generate and review legal documents with AI assistance, improving accuracy and reducing drafting time."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-persian-green" />}
              title="Tailored Solutions"
              description="Customize the platform to fit your practice's unique needs, ensuring seamless scalability as you grow."
            />
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-sans font-semibold mb-12 text-persian-green text-center">
            The Challenges You Face
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Overwhelming Legal Data", description: "Sifting through vast amounts of case law is time-consuming and inefficient." },
              { title: "Staying Updated", description: "Keeping up with the latest legal developments can be daunting." },
              { title: "Manual Document Drafting", description: "Traditional drafting methods are prone to errors and consume valuable time." },
              { title: "Inefficient Practice Management", description: "Customization and scalability are often lacking in generic legal tools." }
            ].map((challenge, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-burnt-sienna">{challenge.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CaseFox? */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-sans font-semibold mb-8 text-persian-green">
            Why Choose CaseFox?
          </h2>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <p className="text-xl mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              CaseFox uniquely blends <span className="font-semibold text-persian-green">advanced AI technology</span> with <span className="font-semibold text-burnt-sienna">deep legal expertise</span>, tailored specifically for the Indian legal system.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We don't just offer tools; we provide a <span className="font-semibold">transformative experience</span> that elevates your entire practice.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-sans font-semibold mb-6 text-persian-green">
            Experience the Future of Legal Practice Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Don't let outdated methods hold you back. Embrace innovation and stay ahead of the curve with CaseFox.
          </p>
          <Button variant="default" size="lg" className="bg-burnt-sienna hover:bg-sandy-brown" onClick={() => window.location.href = 'https://app.casefox.in'}>
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">Have Questions? We're Here to Help</p>
          <p className="font-medium">hello@casefox.in</p>
        </div>
      </footer>
    </div>
  );
}