import { motion } from "framer-motion";
import { personalInfo } from "../../constants/data";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "../ui/Icons";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-yellow border-2 border-dark rounded-full mix-blend-multiply opacity-70 animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-coral border-2 border-dark mix-blend-multiply opacity-70 animate-bounce" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-4 py-2 border-2 border-dark bg-teal shadow-brutal font-mono font-bold text-sm md:text-base transform -rotate-2"
        >
          HELLO, WORLD! 👋
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-dark mb-6 tracking-tight leading-none"
        >
          I'M <span className="text-coral underline decoration-8 underline-offset-8">{personalInfo.name.toUpperCase()}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {personalInfo.roles.map((role, idx) => (
            <span
              key={idx}
              className={`px-4 py-2 border-2 border-dark font-bold shadow-brutal-sm ${
                idx % 3 === 0 ? "bg-lavender" : idx % 3 === 1 ? "bg-pink" : "bg-yellow"
              }`}
            >
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl md:text-2xl text-dark/80 max-w-2xl mx-auto mb-12 font-medium"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-coral text-dark font-black text-xl border-2 border-dark shadow-brutal hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all w-full sm:w-auto"
          >
            SEE MY WORK
          </a>
          <div className="flex gap-4">
            <a href="https://github.com/dwi" target="_blank" rel="noreferrer" className="p-3 bg-white border-2 border-dark shadow-brutal-sm hover:bg-yellow transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/dwi" target="_blank" rel="noreferrer" className="p-3 bg-white border-2 border-dark shadow-brutal-sm hover:bg-blue transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:dwi@email.com" className="p-3 bg-white border-2 border-dark shadow-brutal-sm hover:bg-teal transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
