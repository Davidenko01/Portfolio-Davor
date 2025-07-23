"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import htmlLogo from "../assets/Logos/html.svg";
import cssLogo from "../assets/Logos/css.svg";
import jsLogo from "../assets/Logos/javascript.svg";
import tsLogo from "../assets/Logos/typescript.svg";
import reactLogo from "../assets/Logos/react.svg";
import tailwindLogo from "../assets/Logos/TailwindCSS-Light.svg";
import reactNativeLogo from "../assets/Logos/react.svg";

import nodeLogo from "../assets/Logos/nodejs.svg";
import expressLogo from "../assets/Logos/express.svg";
import javaLogo from "../assets/Logos/java.svg";
import nestLogo from "../assets/Logos/NestJS.svg";

import postgresLogo from "../assets/Logos/postgresql.svg";

import gitLogo from "../assets/Logos/git.svg";
import githubLogo from "../assets/Logos/github.svg";
import vscodeLogo from "../assets/Logos/vscode.svg";
import { SkillCard } from "./SkillCard";

const skills = {
  frontend: [
    { name: "HTML5", url: htmlLogo },
    { name: "CSS3", url: cssLogo },
    { name: "JavaScript", url: jsLogo },
    { name: "TypeScript", url: tsLogo },
    { name: "React", url: reactLogo },
    { name: "Tailwind CSS", url: tailwindLogo },
    { name: "React Native", url: reactNativeLogo },
  ],
  backend: [
    { name: "Node.js", url: nodeLogo },
    { name: "Express", url: expressLogo },
    { name: "JAVA", url: javaLogo },
    { name: "NestJS", url: nestLogo },
  ],
  databases: [{ name: "PostgreSQL", url: postgresLogo }],
  tools: [
    { name: "Git", url: gitLogo },
    { name: "GitHub", url: githubLogo },
    { name: "VS Code", url: vscodeLogo },
  ],
};

const SkillGrid = ({
  skills,
  category,
}: {
  skills: { name: string; url: string }[];
  category: string;
}) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {skills.map((skill, index) => (
      <SkillCard
        key={`${category}-${skill.name}`}
        skill={skill}
        index={index}
      />
    ))}
  </div>
);

export const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mis <span className="text-primary">Habilidades</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-[700px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tecnologías y herramientas con las que he trabajado durante mi
            formación académica y proyectos personales.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="frontend" className="w-full mx-auto">
            <TabsList className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-12 md:mb-4 bg-background/50 backdrop-blur-sm rounded-lg mx-auto">
              <TabsTrigger
                value="frontend"
                className="cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-primary/50 hover:text-primary transition-colors duration-200"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-primary/50 hover:text-primary transition-colors duration-200"
              >
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="databases"
                className="cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-primary/50 hover:text-primary transition-colors duration-200"
              >
                Bases de Datos
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-primary/50 hover:text-primary transition-colors duration-200"
              >
                Herramientas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="space-y-6">
              <SkillGrid skills={skills.frontend} category="frontend" />
            </TabsContent>

            <TabsContent value="backend" className="space-y-6">
              <SkillGrid skills={skills.backend} category="backend" />
            </TabsContent>

            <TabsContent value="databases" className="space-y-6">
              <SkillGrid skills={skills.databases} category="databases" />
            </TabsContent>

            <TabsContent value="tools" className="space-y-6">
              <SkillGrid skills={skills.tools} category="tools" />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
