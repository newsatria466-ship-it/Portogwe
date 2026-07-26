import { motion } from "framer-motion";
import { skillCategories } from "../../constants/data";
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

const bgColors = ["bg-coral", "bg-teal", "bg-yellow", "bg-pink", "bg-blue", "bg-green"];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="MY ARSENAL" subtitle="Tools and technologies I use to build things" accent="yellow" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const bgColor = bgColors[idx % bgColors.length];
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-6 border-2 border-dark shadow-brutal-lg ${bgColor}`}
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-dark">
                  <div className="p-3 bg-white border-2 border-dark rounded-none">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black uppercase">{cat.title}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between font-mono font-bold text-sm mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-4 bg-white border-2 border-dark w-full relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="absolute top-0 left-0 h-full bg-dark"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
