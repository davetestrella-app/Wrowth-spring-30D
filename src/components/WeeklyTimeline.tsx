/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Compass, LayoutGrid, Cpu, PhoneCall } from "lucide-react";
import { WeeklyMilestone } from "../types";

const weeklyMilestones: WeeklyMilestone[] = [
  {
    week: "Semana 1",
    title: "Claridad y posicionamiento.",
    badge: "FUNDACIÓN",
    description: "Cimentamos las bases de tu ecosistema. Definimos tu nicho de alta conversión, clarificamos tus diferenciadores clave y estructuramos tu mensaje único.",
    items: [
      "Perfil de cliente ideal ultra-calificado",
      "Estructuración de tu Declaración de Posicionamiento Único",
      "Definición de pilares temáticos clave y nicho comercial"
    ]
  },
  {
    week: "Semana 2",
    title: "Sistema de contenido.",
    badge: "ESTRATEGIA",
    description: "Creamos un motor Perpetuo de Generación de Ideas para que nunca más vuelvas a preguntarte '¿qué publico hoy?' de manera improvisada.",
    items: [
      "Instalación de tu matriz de ideas infinitas",
      "Estructura paso a paso para ganchos magnéticos (Hooks)",
      "Vincular tus posts a tu catálogo de llamadas a la acción (CTA)"
    ]
  },
  {
    week: "Semana 3",
    title: "Producción con IA.",
    badge: "OPTIMIZACIÓN",
    description: "Aceleramos tu producción por x10. Aprenderás a entrenar a tu propio clon IA para que te escriba guiones pulidos en segundos con tu voz y estilo exacto.",
    items: [
      "Prompts secretos de entrenamiento de tono y estilo con ChatGPT/Gemini",
      "Grabación ultrarrápida guiada y workflows de edición con IA",
      "Clonación de voz y generación automática de subtítulos dinámicos"
    ]
  },
  {
    week: "Semana 4",
    title: "Conversión y ventas.",
    badge: "MONETIZACIÓN",
    description: "Conectamos las vistas con tu cuenta bancaria. Convertimos a tus espectadores en mensajes directos que viajan directamente hacia una llamada de ventas.",
    items: [
      "Configuración de disparadores de automatización en comentarios",
      "Guión conversacional ético para calificar prospectos en MD",
      "Estructura exacta para agendado de llamadas calificados de alto valor"
    ]
  }
];

const getWeekIcon = (idx: number) => {
  const cn = "w-5 h-5 text-lime-400";
  switch (idx) {
    case 0: return <Compass className={cn} />;
    case 1: return <LayoutGrid className={cn} />;
    case 2: return <Cpu className={cn} />;
    case 3: return <PhoneCall className={cn} />;
    default: return <Sparkles className={cn} />;
  }
};

export const WeeklyTimeline: React.FC = () => {
  return (
    <section id="plan" className="py-24 bg-zinc-950 border-b border-zinc-800 relative overflow-hidden">
      {/* Visual glowing meshes in background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-zinc-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-10 w-96 h-96 bg-lime-400/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-4 font-mono text-[10px] tracking-[0.2em] font-bold rounded-none uppercase">
              30 DÍAS DE EJECUCIÓN INTENSA
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light italic text-white tracking-tight mb-6">
              Qué Incluye el <span className="not-italic font-sans font-black text-lime-400 uppercase">Sprint 30D</span>
            </h2>
            <p className="text-zinc-400 text-sm">
              Un acompañamiento práctico de alta intensidad donde edificamos tu motor de ventas de semana a semana. No es teoría, es construcción conjunta garantizada.
            </p>
          </motion.div>
        </div>

        {/* 4 Weekly Horizontal/Vertical Cards in a highly stylized layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line between steps on large displays */}
          <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-zinc-800/0 via-zinc-800/80 to-zinc-800/0 z-0" />
          
          {weeklyMilestones.map((milestone, idx) => (
            <motion.div
              key={milestone.week}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-zinc-90 w-full border border-zinc-850 bg-zinc-900/10 rounded-none p-6 relative group flex flex-col justify-between hover:border-lime-400/40 transition-all duration-300 z-10"
              id={`milestone-${idx}`}
            >
              <div>
                {/* Week & Icon header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono font-bold px-3 py-1 bg-zinc-900 text-lime-400 rounded-none border border-zinc-850">
                    {milestone.week}
                  </span>
                  <div className="w-9 h-9 rounded-none bg-zinc-950/60 border border-zinc-800 flex items-center justify-center">
                    {getWeekIcon(idx)}
                  </div>
                </div>

                <div className="mb-4 text-left">
                  <span className="text-[9px] font-mono tracking-widest text-lime-400 font-bold uppercase block">
                    {milestone.badge}
                  </span>
                  <h4 className="text-sm font-bold uppercase text-white mt-1 tracking-wider leading-snug">
                    {milestone.title}
                  </h4>
                </div>

                <p className="text-zinc-400 text-xs leading-relaxed mb-6 text-left">
                  {milestone.description}
                </p>
              </div>

              {/* Items checklist styled with clean minimalist vectors */}
              <div className="mt-4 pt-4 border-t border-zinc-850 space-y-3 text-left">
                {milestone.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-2">
                    <span className="text-lime-400 font-mono text-[11px] shrink-0 font-bold">—</span>
                    <span className="text-[11px] text-zinc-300 leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
