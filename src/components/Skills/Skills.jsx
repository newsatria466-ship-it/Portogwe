import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { certificationsData } from "../../constants/data";
import SectionTitle from "../ui/SectionTitle";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="VERIFIED CREDENTIALS." subtitle="Official competencies, licenses, and verified achievements" accent="yellow" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {certificationsData.map((cert, idx) => {
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-6 border-4 border-black shadow-[6px_6px_0px_0px_#000] ${cert.bg} hover:-translate-y-2 hover:rotate-1 transition-all duration-200 ease-in-out flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white border-2 border-black">
                      <Award size={28} className="text-black" />
                    </div>
                    <span className="border-2 border-black bg-white px-3 py-1 rounded-full font-bold text-sm">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight mb-2">{cert.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 size={16} className="text-black shrink-0" />
                    <p className="font-bold text-sm uppercase">{cert.issuer}</p>
                  </div>
                  <p className="font-mono text-sm text-black/80 font-medium">{cert.description}</p>
                  <p className="font-mono text-xs mt-2 font-bold bg-white/50 inline-block px-2 py-1 border border-black">ID: {cert.credentialId}</p>
                </div>
                
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block w-full mt-6 text-center py-3 border-2 border-black bg-white font-black uppercase hover:bg-black hover:text-white transition-colors">
                  View Certificate ↗
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
