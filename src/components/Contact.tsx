import { ToastContainer, toast } from "react-toastify";
import type React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send } from "lucide-react";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) {
      console.error("El formulario no está disponible.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          setIsSubmitting(false);
          form.current?.reset();
          toast.success("¡Gracias por tu mensaje!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
          form.current?.reset();
          toast.warn("¡Error al enviar el correo!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 z-30">
          <motion.h2
            className="text-3xl font-bold tracking-tighter mb-4 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contacto
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-[700px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ¿Tienes alguna pregunta o propuesta? No dudes en contactarme.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="z-30"
          >
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl text-left mb-2 text-primary">
                  Envíame un mensaje
                </CardTitle>
                <CardDescription className="text-left text-muted-foreground">
                  Completa el formulario y me pondré en contacto contigo lo
                  antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="space-y-4 text-left"
                >
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium mb-3 block"
                    >
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="user_name"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium mb-3 block"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium mb-3 block"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tu mensaje..."
                      className="h-32"
                      rows={15}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                  <ToastContainer />
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center z-30"
          >
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  Contacto directo
                </h3>
                <p className="text-muted-foreground mb-4">
                  También puedes contactarme directamente a través de mi correo
                  electrónico o teléfono:
                </p>
                <div className="flex items-center mb-3">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  <a
                    href="mailto:davor.kissner01@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    davor.kissner01@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  +54 299 627-2715
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  Ubicación
                </h3>
                <p className="text-muted-foreground">
                  Centenario, Neuquén, Argentina
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  Disponibilidad
                </h3>
                <p className="text-muted-foreground">
                  Disponible para prácticas profesionales, proyectos freelance y
                  oportunidades de aprendizaje.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
