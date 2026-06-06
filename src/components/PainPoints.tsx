/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { AlertTriangle, HelpCircle, Inbox, Users, Clock, TrendingDown } from "lucide-react";
import { PainPoint } from "../types";

const painPoints: PainPoint[] = [
  {
    id: "p1",
    text: "No sabes qué publicar.",
    iconName: "HelpCircle",
    description: "Pasas horas frente a la pantalla en blanco, sufriendo el síndrome del lienzo vacío y desperdiciando tu energía creativa sin un plan."
  },
  {
    id: "p2",
    text: "Publicas pero nadie te escribe.",
    iconName: "Inbox",
    description: "Tu bandeja de entrada está en silencio. Tus posts consiguen likes y reacciones vacías, pero ningún mensaje con intención de compra."
  },
  {
    id: "p3",
    text: "Tu contenido no genera clientes.",
    iconName: "TrendingDown",
    description: "Hay una desconexión total entre tus publicaciones y tus servicios. Creas contenido de entretenimiento en lugar de contenido de autoridad."
  },
  {
    id: "p4",
    text: "No tienes tiempo para crear contenido.",
    iconName: "Clock",
    description: "El día a día, atender clientes y administrar tu negocio se consume tus horas. Crear contenido se siente como un segundo empleo agotador."
  },
  {
    id: "p5",
    text: "Sientes que otros avanzan más rápido que tú.",
    iconName: "Users",
    description: "Ves a tu competencia publicando a diario, posicionándose como referentes de la industria, mientras tu marca se vuelve invisible."
  }
];

const getIcon = (name: string) => {
  const props = { className: "w-5 h-5 text-lime-400" };
  switch (name) {
    case "HelpCircle": return <HelpCircle {...props} />;
    case "Inbox": return <Inbox {...props} />;
    case "TrendingDown": return <TrendingDown {...props} />;
    case "Clock": return <Clock {...props} />;
    case "Users": return <Users {...props} />;
    default: return <AlertTriangle {...props} />;
  }
};

interface PainPointsProps {
  onCtaClick: () => void;
}

export const PainPoints: React.FC<PainPointsProps> = ({ onCtaClick }) => {
  return (
    <section id="dolores" className="relative py-24 bg-zinc-950 border-b border-zinc-800 overflow-hidden">
      {/* Background glow effects conforming to the design guidelines */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-zinc-90 w-full bg-lime-400/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-4 font-mono text-[10px] uppercase tracking-widest font-bold rounded-none">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
              DIAGNÓSTICO DE SITUACIÓN
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light italic text-zinc-105 tracking-tight mb-6">
              ¿Te identificas con alguna de estas situaciones?
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              La mayoría de los emprendedores comete el error de publicar sin estrategia. Esto no es falta de talento, es falta de un <strong className="text-lime-400 font-bold uppercase tracking-wider">sistema de contenido automatizado</strong>.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-8 rounded-none bg-zinc-900/20 border border-zinc-850 hover:border-lime-400/40 transition-all duration-300 relative overflow-hidden"
              id={`pain-card-${point.id}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-none bg-zinc-950/60 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(point.iconName)}
                </div>
                <h3 className="text-sm font-bold uppercase text-white mb-2 tracking-wide group-hover:text-lime-400 transition-colors">
                  {point.text}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Quick interactive stats/callout card to complete the grid nicely */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-8 rounded-none bg-zinc-900/50 border border-zinc-850 flex flex-col justify-between relative overflow-hidden lg:col-span-1 md:col-span-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 rounded-full blur-[40px] pointer-events-none" />
            
            <div>
              <span className="text-4xl font-mono font-black text-lime-400 tracking-tighter">82%</span>
              <p className="text-white font-bold uppercase tracking-wider mt-3 font-display text-xs mb-2">
                Del contenido de servicios falla en convertir.
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed md:max-w-md">
                Sin un embudo estructurado, los posts se pierden rápidamente en el feed sin generar llamadas de venta. No sigas regalando tu tiempo de forma ineficiente.
              </p>
            </div>
            
            <button
              onClick={onCtaClick}
              className="mt-8 inline-flex items-center justify-center w-full py-3 px-6 rounded-none font-black text-[10px] uppercase tracking-widest bg-lime-400 text-zinc-950 hover:bg-white transition-all border border-lime-400 cursor-pointer"
              id="pain-cta-btn"
            >
              Quiero Cambiar Esto
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
