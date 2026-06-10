/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ClipboardCheck, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle, 
  TrendingUp, 
  Sparkles, 
  Copy, 
  PhoneCall, 
  RefreshCw, 
  AlertCircle 
} from "lucide-react";
import { DiagnosticQuestion, DiagnosticResponse } from "../types";

const questions: DiagnosticQuestion[] = [
  {
    id: "q1",
    text: "Al momento de sentarte a crear contenido, ¿cuál es tu principal obstáculo?",
    options: [
      { text: "Tengo el síndrome de la pantalla en blanco (no sé qué temas tratar o qué publicar).", score: 1, feedback: "Falta de una Matriz Perpetua de Ideas. Pasas demasiado tiempo decidiendo en lugar de ejecutando." },
      { text: "Me toma demasiadas horas escribir guiones y editar los videos.", score: 2, feedback: "Fricción de Flujo Técnico. No utilizas metodologías o copilotos de Inteligencia Artificial para agilizar guiones y post-producción." },
      { text: "Publico seguido pero nadie me escribe al MD con intención de compra.", score: 3, feedback: "Desconexión de Conversión. Tu material es puramente informativo, sin ganchos de retención ni disparadores de conversación." },
      { text: "No sé cómo hacer el cierre de ventas cuando me escriben personas interesadas.", score: 2, feedback: "Fuga en Backend Conversacional. Tienes algo de visibilidad pero careces de un script de calificación ética y de cierre de ventas." }
    ]
  },
  {
    id: "q2",
    text: "¿Con qué constancia publicas piezas de valor sobre tus servicios actualmente?",
    options: [
      { text: "Casi nunca, o de forma muy esporádica e improvisada.", score: 1, feedback: "Inconsistencia de algoritmo. La falta de presencia regular diluye tu autoridad y te vuelve invisible ante el cliente." },
      { text: "Una o dos veces por semana.", score: 2, feedback: "Presencia insuficiente para destacar rápido en un mercado densamente competitivo." },
      { text: "De tres a cinco veces por semana, o a diario.", score: 4, feedback: "Óptimo volumen de base. Si aun publicando con esta constancia no captas clientes, tu fallo radica estrictamente en tu oferta o en la arquitectura persuasiva." }
    ]
  },
  {
    id: "q3",
    text: "¿Cómo consideras la estructuración de tu oferta de servicios actual?",
    options: [
      { text: "Cobro tarifas bajas o vendo mi servicio fraccionado por horas.", score: 1, feedback: "Modelo de autoservicio desgastante. Debes transformar tus sesiones en ofertas High-Ticket orientadas puramente a resultados finales." },
      { text: "Tengo paquetes definidos, pero las personas a menudo me objetan en llamadas que es caro.", score: 2, feedback: "Ineficiencia en posicionamiento de valor. El prospecto percibe tu oferta como commodity porque no destaca un valor de transformación incuestionable." },
      { text: "Mi oferta es robusta y de alto valor, pero no consigo que suficientes prospectos agenden llamada.", score: 3, feedback: "Falta de un gancho orgánico calificador previo que filtre únicamente a personas con presupuesto y dolor listo para resolver." }
    ]
  },
  {
    id: "q4",
    text: "¿Cuál es tu vía principal de obtención de nuevos prospectos hoy por hoy?",
    options: [
      { text: "Únicamente recomendaciones de boca en boca y referidos de conocidos.", score: 1, feedback: "Dependencia de flujo pasivo e impredecible. Tu negocio está sujeto a la suerte en vez de a un sistema repetible." },
      { text: "Prospección fría intrusiva (mensajes de spam en frío a desconocidos o llamadas molestas).", score: 2, feedback: "Fuerza bruta ineficiente. Causa desgaste en tu marca y consume inmensas horas para conseguir porcentajes mínimos de conversión." },
      { text: "Creación orgánica activa o campañas pagadas de ads en paralelo.", score: 4, feedback: "Estructura activa establecida. Agregar el sistema Growth Sprint con Inteligencia Artificial potenciará exponencialmente el rendimiento del tráfico que ya manejas." }
    ]
  }
];

