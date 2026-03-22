'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import Reasons from '@/components/Reasons';
import ServiceSection from '@/components/ServiceSection';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const designServices = [
  {
    title: 'Websites and Platforms',
    description: 'We are ready to work on projects of any complexity and size. With our profound design experience, we can create both one-page sites and complex admin panels.',
    imageDark: '/img/home/websites-dark.webp',
    imageLight: '/img/home/websites-light.webp',
  },
  {
    title: 'Mobile Apps',
    description: 'We create interfaces that are not only good-looking, but also simple and easy to use. We also follow platform guidelines.',
    imageDark: '/img/home/mobile-apps-dark.webp',
    imageLight: '/img/home/mobile-apps-light.webp',
  },
  {
    title: 'Strategy and Branding',
    description: 'We develop logos, corporate identities, user manuals, mockups, and souvenirs consistent with your brand.',
    image: '/img/home/branding.webp',
  },
  {
    title: 'Design Concept',
    description: 'We will create a design concept that will become a solid foundation for the future digital product.',
    image: '/img/home/concept.webp',
  },
];

const devServices = [
  {
    title: 'Web Services',
    description: 'With our technical solutions, you can get digital products created specifically for your business aim.',
    imageDark: '/img/home/web-services-dark.webp',
    imageLight: '/img/home/web-services-light.webp',
  },
  {
    title: 'Native Mobile Development',
    description: 'We create custom mobile apps for iOS and Android using Swift and Kotlin.',
    imageDark: '/img/home/native-dark.webp',
    imageLight: '/img/home/native-light.webp',
  },
  {
    title: 'React Native Development',
    description: 'We use React Native to create cross-platform apps that work on both iOS and Android platforms.',
    imageDark: '/img/home/hybrid-dark.webp',
    imageLight: '/img/home/hybrid-light.webp',
  },
  {
    title: 'Quality Assurance',
    description: "We run manual and automated tests to ensure your product's quality on all stages.",
    imageDark: '/img/home/quality-dark.webp',
    imageLight: '/img/home/quality-light.webp',
  },
];

const maintServices = [
  {
    title: 'Post-release Support',
    description: 'We help to keep projects up-to-date with the latest technologies and platform requirements.',
    image: '/img/home/postrelease.webp',
  },
  {
    title: 'System Administration',
    description: 'Keeping your project up and running 24/7/365 is important for business continuity.',
    image: '/img/home/administration.webp',
  },
];

export default function Home() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <WhatWeDo />
        <Reasons />
        <ServiceSection
          number="01"
          title="Design"
          description="We work hard to create eye-catching and intuitive interface designs that provide users with an enjoyable experience."
          services={designServices}
          ctaLink="/services#design"
          theme={theme}
        />
        <ServiceSection
          number="02"
          title="Development"
          description="When working on a project, we not only establish scalable architecture design using best industry practices but also provide high-level data security."
          services={devServices}
          ctaLink="/services#development"
          alt
          theme={theme}
        />
        <ServiceSection
          number="03"
          title="Maintenance"
          description="Constant updating, modifying, and re-assessing of software is one way to make them user-oriented and up-to-date."
          services={maintServices}
          ctaLink="/services#maintenance"
          theme={theme}
        />
        <CaseStudies theme={theme} />
        <Testimonials />
        <Stats />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
