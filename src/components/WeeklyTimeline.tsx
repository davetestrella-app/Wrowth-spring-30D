/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Target, 
  BookOpen, 
  Package, 
  Video, 
  Check, 
  Zap, 
  Flame, 
  Award, 
  Code, 
  Scale, 
  FileCheck2, 
  Rocket, 
  MessageSquare, 
  LineChart 
} from "lucide-react";

interface ModuleLesson {
  id: number;
  title: string;
}

interface WeeklySprint {
  weekNum: string;
  badge: string;
  aspirationTitle: string;
  objective: string;
  description: string;
  lessons: ModuleLesson[];
  deliverables: string[];
  liveSession: string;
  liveDescription: string;
  techStack: string[];
}

const weeklySprints: WeeklySprint[] = [
  {
    weekNum: "01",
    badge: "FONDOS SÓLIDOS & POSICIONAMIENTO",
    aspirationTitle: "GROWTH FOUNDATION: Ingeniería de Oferta Irresistible y Posicionamiento de Alto Impacto",
    objective: "Construir un vehículo de oferta magnética que el mercado desee con desesperación y validar el avatar ultra-rentable.",
    description: "Sustituimos el modelo tradicional pasivo por el diseño de ofertas de alto boleto siguiendo metodologías probadas. Eliminamos la duda sobre a quién le vendes y cómo destacar.",
    lessons: [
      { id: 1, title: "Diagnóstico de Crecimiento con Inteligencia Artificial" },
      { id: 2, title: "Investigación de Nichos y Auditoría de Mercado Inteligente" },
      { id: 3, title: "Modelado del Avatar Profundo de Compra Elevada" },
      { id: 4, title: "Ingeniería de la Oferta Irresistible de Ticket Premium" }
    ],
    deliverables: [
      "Diagnóstico de viabilidad completo auditado por IA",
      "Avatar psicológico y financiero 100% validado",
      "Investigación masiva de dolor en tu mercado",
      "Estructura de Oferta Irresistible lista para vender"
    ],
    liveSession: "Workshop Avanzado de Oferta y Posicionamiento Crítico",
    liveDescription: "Sesión conjunta de calibración donde derribamos objeciones y pulimos tu propuesta de valor cara a cara.",
    techStack: ["Gemini 2.5", "NicheAI Engine", "Growth Canvas"]
  },
  {
    weekNum: "02",
    badge: "MOTOR ORGÁNICO PERPETUO",
    aspirationTitle: "CONTENT GROWTH SYSTEM: Matriz de Contenido Viral Semilla para Atribución Orgánica",
    objective: "Configurar una factoría automatizada de atención para capturar prospectos de alta intención técnica.",
    description: "La viralidad vacía no paga facturas. Implantarás un motor de reels y contenido vertical de retención extrema enfocado en transformar clics en valor real para tu negocio.",
    lessons: [
      { id: 1, title: "El Quinteto Maestro: Configuración de las 5 IA de producción" },
      { id: 2, title: "Modelo Psicológico de Reels Virales y Estructuración de Guiones" },
      { id: 3, title: "Laboratorio Exprés de Producción Acelerada de Imágenes y Videos" },
      { id: 4, title: "Plan de Acción y Calendario Growth 30D de Alta Retención" }
    ],
    deliverables: [
      "Matriz con 30 ideas temáticas de alta intención",
      "30 Hooks (ganchos virales) diseñados para retener",
      "30 Llamados a la Acción (CTA) de conversión masiva",
      "Calendario programado de distribución y escala 30D"
    ],
    liveSession: "Laboratorio Práctico de Contenido Co-Activo en Tiempo Real",
    liveDescription: "Grabamos y maquetamos en vivo contigo usando herramientas de IA. Cero parálisis, pura implementación.",
    techStack: ["CapCut IA", "ElevenLabs", "Pictory Pro", "Gemini Ultra"]
  },
  {
    weekNum: "03",
    badge: "EMBUDO OPERATIVO CALIENTE",
    aspirationTitle: "CLIENT ACQUISITION SYSTEM: Sistema Autónomo de Captación de Clientes y Tráfico Dirigido",
    objective: "Instalar el sistema de aterrizaje de prospectos calificados y habilitar la pila de conversión diaria.",
    description: "Crearemos la estructura técnica para recibir visitas y convertirlas en correos, números de teléfono y agendas activas. Automatizamos la preventa y aceleramos el retorno.",
    lessons: [
      { id: 1, title: "Diseño y Armado del Lead Magnet Magnético Indispensable" },
      { id: 2, title: "Montaje Rápido de Landing Pages de Alta Conversión asistidas por IA" },
      { id: 3, title: "Estrategia Meta Ads Pro para Inyección Express de Prospectos" },
      { id: 4, title: "Secuencia de Seguimiento Inteligente por Correo y WhatsApp" }
    ],
    deliverables: [
      "Lead Magnet activo y estructurado con herramientas de IA",
      "Landing Page con copywriting optimizado publicada en vivo",
      "Campaña publicitaria montada en Meta Ads Manager lista para encendido",
      "Secuencias de seguimiento automático por aire y correo"
    ],
    liveSession: "Despliegue General y Conexión de Embudo de Conversión Crítico",
    liveDescription: "Nos conectamos de extremo a extremo para asegurar que los enlaces, los formularios y los anuncios fluyen.",
    techStack: ["Framer/WordPress", "Meta Ads Manager", "ActiveCampaign", "v0.dev"]
  },
  {
    weekNum: "04",
    badge: "SISTEMATIZACIÓN & ESCALABILIDAD",
    aspirationTitle: "AUTOMATION & SCALE: Integración de Agentes Inteligentes, Métricas y Roadmap 90D",
    objective: "Alinear software inteligente y configurar tu panel gerencial para delegar el 80% de la operación diaria.",
    description: "Transformamos tu sprint de 30 días en una marca de valor recurrente. Implementaremos agentes sofisticados y autómatas para agendar llamadas sin descansar.",
    lessons: [
      { id: 1, title: "Sincronización Total de Automatizaciones para Marketing Integral" },
      { id: 2, title: "Entrenamiento de Agentes IA Inteligentes de Venta y Calificación" },
      { id: 3, title: "Dashboard Personal de Control Growth y Gestión Operativa" },
      { id: 4, title: "Traspaso de Mando y Roadmap de Escala Sostenida a 90 Días" }
    ],
    deliverables: [
      "Flujo de conversación por chat funcionando eficientemente",
      "Agente inteligente entrenado y capacitado con datos de tu negocio",
      "Dashboard dinámico de métricas para optimizar decisiones",
      "Roadmap estratégico y ordenado a 90 días con plan económico"
    ],
    liveSession: "Growth Demo Day & Clausura de Alto Impacto",
    liveDescription: "Presentación final de proyectos integrales, feedback maestro personalizado y celebración por la meta alcanzada.",
    techStack: ["Make.com", "ManyChat Pro", "Dify.ai", "GrowthSheets Tracker"]
  }
];

