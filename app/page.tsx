"use client";

import { Button } from "@/components/ui/button";
import { AnimatedList } from "@/components/magicui/animated-list";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/magicui/terminal";
import { AnimatedIcon } from "@/components/magicui/animated-icon";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { NavMenu } from "@/components/magicui/nav-menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      <div className="fixed inset-0 z-0 w-full h-full">
        <DotPattern 
          width={20} 
          height={20} 
          glow 
          className="w-full h-full opacity-50" 
          style={{ width: '100vw', height: '100vh' }}
        />
      </div>
      <NavMenu />
      <div className="relative z-10 w-full px-4 pt-32 pb-12 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24 max-w-6xl mx-auto">
          <div className="flex-1 text-left">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Descubre el poder de los prompts
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explora nuestra colección curada de prompts de desarrollo para crear proyectos asombrosos. 
              Desde análisis de datos hasta IA generativa, encuentra la inspiración para tu próximo proyecto.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full">
                Explorar Prompts
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Contribuir
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl">
            <Terminal className="w-full">
              <AnimatedSpan delay={0}>
                $ npm create magic-ui@latest my-project
              </AnimatedSpan>
              <AnimatedSpan delay={500}>
                Creating a new magic-ui project in ./my-project...
              </AnimatedSpan>
              <AnimatedSpan delay={1000} className="text-green-500">
                ✓ Project structure created
              </AnimatedSpan>
              <AnimatedSpan delay={1500} className="text-green-500">
                ✓ Dependencies installed
              </AnimatedSpan>
              <AnimatedSpan delay={2000}>
                $ cd my-project
              </AnimatedSpan>
              <TypingAnimation delay={2500} duration={50}>
                $ npm run dev
              </TypingAnimation>
              <AnimatedSpan delay={3500} className="text-yellow-500">
                Ready on http://localhost:3000
              </AnimatedSpan>
            </Terminal>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          <BoxReveal>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-3">🔍 Analizador de Logs con Alertas Automatizadas</h3>
              <p className="text-muted-foreground">"Desarrollar una herramienta que procese archivos de logs en tiempo real, detecte patrones específicos (como errores críticos o picos de actividad) y envíe alertas por correo electrónico o Slack"</p>
            </div>
          </BoxReveal>

          <BoxReveal delay={0.2}>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-3">📚 Generador de Documentación API a partir de Archivos OpenAPI</h3>
              <p className="text-muted-foreground">"Crear una aplicación que tome archivos OpenAPI (Swagger) y genere documentación web interactiva, incluyendo ejemplos de llamadas y esquemas de respuesta ."</p>
            </div>
          </BoxReveal>

          <BoxReveal delay={0.4}>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-3">💰 Dashboard de Monitoreo de Precios en E-commerce</h3>
              <p className="text-muted-foreground">"Desarrollar un sistema que rastree los precios de productos en múltiples sitios web de comercio electrónico y muestre gráficos de evolución de precios, con alertas cuando el precio baje o alcance un valor determinado."</p>
            </div>
          </BoxReveal>

          <BoxReveal delay={0.6}>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-3">✨ Generador de Imágenes con IA</h3>
              <p className="text-muted-foreground">"Crear una aplicación web que utilice la API de DALL-E o Stable Diffusion para generar imágenes a partir de descripciones de texto, con opciones de personalización y galería de resultados."</p>
            </div>
          </BoxReveal>

          <BoxReveal delay={0.8}>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-3">🧑‍💻 Asistente de Código</h3>
              <p className="text-muted-foreground">"Desarrollar un asistente de programación que analice código fuente, sugiera mejoras, detecte errores potenciales y proporcione explicaciones detalladas del funcionamiento del código."</p>
            </div>
          </BoxReveal>

          <BoxReveal delay={1}>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-3">💬 Chatbot Personalizado</h3>
              <p className="text-muted-foreground">"Crear un chatbot inteligente utilizando técnicas de procesamiento de lenguaje natural que pueda mantener conversaciones contextuales, responder preguntas específicas y aprender de las interacciones previas."</p>
            </div>
          </BoxReveal>
        </div>

        

        <div className="mt-12 w-full max-w-xl mx-auto">
          <AnimatedList
            items={[
              <div key="1" className="flex items-center space-x-4">
                <span className="text-2xl">🎨</span>
                <span>Diseño moderno y atractivo</span>
              </div>,
              <div key="2" className="flex items-center space-x-4">
                <span className="text-2xl">⚡</span>
                <span>Rendimiento optimizado</span>
              </div>,
              <div key="3" className="flex items-center space-x-4">
                <span className="text-2xl">🚀</span>
                <span>Animaciones fluidas</span>
              </div>,
              <div key="4" className="flex items-center space-x-4">
                <span className="text-2xl">📱</span>
                <span>Totalmente responsive</span>
              </div>,
              <div key="5" className="flex items-center space-x-4">
                <span className="text-2xl">🛠️</span>
                <span>Personalización completa</span>
              </div>
            ]}
          />
        </div>
      </div>
    </div>
  );
}
