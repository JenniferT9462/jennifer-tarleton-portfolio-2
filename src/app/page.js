'use client'

import Hero from "@/components/Hero";
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'


export default function Home() {

  return (
 
    <div className="flex h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      {/* Left Sidebar (Nav + Hero) */}
      <Hero/>
    
       {/* Right Content (Sections) */}
       <div className="w-full md:w-3/4 h-screen overflow-y-auto" style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}>
        <div className="min-h-screen">
          <About />
        </div>
        <div className="min-h-screen">
          <Projects />
        </div>
        <div className="min-h-screen">
          <Contact />
        </div>
      </div>
    </div>
  );
};