// Custom niche prompts to provide immediate practical value on completion
const nichePrompts: Record<string, { prompt: string, title: string }> = {
  coaches: {
    title: "Prompt IA para Coaches (Copy y Estrategia)",
    prompt: `Actúa como un redactor publicitario experto en ofertas High-Ticket para coaching de desarrollo personal y negocios. Escribe un guión de video corto (Instagram Reel/TikTok) de 60 segundos bajo el Método G.R.O.W.T.H.
Dirígete a personas cansadas de no ver resultados rápidos.
- Gancho (primeros 3 segs): Revela un mito común o error perjudicial en el sector.
- Desarrollo: Pon un ejemplo práctico que muestre empatía con su dolor actual.
- Solución: Presenta tu marco conceptual.
- CTA: Ofrece enviarles una analítica personalizada gratuita si comentan la palabra 'SPRINT' abajo.`
  },
  consultores: {
    title: "Prompt IA para Consultores (B2B y Autoridad)",
    prompt: `Crea una plantilla estructurada de post de LinkedIn dirigida a fundadores e inversores de empresas de servicios independientes.
Aborda el dolor táctico: "estar sobrecargado de trabajo manual operativo en lugar de enfocarse en crecer".
- Estructura: Introduce un contraste chocante de métricas.
- Entrega de Valor: Describe 3 herramientas de Inteligencia Artificial que automatizan tareas repetitivas.
- Cierre conversacional: Invítales a comentar sus cuellos de botella para recibir un caso de éxito gratuito.`
  },
  inmobiliarios: {
    title: "Prompt IA para Agentes Inmobiliarios (Autoridad Local)",
    prompt: `Escribe un guión conversacional dinámico de Instagram Reel.
El objetivo es posicionar al agente inmobiliario como el asesor de inversión más confiable para primeros compradores de departamento.
- Gancho: "¿Por qué rentar en tu zona metropolitana te cuesta 25% más caro hoy que comprar con este truco fiscal?"
- Desarrollo: Aporta un dato que nadie comparte sobre el mercado hipotecario.
- CTA: Incita a enviar un DM con la frase "ASESORÍA" para agendar una sesión express de viabilidad crediticia.`
  },
  independientes: {
    title: "Prompt IA para Profesionales Independientes",
    prompt: `Diseña un prompt de atracción especializado para proveedores de servicios creativos y técnicos (abogados, diseñadores, asesores fiscales, psicoterapeutas).
Escribe un carrusel de Instagram de 5 láminas demostrando la diferencia exacta entre un profesional ordinario y un socio de transformación de alto valor.
- Lámina 1: Gancho de autoselección psicológica.
- Lámina 2-4: Contraste de escenarios aplicados.
- Lámina 5: CTA de derivación a tu bandeja de entrada.`
  }
};

