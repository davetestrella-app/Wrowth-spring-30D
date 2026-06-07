/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Target, Search, Sparkles, PenTool, Cpu, Coins, ChevronRight } from "lucide-react";
import { GrowthStep } from "../types";

const growthSteps: GrowthStep[] = [
  {
    letter: "G",
    title: "Goal (Metas de Negocio)",
    shortDescription: "Definimos objetivos claros.",
    longDescription: "Antes de escribir una sola palabra, estructuramos tu embudo de ventas. Definimos cuánto vale cada cliente, cuántos leads necesitas mensualmente y cómo cada pieza de contenido empujará al usuario a agendar una sesión contigo.",
    iconName: "Target"
  },
  {
    letter: "R",
    title: "Research (Estudio con IA)",
    shortDescription: "Encontramos las oportunidades.",
    longDescription: "Aniquilamos las suposiciones. Usamos prompts de investigación avanzados para extraer las preguntas, frustraciones y mayores objeciones de tu cliente ideal en foros, redes y buscadores. Sabrás exactamente qué quieren comprar.",
    iconName: "Search"
  },
  {
    letter: "O",
    title: "Offer (Oferta Irresistible)",
    shortDescription: "Construimos una oferta atractiva.",
    longDescription: "El mejor contenido falla si vende algo aburrido o genérico. Rediseñamos cómo comunicas tu servicio para crear una oferta premium irresistible. Pasarás de competir por precio a ser la única opción lógica.",
    iconName: "Sparkles"
  },
  {
    letter: "W",
    title: "Write (Guiones Estratégicos)",
    shortDescription: "Creamos guiones estratégicos.",
    longDescription: "Creamos la estructura exacta que detona la retención. Diseñamos ganchos psicológicos (hooks), historias envolventes y llamadas a la acción (CTAs) de conversión que guiarán a los espectadores hacia tu bandeja de entrada.",
    iconName: "PenTool"
  },
  {
    letter: "T",
    title: "Transform (Copiloto IA)",
    shortDescription: "Producimos contenido con IA.",
    longDescription: "Producción veloz sin fricciones técnicas. Te enseñamos a usar herramientas de Inteligencia Artificial para clonar tu voz, subtitular de forma dinámica, generar imágenes de apoyo y editar contenido en minutos, reduciendo horas de trabajo.",
    iconName: "Cpu"
  },
  {
    letter: "H",
    title: "Harvest (Cosecha de Ventas)",
    shortDescription: "Convertimos atención en oportunidades.",
    longDescription: "Atención sin monetización es solo vanidad. Creamos el sistema conversacional que empuja a tus seguidores calientes a escribir una palabra clave en tus comentarios o mensajes directos, facilitando el cierre de ventas.",
    iconName: "Coins"
  }
];

const getIcon = (name: string, isActive: boolean) => {
  const props = { className: `w-5 h-5 transition-colors duration-300 ${isActive ? "text-lime-400" : "text-zinc-500 group-hover:text-lime-400"}` };
  switch (name) {
    case "Target": return <Target {...props} />;
    case "Search": return <Search {...props} />;
    case "Sparkles": return <Sparkles {...props} />;
    case "PenTool": return <PenTool {...props} />;
    case "Cpu": return <Cpu {...props} />;
    case "Coins": return <Coins {...props} />;
    default: return <Sparkles {...props} />;
  }
};

export const Methodology: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="metodo" className="py-24 bg-zinc-950 border-b border-zinc-800 relative overflow-hidden">
      {/* Absolute graphic lines & grid points simulating fine editorial work */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/10 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-px bg-zinc-900/10" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 font-sans">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lime-400 text-[10px] font-mono tracking-[0.25em] uppercase mb-3">
              ¿CÓMO LO HACEMOS?
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-light italic text-white tracking-tight mb-6">
              El Método <span className="not-italic font-sans font-black text-lime-400">G.R.O.W.T.H.</span>
            </h3>
            <p className="text-zinc-400 text-sm">
              Un paso a paso milimétrico diseñado para estructurar, escribir, grabar y vender constantemente en 30 días. Haz clic en cada fase para ver los detalles estratégicos.
            </p>
          </motion.div>
        </div>

        {/* Layout split: Left Side Interactive Stepper / Right Side Content detail */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left panel - 5 cols (Interactive List) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {growthSteps.map((step, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={step.letter}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left p-4 rounded-none border transition-all duration-300 flex items-center gap-4 ${
                    isActive
                      ? "bg-zinc-900 border-lime-400/60 shadow-lg"
                      : "bg-zinc-900/20 border-zinc-850 hover:border-zinc-700 hover:bg-zinc-900/40"
                  }`}
                  id={`method-step-${step.letter}`}
                >
                  <div
                    className={`w-12 h-12 rounded-none flex items-center justify-center font-mono font-black text-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-lime-400 text-zinc-950 scale-105"
                        : "bg-zinc-800 text-lime-400/90 border border-zinc-700"
                    }`}
                  >
                    {step.letter}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm md:text-base font-black uppercase transition-colors tracking-wider ${isActive ? "text-lime-400" : "text-zinc-200"}`}>
                        {step.title}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-lime-400 transition-transform duration-300 ${isActive ? "translate-x-1" : "opacity-0"}`} />
                    </div>
                    <span className="text-xs md:text-sm text-lime-300/90 mt-0.5 block font-serif italic font-normal">
                      {step.shortDescription}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right panel - 7 cols (Active Step Visualized) */}
          <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-850 rounded-none p-8 md:p-10 flex flex-col justify-between relative overflow-hidden self-stretch">
            {/* Background elements */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-lime-400/5 rounded-full blur-[80px]" />
            <div className="absolute top-2 right-4 text-[180px] md:text-[240px] font-mono font-black text-zinc-800/25 select-none leading-none pointer-events-none">
              {growthSteps[activeIndex].letter}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="inline-flex p-3 rounded-none bg-zinc-950/80 border border-zinc-800 mb-8">
                    {getIcon(growthSteps[activeIndex].iconName, true)}
                  </div>
                  
                  <span className="text-[10px] font-mono font-bold text-lime-400 tracking-[0.2em] block mb-2 uppercase">
                    Fase {activeIndex + 1} de 6
                  </span>
                  
                  <h4 className="text-2xl md:text-3xl font-serif font-light italic text-white mb-4">
                    {growthSteps[activeIndex].title}
                  </h4>
                  
                  <p className="text-zinc-200 text-base md:text-lg leading-relaxed mb-8">
                    {growthSteps[activeIndex].longDescription}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-850 flex flex-wrap gap-x-8 gap-y-4 items-center">
                  <div className="flex -space-x-1">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="w-5 h-5 rounded-none bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-[9px] font-mono font-bold text-lime-400">
                        ✓
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                    Clase teórica • Hitos de implementación • Mentoría grupal
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
