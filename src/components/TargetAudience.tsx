/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { HeartHandshake, Briefcase, ShieldCheck, Home, Award, Store } from "lucide-react";
import { AudiencePersona } from "../types";

const audienceList: AudiencePersona[] = [
  {
    role: "Coaches",
    description: "Coaches de vida, ejecutivos, fitness o mentalidad que desean transmitir autoridad, conectar de manera empática y vender sus programas sin sonar invasivos.",
    iconName: "HeartHandshake"
  },
  {
    role: "Consultores",
    description: "Profesionales de negocios, marketing, TI o finanzas que buscan captar contratos recurrentes demostrando su experiencia estratégica real.",
    iconName: "Briefcase"
  },
  {
    role: "Agentes de seguros",
    description: "Asesores y consultores patrimoniales que necesitan crear marcas personales confiables en redes para atraer leads listos para cotizar.",
    iconName: "ShieldCheck"
  },
  {
    role: "Inmobiliarios",
    description: "Agentes y brokers que quieren mostrar propiedades atractivamente con video y posicionarse como los referentes indiscutidos de su zona.",
    iconName: "Home"
  },
  {
    role: "Profesionales independientes",
    description: "Abogados, diseñadores, profesionales de la salud o terapeutas que quieren vender servicios de alto valor y dejar de regalar su tarifa por hora.",
    iconName: "Award"
  },
  {
    role: "Dueños de negocio",
    description: "Emprendedores con empresas consolidadas de servicios que desean sistematizar y estandarizar la atracción de prospectos orgánicos.",
    iconName: "Store"
  }
];

const getAudienceIcon = (name: string) => {
  const props = { className: "w-5 h-5 text-lime-400 group-hover:scale-105 transition-transform duration-300" };
  switch (name) {
    case "HeartHandshake": return <HeartHandshake {...props} />;
    case "Briefcase": return <Briefcase {...props} />;
    case "ShieldCheck": return <ShieldCheck {...props} />;
    case "Home": return <Home {...props} />;
    case "Award": return <Award {...props} />;
    case "Store": return <Store {...props} />;
    default: return <Award {...props} />;
  }
};

export const TargetAudience: React.FC = () => {
  return (
    <section id="audiencia" className="py-24 bg-zinc-950 border-b border-zinc-800 relative overflow-hidden">
      {/* Dynamic line dividers */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lime-400 text-[10px] font-mono tracking-[0.25em] uppercase mb-3">
              ¿A QUIÉN NOS DIRIGIMOS?
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-light italic text-white tracking-tight mb-6">
              ¿Es <span className="not-italic font-sans font-black text-lime-400 uppercase">Growth Sprint</span> Para Ti?
            </h3>
            <p className="text-zinc-400 text-sm">
              Este programa está diseñado exclusivamente para <strong className="text-lime-400 font-bold uppercase tracking-wider">proveedores de servicios y profesionales intangibles</strong>. Si vendes conocimiento, transformación o asesoría, encajas aquí.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceList.map((persona, index) => (
            <motion.div
              key={persona.role}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group p-6 rounded-none bg-zinc-900/20 border border-zinc-850 hover:border-lime-400/40 hover:bg-zinc-90 w-full transition-all duration-300 flex flex-col justify-between"
              id={`audience-${persona.role.toLowerCase()}`}
            >
              <div>
                <div className="w-10 h-10 rounded-none bg-zinc-950/60 border border-zinc-800 flex items-center justify-center mb-6">
                  {getAudienceIcon(persona.iconName)}
                </div>
                
                <h4 className="text-base font-black uppercase tracking-widest text-white mb-2 group-hover:text-lime-400 transition-colors font-mono">
                  {persona.role}
                </h4>
                
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {persona.description}
                </p>
              </div>

              {/* Elegant accent border glow on hover */}
              <div className="mt-6 pt-4 border-t border-zinc-850 flex justify-between items-center text-[9px] text-lime-400/80 font-mono tracking-widest">
                <span>INCORPORACIÓN INMEDIATA</span>
                <span>★</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
