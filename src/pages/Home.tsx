import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            
            <ThemeToggle/>
            <StarBackground/>
            <Navbar/>
            <main>
                <HeroSection/>
                <AboutMe/>
                <Projects/>
                <Skills/>
                <Contact/>
                <Footer/>
            </main>

        </div>
    );
};