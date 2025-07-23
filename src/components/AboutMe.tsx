import { motion } from 'framer-motion';
import perfil from '../assets/perfil.png'; 

export const AboutMe = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              <span className='text-primary'>Sobre</span> mi
            </h2>
            <p className="text-muted-foreground mb-4 text-left">
              Soy un estudiante apasionado de la Licenciatura en Ciencias de la
              Computación, actualmente enfocado en expandir mis conocimientos en
              desarrollo web fullstack.
            </p>
            <p className="text-muted-foreground mb-4 text-left">
              Mi objetivo es convertirme en un desarrollador versátil capaz de
              crear soluciones innovadoras que resuelvan problemas reales. Me
              encanta aprender nuevas tecnologías y aplicarlas en proyectos
              prácticos.
            </p>
            <p className="text-muted-foreground text-left">
              Cuando no estoy programando, disfruto del buen cine, la buena música y salidas de pesca. Siempre estoy abierto a nuevas oportunidades de
              aprendizaje y colaboración.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50">
              <img
                src={perfil}
                alt="Tu foto"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
