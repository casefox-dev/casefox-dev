'use client'

import React, { useState } from 'react';
import { Search, FileText, Zap, Users, ArrowRight, MessageCircle, Scale, BookOpen, Briefcase, BarChart } from 'lucide-react';
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
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation bar */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 shadow-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="h-8 flex items-center">
            <img src="/images/logo_h.svg" alt="CaseFox Logo" className="h-full w-auto object-contain" />
          </div>
          <Button variant="default" className="bg-burnt-sienna hover:bg-sandy-brown" onClick={() => window.location.href = 'https://app.casefox.in'}>
            Get Started
          </Button>
        </div>
      </nav>

      {/* Modified Hero Section */}
      <header className="py-24 bg-gradient-to-br from-persian-green to-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-sans font-extrabold mb-6 leading-tight">
            Transform Your Legal Practice with AI-Powered Precision
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Meet <span className="font-semibold text-saffron">CaseFox</span>: Your Intelligent Legal Partner. We empower Indian advocates and law practitioners to 
            <span className="font-semibold"> navigate complex legal landscapes effortlessly</span>, saving you time and enhancing the quality of your services.
          </p>
          <Button variant="default" size="lg" className="bg-white text-charcoal hover:bg-sandy-brown hover:text-white transition-colors duration-300" onClick={() => window.location.href = 'https://app.casefox.in'}>
            Experience the Future of Legal Practice
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Modified Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold mb-12 text-persian-green text-center">
            CaseFox Has You Covered
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Scale className="w-12 h-12 text-saffron" />, title: "Intelligent Search", description: "Find the most relevant cases instantly with our AI-powered search engine, saving you hours of manual research." },
              { icon: <BookOpen className="w-12 h-12 text-sandy-brown" />, title: "AI-Powered Insights", description: "Receive expert legal perspectives on any Indian law scenario, enhancing your decision-making process." },
              { icon: <Briefcase className="w-12 h-12 text-burnt-sienna" />, title: "Efficient Drafting", description: "Generate and review legal documents with AI assistance, improving accuracy and reducing drafting time." },
              { icon: <BarChart className="w-12 h-12 text-persian-green" />, title: "Tailored Solutions", description: "Customize the platform to fit your practice's unique needs, ensuring seamless scalability as you grow." }
            ].map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Modified Challenges Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold mb-12 text-persian-green text-center">
            The Challenges You Face
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Search className="w-12 h-12 text-saffron" />, title: "Overwhelming Legal Data", description: "Sifting through vast amounts of case law is time-consuming and inefficient." },
              { icon: <Zap className="w-12 h-12 text-sandy-brown" />, title: "Staying Updated", description: "Keeping up with the latest legal developments can be daunting." },
              { icon: <FileText className="w-12 h-12 text-burnt-sienna" />, title: "Manual Document Drafting", description: "Traditional drafting methods are prone to errors and consume valuable time." },
              { icon: <Users className="w-12 h-12 text-persian-green" />, title: "Inefficient Practice Management", description: "Customization and scalability are often lacking in generic legal tools." }
            ].map((challenge, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    {challenge.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-burnt-sienna text-center">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upgraded Why Choose CaseFox? Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-persian-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold mb-8">
            Why Choose CaseFox?
          </h2>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl mb-6 leading-relaxed">
              CaseFox uniquely blends <span className="font-semibold text-saffron">advanced AI technology</span> with <span className="font-semibold text-sandy-brown">deep legal expertise</span>, tailored specifically for the Indian legal system.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              We don&apos;t just offer tools; we provide a <span className="font-semibold">transformative experience</span> that elevates your entire practice.
            </p>
          </div>
        </div>
      </section>

      {/* New Testimonial Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold mb-12 text-persian-green text-center">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Priya Sharma", role: "Corporate Lawyer", quote: "CaseFox has revolutionized how I approach legal research. It's an indispensable tool in my practice." },
              { name: "Rahul Verma", role: "Criminal Defense Attorney", quote: "The AI-powered insights have given me a competitive edge in court. CaseFox is a game-changer." }
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <p className="text-lg mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold mb-6 text-persian-green">
            Experience the Future of Legal Practice Today
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Don&apos;t let outdated methods hold you back. Embrace innovation and stay ahead of the curve with CaseFox.
          </p>
          <Button variant="default" size="lg" className="bg-burnt-sienna hover:bg-sandy-brown text-white" onClick={() => window.location.href = 'https://app.casefox.in'}>
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Improved Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">CaseFox</h3>
              <p className="text-gray-400">Empowering legal professionals with AI-driven solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Features', 'Pricing', 'About Us'].map((link) => (
                  <li key={link}><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400 mb-2">hello@casefox.in</p>
              <div className="flex space-x-4 mt-4">
                {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">© 2024 CaseFox. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <button
        onClick={() => setShowContact(!showContact)}
        className="fixed bottom-8 right-8 bg-persian-green text-white p-4 rounded-full shadow-lg hover:bg-charcoal transition-colors duration-300"
        aria-label="Contact Us"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Contact Form Placeholder */}
      {showContact && (
        <div className="fixed bottom-24 right-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-4">Contact form placeholder. Implement your contact form here.</p>
          <Button onClick={() => setShowContact(false)}>Close</Button>
        </div>
      )}
    </div>
  );
}