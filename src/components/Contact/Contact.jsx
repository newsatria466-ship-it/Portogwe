import { motion } from "framer-motion";
import { contactInfo } from "../../constants/data";
import SectionTitle from "../ui/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 border-y-2 border-dark bg-yellow/20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="GET IN TOUCH" subtitle="Let's build something awesome together" accent="yellow" />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 border-2 border-dark shadow-brutal-lg h-full flex flex-col justify-center">
              <h3 className="text-4xl font-black mb-6">LET'S TALK!</h3>
              <p className="text-lg font-medium text-dark/80 mb-8">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-xl font-bold border-2 border-dark p-4 bg-teal">
                  <span className="bg-white p-2 border-2 border-dark">📧</span>
                  {contactInfo.email}
                </div>
                <div className="flex items-center gap-4 text-xl font-bold border-2 border-dark p-4 bg-pink">
                  <span className="bg-white p-2 border-2 border-dark">📱</span>
                  {contactInfo.phone}
                </div>
                <div className="flex items-center gap-4 text-xl font-bold border-2 border-dark p-4 bg-lavender">
                  <span className="bg-white p-2 border-2 border-dark">📍</span>
                  {contactInfo.location}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="bg-white p-8 border-2 border-dark shadow-brutal-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold font-mono mb-2 uppercase">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full p-4 border-2 border-dark bg-cream focus:bg-white focus:outline-none focus:ring-4 focus:ring-coral/20 transition-all font-medium"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold font-mono mb-2 uppercase">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full p-4 border-2 border-dark bg-cream focus:bg-white focus:outline-none focus:ring-4 focus:ring-coral/20 transition-all font-medium"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold font-mono mb-2 uppercase">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full p-4 border-2 border-dark bg-cream focus:bg-white focus:outline-none focus:ring-4 focus:ring-coral/20 transition-all font-medium resize-none"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-4 bg-coral text-dark font-black text-xl border-2 border-dark shadow-brutal hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
