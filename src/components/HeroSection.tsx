import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText } from "lucide-react"

export const HeroSection = () => {
    return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className = "text-4xl font-bold md:text-6xl tracking-tight">
                    <span className="opacity-0 animate-fade-in">Davor </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Kissner</span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Estudiante de Ciencias de la Computación en busca de oportunidades para aprender y crecer como desarrollador.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4 animate-fade-in-delay-4 opacity-0">
                <Button variant="outline" size="lg" asChild>
                    <a className="hover:bg-primary/90 transition-colors" href="https://github.com/Davidenko01" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        GitHub
                    </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <a className="hover:bg-primary/90 transition-colors" href="https://www.linkedin.com/in/davor-kissner01/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                    </a>
                </Button>
                <Button variant="default" size="lg" asChild>
                    <a href="../../public/Davor_Kissner_CV.pdf" download>
                        <FileText className="mr-2 h-5 w-5" />
                        Descargar CV
                    </a>
                </Button>
            </div>
        </div>
    </section>
    )
}