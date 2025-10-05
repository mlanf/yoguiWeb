"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Users, Brain, Clock, Activity, Flower } from "lucide-react"
import Image from "next/image"
import { useActionState } from "react"
import { submitInvitation } from "./actions"

export default function YoguiAiLanding() {
  const [state, formAction, isPending] = useActionState(submitInvitation, null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 overflow-x-hidden">
      {/* Header */}
      <header className="container mx-auto px-4 py-2 md:py-3 max-w-full">
        <div className="flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yogui%20ai%20LOGO%20AI%20celeste-X1oIsBhGq3iUwVi0DkKHJ8HtwVo7Li.png"
            alt="Yogui Logo"
            width={900}
            height={360}
            className="h-40 sm:h-48 md:h-72 w-auto max-w-full"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-6 md:py-12 lg:py-20 max-w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="text-center space-y-4 md:space-y-6 order-2 lg:order-1 px-2">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-amber-900 leading-tight md:leading-relaxed text-center break-words hyphens-auto">
              Tu asistente virtual para{" "}
              <span className="block font-medium text-amber-800">potenciar tu energía vital</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-700 leading-relaxed max-w-2xl mx-auto text-center px-2 break-words">
              Yogui te acompaña día a día con prácticas personalizadas de yoga, respiración consciente, relajación y
              meditación, adaptadas especialmente para ti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 px-4">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium w-full sm:w-auto"
                onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
              >
                Quiero mi invitación
              </Button>
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yogui-6zWu9OqoHWxulDRHPzCNBY7aeEyD9E.png"
                alt="Persona mayor meditando"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="bg-gray-50 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-full">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-amber-900 mb-4 md:mb-6 px-2 break-words">
              Tres pilares para tu bienestar
            </h2>
            <p className="text-lg md:text-xl text-amber-700 max-w-2xl mx-auto px-2 break-words">
              Yogui te ayuda a sentirte mejor cada día con un enfoque integral
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-sm bg-amber-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Activity className="w-7 h-7 md:w-8 md:h-8 text-amber-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-amber-900 mb-3 md:mb-4">Movimiento</h3>
                <p className="text-amber-700 leading-relaxed text-base md:text-lg break-words">
                  Prácticas para fortalecer el cuerpo, recuperar la movilidad y desarrollar la conciencia corporal
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-orange-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Brain className="w-7 h-7 md:w-8 md:h-8 text-orange-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-amber-900 mb-3 md:mb-4">Mente</h3>
                <p className="text-amber-700 leading-relaxed text-base md:text-lg break-words">
                  Técnicas de respiración y meditación para calmar tu mente y reducir el estrés
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-amber-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Users className="w-7 h-7 md:w-8 md:h-8 text-amber-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-amber-900 mb-3 md:mb-4">Conexión</h3>
                <p className="text-amber-700 leading-relaxed text-base md:text-lg break-words">
                  Un espacio de escucha y acompañamiento que fomenta tu bienestar emocional
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cómo Funciona Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto px-4 max-w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otra-Q0ByFq4WB5w8bmrs4Kfi42bwZvJFUT.png"
                  alt="Persona mayor usando WhatsApp"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-4 md:space-y-6 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-amber-900 px-2 break-words">
                Una conversación que te hace bien
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                    <h3 className="text-lg md:text-xl font-medium text-amber-900 break-words">
                      Conversación por WhatsApp
                    </h3>
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-amber-900 flex-shrink-0" />
                  </div>
                  <p className="text-amber-700 text-base md:text-lg px-2 lg:px-0 break-words">
                    Yogui te escribe cada día para conocer cómo te sentís y qué necesitás
                  </p>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                    <h3 className="text-lg md:text-xl font-medium text-amber-900 break-words">
                      Prácticas personalizadas
                    </h3>
                    <Flower className="w-5 h-5 md:w-6 md:h-6 text-amber-900 flex-shrink-0" />
                  </div>
                  <p className="text-amber-700 text-base md:text-lg px-2 lg:px-0 break-words">
                    Recibí ejercicios de yoga, respiración y meditación adaptados a tu tiempo y energía
                  </p>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                    <h3 className="text-lg md:text-xl font-medium text-amber-900 break-words">
                      Acompañamiento constante
                    </h3>
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-amber-900 flex-shrink-0" />
                  </div>
                  <p className="text-amber-700 text-base md:text-lg px-2 lg:px-0 break-words">
                    Un espacio seguro donde podés compartir y recibir apoyo para tu bienestar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="formulario" className="py-12 md:py-16 lg:py-24 bg-gray-50 text-amber-900">
        <div className="container mx-auto px-4 text-center max-w-full">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light px-2 break-words">
              Yogui estará disponible pronto
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-amber-800 leading-relaxed px-2 break-words">
              Registrate para experimentar el acompañamiento personalizado de Yogui. Dejanos tus datos y te enviaremos
              una invitación.
            </p>

            <Card className="max-w-sm md:max-w-md mx-auto bg-amber-50 border-amber-300">
              <CardContent className="p-4 md:p-6">
                <form action={formAction} className="space-y-3 md:space-y-4">
                  <div>
                    <Input
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      className="bg-white border-amber-400 text-amber-900 placeholder:text-amber-600 focus:border-amber-600 h-12 text-base"
                      required
                      disabled={isPending}
                    />
                  </div>
                  <div>
                    <Input
                      name="telefono"
                      type="tel"
                      placeholder="Tu teléfono"
                      className="bg-white border-amber-400 text-amber-900 placeholder:text-amber-600 focus:border-amber-600 h-12 text-base"
                      required
                      disabled={isPending}
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Tu email (opcional)"
                      className="bg-white border-amber-400 text-amber-900 placeholder:text-amber-600 focus:border-amber-600 h-12 text-base"
                      disabled={isPending}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-300 text-white py-3 md:py-4 rounded-full text-base md:text-lg font-medium h-12 md:h-auto"
                  >
                    {isPending ? "Enviando..." : "Quiero mi invitación"}
                  </Button>

                  {/* Mensaje de confirmación */}
                  {state && (
                    <div
                      className={`text-center py-2 px-4 rounded-lg ${
                        state.success
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : "bg-red-100 text-red-800 border border-red-200"
                      }`}
                    >
                      <p className="text-sm md:text-base font-medium break-words">{state.message}</p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-200 py-6 md:py-8">
        <div className="container mx-auto px-4 text-center max-w-full">
          <div className="flex justify-center mb-3 md:mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yogui%20ai%20LOGO%20AI%20celeste-X1oIsBhGq3iUwVi0DkKHJ8HtwVo7Li.png"
              alt="Yogui Logo"
              width={120}
              height={48}
              className="h-6 md:h-8 w-auto opacity-80 max-w-full"
            />
          </div>
          <p className="text-xs md:text-sm">© 2025 Yogui</p>
        </div>
      </footer>
    </div>
  )
}
