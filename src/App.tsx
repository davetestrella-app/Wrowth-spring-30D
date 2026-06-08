/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Sparkles, 
  Lightbulb, 
  FastForward, 
  TrendingUp, 
  Target, 
  ArrowRight,
  ShieldCheck,
  Instagram,
  Users2
} from "lucide-react";
import { PainPoints } from "./components/PainPoints";
import { Methodology } from "./components/Methodology";
import { WeeklyTimeline } from "./components/WeeklyTimeline";
import { TargetAudience } from "./components/TargetAudience";
import { DiagnosticQuiz } from "./components/DiagnosticQuiz";
import { FAQSection } from "./components/FAQSection";

export default function App() {
  const scrollToDiagnostic = () => {
    const element = document.getElementById("diagnostico");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 font-sans min-h-screen selection:bg-lime-400 selection:text-zinc-950">
      {/* Floating Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/90 border-b border-zinc-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center font-mono font-black text-xs text-zinc-950 tracking-tighter">
              GS
            </div>
            <span className="font-display font-black text-white tracking-[0.15em] text-xs uppercase">
              Growth Sprint <strong className="text-lime-400 font-medium font-mono">30D</strong>
            </span>
          </div>



          <button
            onClick={scrollToDiagnostic}
            className="py-2.5 px-4 rounded-none text-[10px] font-black uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-lime-400 hover:bg-lime-400 hover:text-zinc-950 transition-all cursor-pointer"
            id="nav-cta-btn"
          >
            Diagnóstico Growth
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:py-32 overflow-hidden bg-zinc-950 border-b border-zinc-800">
        {/* Ambient background subtle vector glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-zinc-900/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-lime-950/5 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Subtle decorative grid overlay matching premium visual style */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3e63503_1px,transparent_1px),linear-gradient(to_bottom,#a3e63503_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-6xl mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-400 text-zinc-950 border border-lime-400 mb-6 font-mono text-[10px] tracking-[0.25em] uppercase font-black">
              <Sparkles className="w-3.5 h-3.5 text-zinc-950 animate-pulse" />
              [ SISTEMA DE CONTENIDO CON IA ]
            </span>

            <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter text-white mb-6 leading-[0.85] uppercase max-w-5xl mx-auto font-display">
              Growth <span className="text-lime-400 block md:inline font-mono">//</span> <span className="underline decoration-lime-400 decoration-8 underline-offset-4">Sprint</span> 30D
            </h1>

            <h1 className="text-xl md:text-3xl font-serif italic text-white tracking-tight max-w-3xl mx-auto mb-6">
              "Construye un sistema de contenido que <span className="bg-lime-400/10 text-lime-400 px-1.5 py-0.5 border border-lime-400/20 not-italic font-sans font-bold">atraiga clientes</span> usando IA en los próximos 30 días"
            </h1>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 uppercase tracking-wider font-mono font-medium">
              // Si eres emprendedor de servicios y estás harto de no saber qué publicar, de perder horas creando contenido o de no generar oportunidades de negocio calificados... estás a un diagnóstico de cambiar las reglas del juego.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToDiagnostic}
                className="w-full sm:w-auto py-5 px-10 rounded-none font-black bg-lime-400 text-zinc-950 hover:bg-white hover:text-zinc-950 transition-all uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2 border-2 border-lime-400 active:scale-95"
                id="hero-cta-btn"
              >
                Quiero mi Diagnóstico Growth
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </button>
            </div>

            {/* Quick trust metrics banner matching the reference image's visual density with brutalist indexes */}
            <div className="mt-16 pt-12 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
              <div className="p-5 border border-zinc-800 bg-zinc-900/10 relative group">
                <span className="absolute top-2 right-3 text-[9px] font-mono font-bold text-zinc-700">// 01</span>
                <span className="block text-lg font-mono font-black text-white uppercase tracking-wider">4 Semanas</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">De Acompañamiento</span>
              </div>
              <div className="p-5 border border-zinc-800 bg-zinc-900/10 relative group border-t-2 border-t-lime-400">
                <span className="absolute top-2 right-3 text-[9px] font-mono font-bold text-lime-400/50">// 02</span>
                <span className="block text-lg font-mono font-black text-lime-400 uppercase tracking-wider">100% Real</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono font-black">Casos Prácticos</span>
              </div>
              <div className="p-5 border border-zinc-800 bg-zinc-900/10 relative group">
                <span className="absolute top-2 right-3 text-[9px] font-mono font-bold text-zinc-700">// 03</span>
                <span className="block text-lg font-mono font-black text-white uppercase tracking-wider">IA Copiloto</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono font-black">Flujos Probados</span>
              </div>
              <div className="p-5 border border-zinc-800 bg-zinc-900/10 relative group border-t-2 border-t-lime-400">
                <span className="absolute top-2 right-3 text-[9px] font-mono font-bold text-lime-400/50">// 04</span>
                <span className="block text-lg font-mono font-black text-lime-400 uppercase tracking-wider">Limitados</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Edición Exclusiva</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section Component */}
      <PainPoints onCtaClick={scrollToDiagnostic} />

      {/* Presentation: Presentamos Growth Sprint 30D Section */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-800 relative overflow-hidden">
        {/* Subtle mesh background element */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-zinc-900/20 rounded-full blur-[80px]" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Title & visual frame */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono font-bold px-3 py-1 bg-zinc-900 text-lime-400 rounded-none border border-zinc-800 tracking-widest uppercase">
                Acompañamiento Práctico
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-light italic text-zinc-100 tracking-tight">
                Presentamos <span className="text-lime-400 font-sans font-black uppercase not-italic">Growth Sprint</span>
              </h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light">
                No necesitas ser una estrella de cine ni un genio técnico. Diseñamos un plan incremental donde construiremos juntos un sistema de contenido diario que rinda frutos medibles en las próximas <strong className="text-white font-black underline decoration-lime-400">4 semanas</strong>.
              </p>
              
              <div className="p-5 rounded-none bg-zinc-900/40 border border-zinc-800 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-none bg-lime-400/10 border border-lime-400/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-lime-400" />
                </div>
                <p className="text-sm text-zinc-200 leading-normal">
                  Acceso exclusivo a nuestra comunidad privada de aprendizaje activo con mentorías grupales, plantillas prediseñadas y soporte diario de revisión de guiones.
                </p>
              </div>
            </div>

            {/* Right Column: 4 Core pillars with hover effects */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-none bg-zinc-900/40 border border-zinc-850 hover:border-lime-400/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-none bg-zinc-950/60 border border-zinc-800 flex items-center justify-center mb-4 text-lime-400">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-display font-black text-white mb-2 uppercase tracking-wide">Tener ideas constantemente</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">
                    Sistematiza el origen de tus temas. Instalarás una matriz de contenidos para nunca más dudar sobre qué publicar hoy.
                  </p>
                </div>
                <div className="mt-4 pt-3 flex items-center gap-1.5 text-[10px] text-lime-400 font-mono tracking-widest">
                  <span>METODO SEGURO</span>
                  <span>✓</span>
                </div>
              </div>

              <div className="p-6 rounded-none bg-zinc-900/40 border border-zinc-850 hover:border-lime-400/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-none bg-zinc-950/60 border border-zinc-800 flex items-center justify-center mb-4 text-lime-400">
                    <FastForward className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-display font-black text-white mb-2 uppercase tracking-wide">Crear contenido más rápido</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">
                    Usa Inteligencia Artificial como copiloto. Automatiza la redacción publicitaria, generación de de ganchos y edición técnica de video en minutos.
                  </p>
                </div>
                <div className="mt-4 pt-3 flex items-center gap-1.5 text-[10px] text-lime-400 font-mono tracking-widest">
                  <span>X10 VELOCIDAD</span>
                  <span>✓</span>
                </div>
              </div>

              <div className="p-6 rounded-none bg-zinc-900/40 border border-zinc-850 hover:border-lime-400/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-none bg-zinc-950/60 border border-zinc-800 flex items-center justify-center mb-4 text-lime-400">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-display font-black text-white mb-2 uppercase tracking-wide">Posicionarte como autoridad</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">
                    Transmite confianza instintiva. Habla directamente a los miedos y deseos calificados de tu cliente, destacando tu metodología única.
                  </p>
                </div>
                <div className="mt-4 pt-3 flex items-center gap-1.5 text-[10px] text-lime-400 font-mono tracking-widest">
                  <span>DIFERENCIADOR ÚNICO</span>
                  <span>✓</span>
                </div>
              </div>

              <div className="p-6 rounded-none bg-zinc-900/40 border border-zinc-850 hover:border-lime-400/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-none bg-zinc-950/60 border border-zinc-800 flex items-center justify-center mb-4 text-lime-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-display font-black text-white mb-2 uppercase tracking-wide">Generar conversaciones</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">
                    Corta la vanidad. Diseñamos embudos conversacionales específicos enfocados en derivar vistas a mensajes directos (MD) de agendado directo.
                  </p>
                </div>
                <div className="mt-4 pt-3 flex items-center gap-1.5 text-[10px] text-lime-400 font-mono tracking-widest">
                  <span>MONETIZACIÓN ORGÁNICA</span>
                  <span>✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section Component */}
      <Methodology />

      {/* Weekly timeline Section Component */}
      <WeeklyTimeline />

      {/* Target Audience Section Component */}
      <TargetAudience />

      {/* Interactive trust builder / Testimonial visual block similar to uploaded design */}
      <section className="py-24 bg-zinc-950/40 border-t border-zinc-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-lime-400 text-[10px] font-mono tracking-[0.25em] uppercase mb-3">CONFIANZA Y COMUNIDAD</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-light italic text-white tracking-tight">Voces de Nuestro Ecosistema</h3>
            <p className="text-zinc-400 text-sm mt-3">Descubre los testimonios de profesionales que ya automatizaron sus procesos de captación orgánica contigo.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-900/30 border border-zinc-850 rounded-none space-y-4">
              <div className="flex gap-1 text-lime-400 text-xs">★★★★★</div>
              <p className="text-zinc-200 text-sm italic leading-relaxed font-light">
                "No sabía cómo encuadrar lo que hacía sin sonar aburrido. En la semana 2 de Growth Sprint ya tenía guiones claros y, gracias a las automatizaciones conversacionales, obtuve 4 prospectos calificados directos a mi WhatsApp la primera semana de publicar."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-850">
                <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono font-black text-xs text-lime-400">
                  MC
                </div>
                <div>
                  <span className="block text-white text-sm font-bold uppercase tracking-wider">Mariela Campos</span>
                  <span className="block text-xs text-zinc-500">Mentora de Liderazgo Femenino</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-zinc-900/30 border border-zinc-850 rounded-none space-y-4">
              <div className="flex gap-1 text-lime-400 text-xs">★★★★★</div>
              <p className="text-zinc-200 text-sm italic leading-relaxed font-light">
                "Crear contenido me tomaba todo el fin de semana. Aprender los prompts de estilo en la semana 3 redujo mi tiempo de redacción de guiones a minutos. La Inteligencia Artificial realmente funciona de copiloto para acelerar tu proceso."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-850">
                <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono font-black text-xs text-lime-400">
                  RG
                </div>
                <div>
                  <span className="block text-white text-sm font-bold uppercase tracking-wider">Ricardo Galarza</span>
                  <span className="block text-xs text-zinc-500">Director de Agencia de Seguros</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-zinc-900/30 border border-zinc-850 rounded-none space-y-4">
              <div className="flex gap-1 text-lime-400 text-xs">★★★★★</div>
              <p className="text-zinc-200 text-sm italic leading-relaxed font-light">
                "La estructura conversacional de la semana 4 transformó vistas vacías de Instagram en llamadas reales agendadas en mi Calendly. Por fin mi esfuerzo creando Reels se traduce en clientes que pagan por mis consultorías premium."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-850">
                <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono font-black text-xs text-lime-400">
                  FS
                </div>
                <div>
                  <span className="block text-white text-sm font-bold uppercase tracking-wider">Federico Sola</span>
                  <span className="block text-xs text-zinc-500">Consultor Financiero B2B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Diagnosis Section Component */}
      <DiagnosticQuiz />

      {/* FAQ Section Component */}
      <FAQSection />

      {/* Styled Elegant Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-850 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-lime-400 flex items-center justify-center font-mono font-black text-xs text-zinc-950">
              GS
            </div>
            <span className="font-display font-black text-white text-xs uppercase tracking-wider">
              Growth Sprint 30D
            </span>
          </div>

          <p className="text-zinc-500 text-xs text-center md:text-left font-mono">
            © {new Date().getFullYear()} Growth Sprint 30D. Todos los derechos reservados. Construido con amor en content creativo.
          </p>

          <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500">
            <span className="text-lime-400/80 tracking-widest uppercase">● EDICIÓN ABIERTA SPRINT</span>
            <span>•</span>
            <span className="hover:text-lime-400 transition-colors cursor-pointer uppercase tracking-widest" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>SUBIR</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
