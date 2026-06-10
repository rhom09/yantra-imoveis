'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Conectando pessoas ao lugar onde a vida floresce.",
    subtitle: "Mais do que imóveis. Entregamos direção, pertencimento e novos começos.",
  },
  {
    id: 2,
    title: "Seu próximo capítulo começa aqui.",
    subtitle: "Descubra imóveis exclusivos em São Paulo.",
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-verde-profundo">
      {/* Background único fora do mapa */}
      <div
        className="absolute inset-0 z-0 bg-[length:100%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: 'url("/HeroYantra.png")' }}
      />
      {/* Overlay escuro para leitura */}
      <div className="absolute inset-0 bg-verde-profundo/40 z-10" />

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
            <div className="text-off-white flex flex-col items-center">
              <span className="text-dourado text-sm tracking-[0.2em] uppercase font-medium mb-4 block">YANTRA NEGÓCIOS IMOBILIÁRIOS</span>
              <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl font-sans text-bege/90 mb-8 max-w-2xl">
                {slide.subtitle}
              </p>
              <button className="px-8 py-4 bg-dourado hover:bg-dourado-light text-verde-profundo font-semibold rounded-full transition-all">
                FALAR NO WHATSAPP
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Indicadores de Slide */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === current ? 'bg-dourado w-8' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
}
