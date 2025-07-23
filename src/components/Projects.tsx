import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import futbolImg from "../assets/web-futbol.png";
import siImg from "../assets/si.jpg";
import portfolioImg from "../assets/portfolio.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const projects = [
  {
    id: 1,
    title: "Sitio Web Estadisticas de Futbol",
    description:
      "Aplicación web que brinda información sobre estadísticas de futbol de las diferentes ligas del mundo.",
    image: futbolImg,
    technologies: ["HTML", "CSS", "JavaScript", "Express"],
    githubUrl: "https://github.com/Davidenko01/LAB-PROG/tree/api-rest",
    demoUrl: "",
  },
  {
    id: 2,
    title: "Borde Interno - Version Mobile",
    description: "Aplicacion Mobile de estadisticas de futbol y partidos",
    image: siImg,
    technologies: [
      "React Native",
      "Tailwind",
      "PostgreSQL",
      "Prisma",
      "NestJS",
      "React Query",
    ],
    githubUrl: "https://github.com/Davidenko01/BORDE-INTERNO",
    demoUrl: "",
  },
  {
    id: 3,
    title: "Portafolio Personal",
    description:
      "Sitio web personal desarrollado con React y Tailwind CSS para mostrar mis proyectos y habilidades.",
    image: portfolioImg,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    demoUrl: "",
  },
];

export const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="projects" className="py-8 md:py-16">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mis <span className="text-primary">Proyectos</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-[700px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Una selección de proyectos académicos y personales que he
            desarrollado durante mi formación.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Carousel
            opts={{ align: "start" }}
            className="w-full mx-auto relative container"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 h-full"
                >
                  <motion.div variants={item} className="p-1 h-full">
                    <Card className="min-h-[460px] max-h-[550px] flex flex-col overflow-hidden bg-card/70">
                      <div className="relative h-48 w-full">
                        <figure className="flex justify-center items-center rounded-full">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="h-48 w-full object-cover rounded-t-md"
                          />
                        </figure>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg font-bold">
                          {project.title}
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="default">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:bg-primary/50 transition-colors"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Código
                            </a>
                          </Button>
                        )}
                        {project.demoUrl && (
                          <Button variant="default" size="sm" asChild>
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:bg-primary/50 transition-colors"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer absolute top-1/2 -translate-y-1/2 z-10 flex left-1 sm:left-2 md:-left-8" />
            <CarouselNext className="cursor-pointer absolute top-1/2 -translate-y-1/2 z-10 flex right-1 sm:right-2 md:-right-8" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
