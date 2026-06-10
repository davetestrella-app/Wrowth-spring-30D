import React from "react";
import { motion } from "motion/react";
import { CheckCircle, ShieldCheck, Sparkles, CreditCard, Lock, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  hotmartUrl?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ 
  hotmartUrl = (import.meta as any).env?.VITE_HOTMART_URL || "https://pay.hotmart.com/I106243223W?checkoutMode=10"
}) => {
  const features = [
    "4 Semanas de acompañamiento intensivo paso a paso",
    "Comunidad privada de creadores e infoproductores",
    "Soporte diario y feedback de guiones persuasivos",
    "Copiloto de IA: Prompts pre-entrenados y listos para copiar",
    "Matriz de contenido perpetuo (gánale al bloqueo creativo)",
    "Embudos conversacionales automáticos para DM e Instagram Reels",
    "Plantillas de prospección ética y scripts de agendamiento"
  ];

  return (
    <section id="oferta" className="py-24 bg-zinc-950 border-b border-zinc-800 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lime-400/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-80 h-80 bg-zinc-900/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-400 text-zinc-950 border border-lime-400 mb-4 font-mono text-[10px] tracking-[0.25em] uppercase font-black">
            <Sparkles className="w-3.5 h-3.5 text-zinc-950 animate-pulse" />
            [ OFERTA DE ACCESO INMEDIATO ]
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light italic text-white tracking-tight mb-4">
            Estructura Tu Motor de Ventas Hoy
          </h2>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Inscríbete ahora en <strong className="text-white font-bold">Growth Sprint 30D</strong> a través de nuestra plataforma segura de Hotmart y desbloquea el sistema definitivo para atraer clientes con Inteligencia Artificial.
          </p>
        </div>

        {/* Brutalist Hotmart Pricing Card */}
        <div className="grid md:grid-cols-12 border border-zinc-800 bg-zinc-900/10 rounded-none relative overflow-hidden shadow-2xl">
          {/* Accent border top for emphasis */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-lime-400" />

          {/* Left Column: Offer details */}
          <div className="p-8 md:p-12 md:col-span-7 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-mono font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="text-lime-400">//</span> ¿QUÉ OBTENDRÁS EXACTAMENTE?
              </h3>
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-200 font-light leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-850 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-lime-450 shrink-0" />
              <div className="text-xs text-zinc-450 font-mono leading-normal uppercase">
                <span className="text-white font-bold block">Garantía Incondicional de 7 Días</span>
                Si sientes que no es para ti, Hotmart te devuelve el 100% de tu dinero.
              </div>
            </div>
          </div>

          {/* Right Column: Pricing details and Hotmart CTA */}
          <div className="p-8 md:p-12 md:col-span-5 bg-zinc-900/20 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-550 uppercase font-bold mb-1">
              ACCESO COMPLETO DE POR VIDA
            </span>
            <span className="text-sm font-mono text-zinc-400 line-through tracking-wider">
              $297 USD
            </span>
            <div className="my-3 flex items-baseline justify-center gap-1">
              <span className="text-5xl font-mono font-black text-white tracking-tighter">
                $97
              </span>
              <span className="text-xs font-mono text-lime-400 font-black uppercase tracking-widest bg-lime-400/10 px-1.5 py-0.5 border border-lime-400/20">
                USD
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 font-mono text-center uppercase tracking-wider mb-8 max-w-[200px]">
              Pago único sin mensualidades ni sorpresas ocultas
            </p>

            <a
              href={hotmartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-none font-black text-xs uppercase tracking-[0.25em] bg-lime-400 text-zinc-950 border border-lime-400 flex items-center justify-center gap-2 group cursor-pointer hotmart-glow-btn"
              id="hotmart-pricing-cta"
            >
              Comprar en Hotmart
              <ArrowRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-6 space-y-2 w-full">
              <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                <Lock className="w-3 h-3" /> Secure checkout
              </div>
              <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                <CreditCard className="w-3 h-3" /> Tarjetas, PayPal & Efectivo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
