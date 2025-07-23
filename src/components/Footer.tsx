import { Github, Linkedin, Mail } from "lucide-react"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 md:py-12 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 z-40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© {currentYear} Davor Kissner. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://Buttonedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="sr-only">ButtonedIn</span>
            </a>
            <a href="mailto:tu@email.com">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
