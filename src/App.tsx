import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Beneficios } from './components/Beneficios';
import { Servicios } from './components/Servicios';
import { ServiciosPage } from './components/ServiciosPage';
import { ArquitecturaSpotlight } from './components/ArquitecturaSpotlight';
import { Proyectos } from './components/Proyectos';
import { PorQueElegirnos } from './components/PorQueElegirnos';
import { Ubicaciones } from './components/Ubicaciones';
import { CallToActionBanner } from './components/CallToActionBanner';
import { ContactoPage } from './components/ContactoPage';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [currentView, setCurrentView] = useState<'home' | 'contacto' | 'servicios'>('home');

  useEffect(() => {
    if (currentView !== 'home') return;

    const handleScroll = () => {
      const sections = ['inicio', 'por-que-elegirnos', 'servicios', 'proyectos'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  return (
    <div className={`min-h-screen ${currentView === 'contacto' ? 'bg-white text-gray-900' : 'bg-[#1A1F26] text-white'} selection:bg-[#E8501E] selection:text-white`}>
      <Preloader />
      
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#E8501E] z-[60] w-full origin-left animate-pulse" />

      <Navbar
        activeSection={activeSection}
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
      />
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <Beneficios />
            <Servicios />
            <ArquitecturaSpotlight />
            <Proyectos />
            <PorQueElegirnos />
            <Ubicaciones />
            <CallToActionBanner onNavigateContact={() => {
              setCurrentView('contacto');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />
          </>
        )}

        {currentView === 'contacto' && (
          <ContactoPage onBackToHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}

        {currentView === 'servicios' && (
          <ServiciosPage
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateContact={() => {
              setCurrentView('contacto');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}




