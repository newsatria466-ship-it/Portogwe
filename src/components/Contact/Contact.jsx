import { motion } from "framer-motion";
import { contactInfo } from "../../constants/data";
import SectionTitle from "../ui/SectionTitle";

const Contact = () => {
  const whatsappNumber = contactInfo.phone.replace(/[-+ ]/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const emailLink = `mailto:${contactInfo.email}`;
  const linkedinInfo = contactInfo.socials.find(s => s.name === "LinkedIn");
  const linkedinLink = linkedinInfo ? linkedinInfo.url : "#";

  return (
    <section id="contact" className="py-24 px-6 border-y-2 border-dark bg-yellow/20">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="GET IN TOUCH" subtitle="Let's build something awesome together" accent="yellow" />

        <div className="mt-12 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 sm:p-12 border-2 border-dark shadow-brutal-lg flex flex-col justify-center text-center">
              <h3 className="text-4xl font-black mb-4 uppercase">LET'S TALK!</h3>
              <p className="text-lg font-medium text-dark/80 mb-10">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me via any of these platforms!
              </p>
              
              <div className="grid gap-6">
                <a 
                  href={emailLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-4 text-lg sm:text-xl font-bold border-2 border-dark p-4 bg-teal hover:-translate-y-1 hover:shadow-brutal transition-all group"
                >
                  <span className="bg-white p-2 border-2 border-dark shrink-0 text-2xl group-hover:scale-110 transition-transform">📧</span>
                  <span className="truncate">Email Me</span>
                </a>
                
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-4 text-lg sm:text-xl font-bold border-2 border-dark p-4 bg-pink hover:-translate-y-1 hover:shadow-brutal transition-all group"
                >
                  <span className="bg-white p-2 border-2 border-dark shrink-0 text-2xl group-hover:scale-110 transition-transform">💬</span>
                  <span className="truncate">WhatsApp</span>
                </a>

                <a 
                  href={linkedinLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-4 text-lg sm:text-xl font-bold border-2 border-dark p-4 bg-lavender hover:-translate-y-1 hover:shadow-brutal transition-all group"
                >
                  <span className="bg-white p-2 border-2 border-dark shrink-0 text-2xl group-hover:scale-110 transition-transform">💼</span>
                  <span className="truncate">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