const programOutcomes = [
  {
    title: "Oferta de Alto Ticket Optimizada",
    desc: "Ingeniería de valor diseñada por Alex Hormozi Frameworks para repeler curiosos y seducir leads vip lista para ser devorada.",
    icon: <Award className="w-5 h-5 text-lime-400 group-hover:scale-110 transition-transform" />
  },
  {
    title: "30 Contenidos Orgánicos Listos",
    desc: "Plataforma estructurada de ganchos de retención, copy estratégico altamente persuasivo y llamadas a la acción con guiones programados.",
    icon: <BookOpen className="w-5 h-5 text-lime-400 group-hover:scale-110 transition-transform" />
  },
  {
    title: "Landing Page Publicada",
    desc: "Tu propio cuartel central de operaciones online redactado y estructurado visualmente para la máxima tasa de retención y captura.",
    icon: <Code className="w-5 h-5 text-lime-400 group-hover:scale-110 transition-transform" />
  },
  {
    title: "Lead Magnet de Alto Valor Terminado",
    desc: "El activo que despierta urgencia inmediata y posiciona tu autoridad extrema en el mercado antes de agendar llamadas.",
    icon: <Package className="w-5 h-5 text-lime-400 group-hover:scale-110 transition-transform" />
  },
  {
    title: "Campañas Meta Ads Activas",
    desc: "Embudo inyectado con combustible de prospectos. Anuncios listos para capturar leads optimizados con públicos específicos.",
    icon: <Rocket className="w-5 h-5 text-lime-400 group-hover:scale-110 transition-transform" />
  },
  {
    title: "Automatizaciones de Marketing Fluyendo",
    desc: "Campañas automáticas y respuestas inteligentes para erradicar el trabajo de seguimiento repetitivo y responder al instante.",
    icon: <Zap className="w-5 h-5 text-lime-400 group-hover:scale-110 transition-transform" />
  },
  {
    title: "Agente IA de Ventas Operativo",
    desc: "Tu clon conversacional personalizado trabajando 24/7 de forma autónoma calificando dudas a velocidad luz sin descanso.",
    icon: <MessageSquare className="w-5 h-5 text-lime-400 group-hover:scale-110 transition-transform" />
  },
  {
    title: "Roadmap de Crecimiento de 90 Días",
    desc: "El mapa exacto y milimétrico para replicar los resultados una vez concluido el Sprint de 30 días para escalar tu facturación.",
    icon: <LineChart className="w-5 h-5 text-lime-400 group-hover:scale-110 transition-transform" />
  }
];

