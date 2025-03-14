"use client";

import React from 'react';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import AboutSection from '@/components/About';
import Services from '@/components/Services';
import TestimonialSection from '@/components/testmonials';
import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/Scroll';
import Preloader from '@/components/Loding';
import Cursor from '@/components/cursor';
import Awards, { awardsData } from '@/components/Awardes';

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <AboutSection />
      <Services />
      <Projects />
      <Awards  awards={awardsData} />
      <TestimonialSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <Preloader />
      <Cursor />
    </div>
  );
}

