import { motion } from "framer-motion";
import { experienceData } from "../../constants/data";
import SectionTitle from "../ui/SectionTitle";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-blue/10">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="EXPERIENCE" subtitle="Where I've worked and what I've done" accent="blue" />

        <div className="mt-16 space-y-12">
          {experienceData.map((exp, idx) => {
            const Icon = exp.icon;
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Line (Hidden on mobile for cleaner look) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-[-3rem] w-1 bg-dark -translate-x-1/2 z-0" />
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 w-12 h-12 bg-yellow border-4 border-dark rounded-full -translate-x-1/2 z-10 items-center justify-center">
                  <Icon size={20} className="text-dark" />
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-white p-6 border-2 border-dark shadow-brutal hover:shadow-brutal-lg transition-shadow relative z-20">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-4 border-b-2 border-dark border-dashed gap-2">
                      <div>
                        <h3 className="text-2xl font-black text-coral">{exp.role}</h3>
                        <p className="text-lg font-bold text-dark">{exp.company}</p>
                      </div>
                      <span className="font-mono font-bold bg-dark text-white px-3 py-1 text-sm inline-block self-start">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-3 mt-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex gap-3 items-start font-medium text-dark/80">
                          <span className="text-coral mt-1">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
