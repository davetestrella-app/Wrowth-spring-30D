/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, MessageSquare } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Cómo sé si este sprint aplica para mi tipo de negocio o servicio?",
    answer: "Growth Sprint 30D está diseñado específicamente para coaches, consultores, agentes de seguros o inmobiliarios, profesionales independientes y dueños de negocios que vendan servicios intangibles de alto valor. Si el éxito de tu venta depende de generar confianza y posicionar tu autoridad ante tu cliente, este método te funcionará perfectamente."
  },
  {
    question: "¿Necesito tener experiencia técnica avanzada en Inteligencia Artificial?",
    answer: "Para nada. El sprint es sumamente práctico y amigable. Te compartimos prompts exactos que solo debes rellenar con tu nicho y te guiamos paso a paso en el manejo de herramientas intuitivas de edición y automatización. Olvídate de programar o configurar sistemas complejos."
  },
  {
    question: "¿Es obligatorio invertir un presupuesto alto en herramientas premium adicionales?",
    answer: "No. La mayoría de las herramientas que sugerimos cuentan con planes gratuitos completamente funcionales para iniciar. Te enseñaremos a exprimir estas alternativas gratuitas para estructurar tu embudo y solo te recomendaremos dar el salto a licencias de pago una vez que recuperes tu inversión con tus primeros clientes."
  },
  {
    question: "¿Cuánto tiempo al día tendré que dedicarle al Sprint para conseguir resultados?",
    answer: "Este programa está estructurado para profesionales ocupados. Con solo 30 a 45 minutos diarios de ejecución enfocada podrás avanzar paulatinamente. El secreto está en la consistencia diaria y en que la Inteligencia Artificial asume el 80% de la carga de redacción y estimación de pilares."
  },
  {
    question: "¿Cómo se coordina el soporte y la revisión de mis guiones y prompts?",
    answer: "Durante los 30 días, contarás con un canal de retroalimentación directa de los mentores. Cada semana envías tus entregables (matriz de contenido, guiones redactados y flujos de conversión) para ser corregidos detalladamente antes de grabarte, dándote máxima seguridad al publicar."
  },
  {
    question: "¿Ofrecen algún tipo de garantía de satisfacción con el método?",
    answer: "Totalmente. Si asistes a los acompañamientos prácticos, completas los entregables sugeridos de las 4 semanas y aun así no obtienes un sistema generador de ideas funcionales, te brindamos mentoría privada persistente adicional sin coste alguno hasta que lances y configures tu plataforma con éxito."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-950 border-b border-zinc-800 relative overflow-hidden text-left">
      {/* Background neon style elements matching high visual hierarchy */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-400/5 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lime-400 text-[10px] font-mono tracking-[0.25em] uppercase mb-3">
              RESOLVEMOS TUS DUDAS
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-light italic text-white tracking-tight mb-4">
              Preguntas Frecuentes
            </h3>
            <p className="text-zinc-450 text-sm">
              Queremos que inicies con absoluta claridad y absoluta confianza en la metodología. Revisa los aspectos operativos del Growth Sprint.
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion Lists */}
        <div className="space-y-4 max-w-3xl mx-auto mb-16">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-900/30 border border-zinc-850 hover:border-lime-400/20 rounded-none transition-all duration-300"
                id={`faq-item-${idx}`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 text-white font-bold tracking-wide focus:outline-none cursor-pointer"
                >
                  <span className="text-xs uppercase pr-2 tracking-wide group-hover:text-lime-400 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-6 h-6 rounded-none bg-zinc-950/80 border border-zinc-800 flex items-center justify-center shrink-0 text-lime-400 transition-transform duration-300 ${isOpen ? "rotate-180 bg-lime-400 text-zinc-950 border-lime-400" : ""}`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-zinc-400 text-xs leading-relaxed border-t border-zinc-850 font-serif font-light italic">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Minimal Support FAQ CTA */}
        <div className="bg-zinc-900/50 border border-zinc-850 rounded-none p-8 text-center max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-lime-400/5 rounded-full blur-[20px] pointer-events-none" />
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-none bg-zinc-950/80 border border-zinc-800 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-lime-400" />
            </div>
            <div>
              <p className="text-white font-bold uppercase tracking-wider text-xs">¿Incertidumbre extra o dudas personalizadas?</p>
              <p className="text-[11px] text-zinc-500 mt-1">Escríbenos directamente y te asistiremos encantados en pocos minutos.</p>
            </div>
          </div>
          <a
            href="https://wa.me/573217929578?text=Hola!%20Tengo%2520algunas%2520dudas%2520sobre%2520el%2520Growth%2520Sprint%252030D,%2520me%2520ayudas%2520por%2520favor?"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 py-3 px-6 rounded-none font-black text-[10px] uppercase tracking-widest bg-lime-400 text-zinc-950 hover:bg-white transition-all border border-lime-400 text-center cursor-pointer"
            id="faq-support-wa-btn"
          >
            Chatear por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