export const DiagnosticQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(-1); // -1: Welcome page, 0-3: Questions, 4: Lead form, 5: Results panel
  const [answers, setAnswers] = useState<Record<string, { score: number, text: string, feedback: string }>>({});
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPhone, setUserPhone] = useState<string>("");
  const [selectedNiche, setSelectedNiche] = useState<string>("coaches");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleOptionSelect = (qId: string, option: typeof questions[0]["options"][0]) => {
    setAnswers(prev => ({
      ...prev,
      [qId]: { score: option.score, text: option.text, feedback: option.feedback }
    }));
    
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, 350);
  };

  const handlePrev = () => {
    if (currentStep > -1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const calculateFinalScore = () => {
    const totalPossible = questions.reduce((acc, q) => acc + Math.max(...q.options.map(o => o.score)), 0);
    const scoreSum = (Object.values(answers) as { score: number; text: string; feedback: string }[]).reduce((acc, ans) => acc + ans.score, 0);
    return Math.round((scoreSum / totalPossible) * 100);
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userEmail.trim()) {
      setErrorMsg("Por favor, ingresa tu nombre y correo electrónico.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);
    
    const score = calculateFinalScore();
    const leadData = {
      name: userName,
      email: userEmail,
      phone: userPhone,
      score,
      answersSummary: (Object.entries(answers) as [string, { score: number; text: string; feedback: string }][]).map(([qId, ans]) => ({ qId, selectedOption: ans.text, score: ans.score })),
      timestamp: new Date().toISOString()
    };
    localStorage.setItem("growth_sprint_lead", JSON.stringify(leadData));

    // Send to Google Sheets Apps Script Web App Google Sheets URL if configured
    const googleScriptUrl = (import.meta as any).env?.VITE_GOOGLE_SCRIPT_URL;
    if (googleScriptUrl) {
      try {
        const flatData = {
          timestamp: leadData.timestamp,
          name: leadData.name,
          email: leadData.email,
          phone: leadData.phone,
          score: leadData.score,
          q1: leadData.answersSummary[0]?.selectedOption || "",
          q2: leadData.answersSummary[1]?.selectedOption || "",
          q3: leadData.answersSummary[2]?.selectedOption || "",
          q4: leadData.answersSummary[3]?.selectedOption || ""
        };

        await fetch(googleScriptUrl, {
          method: "POST",
          mode: "no-cors", // Crucial for standard Google Web Apps script redirection with no-cors standard configuration
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(flatData)
        });
      } catch (err) {
        console.error("Error sending to Google Apps Script:", err);
      }
    }
    
    setIsSubmitting(false);
    setCurrentStep(5);
  };

  const copyPromptText = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const getScoreBadge = (score: number) => {
    if (score < 40) return { title: "NIVEL ELEMENTAL • BLOQUEO DE AUTORIDAD", color: "text-red-450 border-red-950 bg-red-950/10", desc: "Creas contenido puramente informativo sin ganchos estratégicos ni pilares bien direccionados. Los espectadores te ven como una cuenta más en el feed pero no como un mentor clave. Necesitas estructurar tu posicionamiento urgente en la Semana 1." };
    if (score <= 75) return { title: "NIVEL CONSTANTE • TRACCIÓN INEFICIENTE", color: "text-amber-400 border-amber-950 bg-amber-950/10", desc: "Sabes qué publicar y realizas esfuerzos habituales, pero la falta de copilotos IA y una oferta simplificada te agota. Gastas demasiadas horas creando videos y posts sin embudos conversacionales activos. Tu prioridad máxima es optimizar producción en la Semana 3." };
    return { title: "NIVEL ESTRATÉGICO • EMBUDO DE CONVERSIÓN", color: "text-lime-400 border-lime-950 bg-lime-950/20", desc: "Cuentas con las piezas básicas y buena perspectiva comercial, pero tienes fugas serias en la bandeja de entrada (Backend Conversacional). Hay una gran cantidad de atención que no cosechas. Necesitas implementar disparadores orgánicos automatizados y guiones éticos en la Semana 4." };
  };

  const score = calculateFinalScore();
  const evaluation = getScoreBadge(score);

  const whatsappMsg = `¡Hola! Acabo de completar el Diagnóstico Growth para el Sprint de 30 días. Mi puntaje de madurez orgánica es del ${score}%. Hola, me llamo ${userName} y mi negocio es de ${selectedNiche.toUpperCase()}. ¿Me ayudas a revisar mis resultados?`;
  const whatsappUrl = `https://wa.me/573217929578?text=${encodeURIComponent(whatsappMsg)}`;

  const restartQuiz = () => {
    setAnswers({});
    setUserName("");
    setUserEmail("");
    setUserPhone("");
    setCurrentStep(-1);
  };

  return (
    <section id="diagnostico" className="py-24 bg-zinc-950 border-b border-zinc-800 relative overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10" id="diagnostic-portal">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-3 font-mono text-[10px] uppercase font-bold tracking-widest rounded-none">
            <ClipboardCheck className="w-3.5 h-3.5 text-lime-400" />
            HERRAMIENTA INTERACTIVA DIAGNÓSTICO
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light italic text-white mb-4">
            Diagnóstico Growth Gratuito
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Evalúa tu nivel de tracción de contenido actual y descubre exactamente qué cuello de botella está reteniendo el crecimiento de tu servicio profesional.
          </p>
        </div>

        {/* Central interactive Card Container */}
        <div className="bg-zinc-900/40 border border-zinc-850 rounded-none p-8 md:p-12 shadow-2xl relative min-h-[440px] flex flex-col justify-between">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-zinc-800 overflow-hidden">
            {currentStep >= 0 && currentStep <= 3 && (
              <div 
                className="h-full bg-lime-400 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            )}
            {currentStep === 4 && <div className="h-full bg-lime-450/70 w-4/5" />}
            {currentStep === 5 && <div className="h-full bg-lime-400 w-full" />}
          </div>

          <AnimatePresence mode="wait">
            {/* Step -1: Introduction screen */}
            {currentStep === -1 && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center justify-center py-6 h-full"
              >
                <div className="w-16 h-16 rounded-none bg-zinc-950/60 border border-zinc-850 flex items-center justify-center mb-6 shadow-inner">
                  <Sparkles className="w-8 h-8 text-lime-400" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif font-light italic text-white mb-4">
                  Descubre tu Score de Crecimiento Orgánico
                </h3>
                
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-lg mb-8">
                  Responde 4 preguntas objetivas sobre tu modelo comercial y proceso de redes. Al finalizar, obtendrás una hoja de ruta conceptual personalizada más una plantilla inteligente de Inteligencia Artificial lista para copiar.
                </p>

                <div className="space-y-3 w-full max-w-sm">
                  <button
                    onClick={() => setCurrentStep(0)}
                    className="w-full py-3.5 px-6 rounded-none font-black text-xs uppercase tracking-widest bg-lime-400 text-zinc-950 hover:bg-white transition-all border border-lime-400 flex items-center justify-center gap-2 cursor-pointer"
                    id="start-diagnostic-btn"
                  >
                    Iniciar Diagnóstico Seguro
                    <ChevronRight className="w-4 h-4 text-zinc-950" />
                  </button>
                  <span className="text-[10px] text-zinc-550 font-mono block text-center uppercase tracking-wide">
                    Toma menos de 2 minutos • Completamente gratuito y sin compromiso
                  </span>
                </div>
              </motion.div>
            )}

            {/* Questions Steps 0-3 */}
            {currentStep >= 0 && currentStep <= 3 && (
              <motion.div
                key={`question-${currentStep}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="py-4 h-full flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono font-bold text-lime-400 uppercase tracking-widest">
                      Pregunta {currentStep + 1} de {questions.length}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      Progreso: {Math.round(((currentStep + 1) / questions.length) * 100)}%
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif font-light italic text-white leading-tight mb-8">
                    {questions[currentStep].text}
                  </h3>

                  <div className="space-y-3.5 mb-8">
                    {questions[currentStep].options.map((option, idx) => {
                      const isSelected = answers[questions[currentStep].id]?.text === option.text;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionSelect(questions[currentStep].id, option)}
                          className={`w-full text-left p-5 rounded-none border transition-all duration-200 text-sm flex items-center justify-between gap-4 ${
                            isSelected
                              ? "bg-zinc-800/40 border-lime-400 text-white font-medium"
                              : "bg-zinc-950/20 border-zinc-850 hover:border-lime-400/40 text-zinc-300 hover:text-white"
                          }`}
                          id={`q-${currentStep}-opt-${idx}`}
                        >
                          <span className="leading-relaxed">{option.text}</span>
                          <span className={`w-4 h-4 rounded-none border flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? "border-lime-400 bg-lime-400 text-zinc-950" : "border-zinc-800 hover:border-lime-400"
                          }`}>
                            {isSelected && <span className="text-[9px] font-black">✓</span>}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-zinc-850 font-medium">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                    id="prev-btn"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Regresar
                  </button>
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                    Selecciona una opción para avanzar
                  </span>
                </div>
              </motion.div>
            )}

            {/* Step 4: Lead generation Capture form */}
            {currentStep === 4 && (
              <motion.div
                key="lead-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="py-4 h-full text-left"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-light italic text-white mb-2">
                    ¡Respuestas Registradas con Éxito!
                  </h3>
                  <p className="text-zinc-200 text-sm max-w-lg leading-relaxed">
                    Para consolidar tu reporte estratégico de conversión y desbloquear tu score real personalizado, ingresa tus detalles de contacto a continuación.
                  </p>
                </div>

                <form onSubmit={handleSubmitLead} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                      Nombre Completo <span className="text-lime-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Alejandro Ortiz"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-850 rounded-none px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-lime-400 transition-colors"
                      id="lead-name"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                      Correo Electrónico <span className="text-lime-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ej: alejandro@tuempresa.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-850 rounded-none px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-lime-400 transition-colors"
                      id="lead-email"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                      Teléfono Móvil o WhatsApp (Opcional)
                    </label>
                    <input
                      type="tel"
                      placeholder="Ej: +34 600 000 000"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-850 rounded-none px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-lime-400 transition-colors"
                      id="lead-phone"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-none text-xs text-red-450 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="pt-4 flex flex-col md:flex-row gap-3 items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors py-2 uppercase font-mono tracking-wider"
                      id="lead-back-btn"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Revisar respuestas
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto py-3.5 px-8 rounded-none font-black text-xs uppercase tracking-widest bg-lime-400 text-zinc-950 hover:bg-white transition-all border border-lime-400 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      id="lead-submit-btn"
                    >
                      {isSubmitting ? "Enviando Reporte..." : "Generar Mi Diagnóstico"}
                      <ChevronRight className="w-4 h-4 text-zinc-950" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 5: Advanced Results Dashboard */}
            {currentStep === 5 && (
              <motion.div
                key="results-panel"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="py-4 space-y-8 text-left"
              >
                {/* Score visualization Header */}
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-4 flex flex-col items-center text-center p-6 bg-zinc-950/80 border border-zinc-850 rounded-none">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold">
                      TU MADUREZ ORGÁNICA
                    </span>
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="54"
                          className="text-zinc-800"
                          strokeWidth="8"
                          fill="transparent"
                          stroke="currentColor"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="54"
                          className="text-lime-400"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={2 * Math.PI * 54}
                          strokeDashoffset={2 * Math.PI * 54 * (1 - score / 100)}
                          strokeLinecap="square"
                        />
                      </svg>
                      <span className="absolute text-3xl font-mono font-black text-white">
                        {score}%
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-8 space-y-3">
                    <span className={`inline-flex px-2.5 py-1 rounded-none text-[10px] font-mono font-bold border ${evaluation.color}`}>
                      {evaluation.title}
                    </span>
                    <h4 className="text-xl md:text-2xl font-serif font-light italic text-white line-clamp-2">
                      ¡Hola, {userName}! Este es tu reporte estratégico simplificado
                    </h4>
                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                      {evaluation.desc}
                    </p>
                  </div>
                </div>

                {/* Structured questions feedbacks */}
                <div className="p-6 bg-zinc-950/60 border border-zinc-850 rounded-none space-y-4">
                  <h5 className="text-xs font-mono text-lime-400 font-bold uppercase tracking-widest">
                    ¿Qué dice tu diagnóstico?
                  </h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    {(Object.entries(answers) as [string, { score: number; text: string; feedback: string }][]).map(([qId, ans], idx) => (
                      <div key={qId} className="p-4 bg-zinc-900/30 border border-zinc-850/50 rounded-none space-y-1.5 text-sm">
                        <span className="block font-black uppercase tracking-wide text-white text-xs font-mono">
                          Fase {idx + 1}: {idx === 0 ? "Goal & Ideas" : idx === 1 ? "Consistencia" : idx === 2 ? "Oferta comercial" : "Conversión"}
                        </span>
                        <p className="text-zinc-400 line-clamp-1 italic text-xs font-serif font-light">
                          Seleccionaste: "{ans.text}"
                        </p>
                        <p className="text-lime-400 font-mono text-xs md:text-sm font-bold mt-1 leading-snug">
                          ✓ {ans.feedback}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive AI content prompt generator for practical value */}
                <div className="p-6 bg-zinc-950 border border-zinc-850 rounded-none relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 rounded-full blur-[40px] pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h5 className="text-xs font-mono text-lime-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-lime-400 shrink-0" />
                        Cosecha Tu Primer Regalo: Prompt Inteligente de IA y Ventas
                      </h5>
                      <p className="text-xs md:text-sm text-zinc-300 mt-1">
                        Selecciona tu rubro y copia este prompt de entrenamiento de estilo listo para usar.
                      </p>
                    </div>

                    {/* Select rubro */}
                    <select
                      value={selectedNiche}
                      onChange={(e) => setSelectedNiche(e.target.value)}
                      className="bg-zinc-900 border border-zinc-800 rounded-none text-xs text-lime-400 p-2.5 outline-none font-bold uppercase tracking-wider"
                      id="rubro-select"
                    >
                      <option value="coaches">Coaching / Infoproductores</option>
                      <option value="consultores">Consultores / B2B</option>
                      <option value="inmobiliarios">Bienes Raíces / Inmobiliaria</option>
                      <option value="independientes">Profesionales Autónomos</option>
                    </select>
                  </div>

                  <div className="bg-zinc-900/90 border border-zinc-850 rounded-none p-5 font-mono text-xs md:text-sm text-zinc-200 leading-relaxed relative max-h-[180px] overflow-y-auto whitespace-pre-wrap select-all">
                    {nichePrompts[selectedNiche].prompt}
                  </div>

                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => copyPromptText(nichePrompts[selectedNiche].prompt)}
                      className="py-2 px-4 rounded-none bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-[10px] font-mono uppercase tracking-widest font-bold text-lime-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                      id="copy-prompt-btn"
                    >
                      {isCopied ? "¡Copiado con Éxito!" : "Copiar Prompt Integrado"}
                    </button>
                  </div>
                </div>

               {/* Final Call To Action block */}
                <div className="pt-6 border-t border-zinc-850 flex flex-col items-center text-center space-y-4">
                  <h4 className="text-xl md:text-2xl font-serif font-light italic text-white max-w-xl">
                    ¿Quieres acelerar tu conversión hoy y construir tu sistema de contenido en 30 días?
                  </h4>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl">
                    Tienes dos caminos: Inscríbete directamente al <strong className="text-lime-400 font-bold">Growth Sprint 30D</strong> en Hotmart con acceso de por vida a las plantillas y la comunidad, o solicita primero una auditoría gratis 1-a-1 de tus respuestas a nuestro WhatsApp.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full justify-center pt-2">
                    <a
                      href={(import.meta as any).env?.VITE_HOTMART_URL || "https://pay.hotmart.com/YOUR_PRODUCT_ID"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-4 px-8 rounded-none font-black text-xs uppercase tracking-widest bg-lime-400 text-zinc-950 hover:bg-white transition-all border border-lime-400 flex items-center justify-center gap-2 shadow-md cursor-pointer group"
                      id="hotmart-cta-analytics"
                    >
                      <span>Inscribirme en Hotmart</span>
                      <ChevronRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-4 px-8 rounded-none font-black text-xs uppercase tracking-widest bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-lime-450 flex items-center justify-center gap-2 cursor-pointer"
                      id="wa-cta-analytics"
                    >
                      <PhoneCall className="w-4 h-4 text-lime-400" />
                      Agendar Auditoría Gratis
                    </a>

                    <button
                      onClick={restartQuiz}
                      className="py-4 px-6 rounded-none font-bold uppercase tracking-widest bg-zinc-90 border border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-400 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      id="restart-quiz-btn"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Reiniciar
                    </button>
                  </div>
                  
                  <span className="text-[10px] text-zinc-550 font-mono block text-center uppercase tracking-wider pt-2">
                    ✓ Pago 100% Seguro por Hotmart • Garantía de Devolución de 7 Días
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