export const WeeklyTimeline: React.FC = () => {
  return (
    <section id="programa" className="py-24 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden">
      
      {/* Background ambient elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-400/[0.015] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/[0.015] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header with Elite CRO Copywriting */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 text-lime-400 border border-zinc-800 font-mono text-[11px] md:text-xs tracking-[0.2em] font-black uppercase">
              // ACELERADORA DE IMPLEMENTACIÓN ACTIVA
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight leading-none">
              DISEÑO OPERATIVO DEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">GROWTH SPRINT 30D</span>
            </h2>
            <p className="text-zinc-300 text-sm md:text-base max-w-2xl mx-auto font-sans leading-relaxed">
              No es otro curso pasivo con decenas de horas de teoría vacía para acumular polvo digital. Este es un laboratorio táctico donde nos enfocamos pura y exclusivamente en construir e instalar los activos esenciales de facturación para tu negocio.
            </p>
          </motion.div>
        </div>

        {/* 4 Weekly Horizontal / Vertical Cards (Custom Engineered Layout) */}
        <div className="space-y-12">
          {weeklySprints.map((sprint, idx) => (
            <motion.div
              key={sprint.weekNum}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-zinc-950 border border-zinc-900 overflow-hidden group hover:border-lime-400/30 transition-all duration-300 relative rounded-none"
              id={`sprint-week-${sprint.weekNum}`}
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-lime-450/0 via-lime-450/20 to-lime-450/0 group-hover:via-lime-400 transition-all" />
              
              {/* Flex Grid Container */}
              <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-900">
                
                {/* Left Block: Identity, Target & Concept (5 cols) */}
                <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-zinc-950">
                  <div className="space-y-6">
                    {/* Monospace Week Tag */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-mono font-black text-lime-450 leading-none">W{sprint.weekNum}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                      </div>
                      <span className="text-[11px] md:text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase bg-zinc-900/60 py-1 px-2.5 border border-zinc-850/40">
                        {sprint.techStack[0]}
                      </span>
                    </div>

                    <div className="space-y-2 text-left">
                      <span className="text-xs md:text-sm font-mono tracking-wider font-extrabold text-lime-400 uppercase">
                        {sprint.badge}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight font-sans leading-none group-hover:text-lime-400 transition-colors">
                        {sprint.aspirationTitle}
                      </h3>
                    </div>

                    <div className="p-4 bg-zinc-900/40 border-l-2 border-lime-400 text-left space-y-1.5">
                      <span className="text-xs font-mono text-lime-450 uppercase font-bold flex items-center gap-1.5">
                        <Target className="w-4 h-4 shrink-0 text-lime-400" /> OBJETIVO ENFOQUE:
                      </span>
                      <p className="text-xs md:text-sm text-zinc-200 leading-relaxed italic">
                        "{sprint.objective}"
                      </p>
                    </div>

                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed text-left">
                      {sprint.description}
                    </p>
                  </div>

                  {/* Tech stack monospaced layout */}
                  <div className="mt-8 pt-4 border-t border-zinc-900/45 flex flex-wrap gap-2 text-left">
                    <span className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase font-bold self-center mr-1">STACK IA:</span>
                    {sprint.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-zinc-300 font-medium px-2.5 py-1 bg-zinc-900 border border-zinc-850">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center Block: Practical Labs & Active Deliverables (7 cols split) */}
                <div className="lg:col-span-7 grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-zinc-900">
                  
                  {/* Left inner split: Classes / Under the hood */}
                  <div className="p-6 md:p-8 space-y-6 text-left">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4.5 h-4.5 text-zinc-400" />
                      <span className="text-xs md:text-sm font-mono font-bold text-zinc-400 uppercase tracking-widest">
                        Módulos de Implementación (IA)
                      </span>
                    </div>

                    <div className="space-y-3">
                      {sprint.lessons.map((lesson) => (
                        <div key={lesson.id} className="p-3 bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 hover:bg-zinc-900/40 transition-all rounded-none group/lesson flex items-start gap-3">
                          <span className="text-xs font-mono text-lime-400 bg-zinc-900 border border-zinc-850 px-2 py-0.5 font-bold">
                            {lesson.id}
                          </span>
                          <span className="text-sm md:text-base text-zinc-300 font-medium leading-tight self-center group-hover/lesson:text-white transition-colors">
                            {lesson.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right inner split: Physical Deliverables & Live Co-Working */}
                  <div className="p-6 md:p-8 space-y-6 text-left flex flex-col justify-between bg-zinc-950">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Package className="w-4.5 h-4.5 text-lime-400" />
                        <span className="text-xs md:text-sm font-mono font-bold text-lime-400 uppercase tracking-widest">
                          Tus Entregables Reales ✅
                        </span>
                      </div>

                      <div className="space-y-3">
                        {sprint.deliverables.map((deliverable) => (
                          <div key={deliverable} className="flex items-start gap-2.5">
                            <div className="w-4 h-4 rounded-full bg-lime-400/10 border border-lime-400/20 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-lime-400" />
                            </div>
                            <span className="text-xs md:text-sm text-zinc-100 leading-snug font-mono uppercase tracking-wide">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highly Visual live co-working action box */}
                    <div className="mt-8 p-4 bg-zinc-900/50 border border-zinc-900 hover:border-lime-500/20 transition-all relative overflow-hidden">
                      <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-lime-450/5 rounded-full blur-xl pointer-events-none" />
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </span>
                        <span className="text-xs font-mono text-zinc-400 uppercase font-black tracking-widest flex items-center gap-1">
                          <Flame className="w-4 h-4 text-red-400 animate-pulse" /> SESIÓN EN VIVO:
                        </span>
                      </div>
                      
                      <h5 className="text-xs md:text-sm font-mono font-bold uppercase text-white leading-tight">
                        {sprint.liveSession}
                      </h5>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        {sprint.liveDescription}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Section: "Lo que tendrás al finalizar los 30 días" (Transformation Outcomes Grid) */}
        <div className="mt-28 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-lime-400/[0.02] rounded-full blur-[100px] pointer-events-none" />
          
          {/* Header Title for Final Assets */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-400 text-zinc-950 font-mono text-xs font-bold tracking-widest uppercase">
              EL ENTREGABLE FINAL COMPLETO
            </span>
            <h3 className="text-3xl md:text-4xl font-sans font-black text-white uppercase tracking-tight">
              LO QUE TENDRÁS AL FINALIZAR LOS <span className="text-lime-400">30 DÍAS</span>
            </h3>
            <p className="text-zinc-300 text-sm md:text-base font-sans leading-relaxed">
              No dejas las sesiones con simples apuntes escritos a mano. Te gradúas de la aceleradora con una infraestructura digital robusta, activa, facturando y generando activos a perpetuidad.
            </p>
          </div>

          {/* Premium Outcome Bento-Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programOutcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 bg-zinc-950/40 border border-zinc-900 group hover:border-lime-400/20 hover:bg-zinc-950 transition-all rounded-none text-left flex flex-col justify-between"
                id={`final-asset-card-${idx}`}
              >
                <div>
                  {/* Indicator number and visual icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-8 h-8 rounded-none bg-zinc-900 border border-zinc-850 flex items-center justify-center">
                      {outcome.icon}
                    </div>
                    <span className="text-xs font-mono text-zinc-500 font-extrabold group-hover:text-lime-400 transition-colors">
                      ACTIVO_0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-mono font-black uppercase text-white tracking-wide mb-2.5 group-hover:text-lime-400 transition-colors">
                    {outcome.title}
                  </h4>
                  
                  <p className="text-zinc-450 text-xs md:text-sm leading-relaxed">
                    {outcome.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900/40 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    LISTO PARA DESPLIEGUE
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Call to action reminder beneath bento grid */}
          <div className="mt-14 text-center">
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest leading-relaxed">
              * TODA LA INFRAESTRUCTURA DE IMPLEMENTACIÓN ESTÁ DISEÑADA BAJO LA FILOSOFÍA DE OFERTAS IRRESISTIBLES Y EMBUDOS PREMIUM DE CONVERSIÓN RÁPIDA.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
