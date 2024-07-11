import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/Floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main
      className="relative flex flex-col justify-center bg-[#111417] items-center overflow-hidden
    mx-auto sm:px-10 px-5
    "
    >
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems}
        />
        <Hero />
        <About />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
