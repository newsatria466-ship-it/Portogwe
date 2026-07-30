import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, projectCategories } from "../../constants/data";
import SectionTitle from "../ui/SectionTitle";
import { ExternalLink } from "lucide-react";
import { Github } from "../ui/Icons";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [showAllMobile, setShowAllMobile] = useState(false);

  const filteredProjects = projectsData.filter(
    (project) => filter === "All" || (Array.isArray(project.category) ? project.category.includes(filter) : project.category === filter)
  );

  return (
    <section id="projects" className="py-24 px-6 bg-pink/20 border-y-2 border-dark">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="PROJECTS" subtitle="Some things I've built" accent="pink" />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setFilter(cat);
                setShowAllMobile(false);
              }}
              className={`px-6 py-2 border-2 border-dark font-bold font-mono transition-all ${
                filter === cat
                  ? "bg-dark text-white shadow-none translate-y-[2px] translate-x-[2px]"
                  : "bg-white text-dark shadow-brutal hover:bg-yellow hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`bg-white border-2 border-dark shadow-brutal flex-col group hover:-translate-y-2 hover:shadow-brutal-xl transition-all ${idx >= 3 && !showAllMobile ? 'hidden md:flex' : 'flex'}`}
              >
                {/* Project Image or Placeholder */}
                <div className="h-48 border-b-2 border-dark bg-yellow relative overflow-hidden flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      {/* Decorative background pattern */}
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1A1A2E 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                      <h3 className="text-3xl font-black text-center text-dark rotate-[-5deg] bg-white border-2 border-dark px-4 py-2 shadow-brutal-sm z-10">
                        {project.title.substring(0, 10)}...
                      </h3>
                    </>
                  )}
                  
                  {project.featured && (
                    <span className="absolute top-4 right-4 bg-coral text-dark border-2 border-dark px-2 py-1 text-xs font-bold font-mono z-20">
                      FEATURED
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-black leading-tight">{project.title}</h4>
                    <span className="bg-teal border border-dark px-2 text-xs font-bold font-mono flex-shrink-0">
                      {Array.isArray(project.category) ? project.category.join(", ") : project.category}
                    </span>
                  </div>
                  
                  <p className="text-dark/80 font-medium mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono font-bold bg-lavender/30 border border-dark px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto border-t-2 border-dark pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-dark py-2 font-bold hover:bg-dark hover:text-white transition-colors"
                      >
                        <Github size={18} /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-coral border-2 border-dark py-2 font-bold hover:bg-dark hover:text-white transition-colors"
                      >
                        <ExternalLink size={18} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length > 3 && !showAllMobile && (
          <div className="md:hidden flex justify-center mt-10">
            <button
              onClick={() => setShowAllMobile(true)}
              className="px-8 py-3 bg-white text-dark border-4 border-dark font-black uppercase shadow-[6px_6px_0px_0px_#1A1A2E] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
            >
              Lihat Lainnya
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
