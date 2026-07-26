import { motion } from "framer-motion";
import { aboutData, educationData } from "../../constants/data";
import SectionTitle from "../ui/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-lavender/30 border-y-2 border-dark">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="ABOUT ME" subtitle="Who I am and what I do" accent="lavender" />

        <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-8 border-2 border-dark shadow-brutal-lg"
          >
            <div className="space-y-4">
              {aboutData.description.map((para, idx) => (
                <p key={idx} className="text-lg font-medium leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {aboutData.stats.map((stat, idx) => (
                <div key={idx} className="p-4 border-2 border-dark bg-yellow shadow-brutal-sm text-center">
                  <h3 className="text-3xl font-black">{stat.value}</h3>
                  <p className="font-mono text-sm font-bold uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-black border-b-2 border-dark inline-block pb-2">EDUCATION</h3>
            
            {educationData.map((edu, idx) => {
              const Icon = edu.icon;
              return (
                <div key={idx} className="bg-teal p-6 border-2 border-dark shadow-brutal flex gap-4 relative group hover:-translate-y-2 transition-transform">
                  <div className="p-3 bg-white border-2 border-dark rounded-full h-fit flex-shrink-0 group-hover:bg-coral transition-colors">
                    <Icon size={32} />
                  </div>
                  <div>
                    <span className="font-mono bg-dark text-white px-2 py-1 text-sm font-bold mb-2 inline-block">
                      {edu.period}
                    </span>
                    <h4 className="text-2xl font-black mb-1">{edu.degree}</h4>
                    <p className="text-xl font-bold text-dark/80 mb-2">{edu.institution}</p>
                    <p className="font-mono font-bold bg-white/50 inline-block px-2 border border-dark mb-3">GPA: {edu.gpa}</p>
                    <p className="font-medium">{edu.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
