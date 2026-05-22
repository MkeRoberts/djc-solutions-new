import { motion } from "framer-motion";
import "./App.css";

import djcLogo from "./assets/djclogo.jpg";
import coreOpsLogo from "./assets/coreopslogo.jpg";
import djcCoreOps from "./assets/djcsolutionscoreop.jpg";

const services = [
  {
    title: "Personalized Automation Systems",
    text: "Custom automation technologies designed for industrial, commercial, and business applications — improving productivity, monitoring, and operational control.",
  },
  {
    title: "Personalized Business Dashboards",
    text: "Real-time operational dashboards built for your industry, providing actionable insights, data visualization, reporting, and performance tracking.",
  },
  {
    title: "Personalized Websites",
    text: "Modern, responsive, and scalable websites customized for businesses across all sectors, designed to enhance digital presence and customer engagement.",
  },
  {
    title: "AI Integration Solutions",
    text: "Advanced AI integration for automation systems and dashboards, enabling smarter decision-making, predictive monitoring, and intelligent workflow optimization.",
  },
];

export default function App() {
  return (
    <main className="site">
      <nav className="nav">
        <a href="#top" className="brand">
          <img src={djcLogo} alt="DJC Solutions Ltd." className="navLogo" />
        </a>
      </nav>

      <section id="top" className="hero">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="heroInner"
        >
          <img src={djcLogo} alt="DJC Solutions Ltd." className="heroLogo" />

          <p className="eyebrow">SYSTEM · AUTOMATION · INTELLIGENCE</p>

          <h1>Next-generation automation for modern business operations.</h1>

          <p className="heroText">
            DJC Solutions Ltd. develops automation technologies designed to
            improve operational efficiency, system reliability, and real-time
            visibility across all industries.
          </p>

          <div className="heroActions">
            <a href="#contact" className="button primary">
              Start a Project
            </a>

            <a href="#services" className="button secondary">
              View Services
            </a>
          </div>
        </motion.div>
      </section>

      <section id="method" className="split">
        <div>
          <p className="sectionLabel">Method</p>

          <h2>Customized technology systems built around each client.</h2>
        </div>

        <div>
          <p>
            We deliver customized technology solutions tailored to the unique
            needs of each client, combining advanced automation, intelligent
            dashboards, modern web platforms, and AI-powered integration
            capabilities.
          </p>

          <p>
            Our approach is focused on building practical systems that improve
            control, visibility, productivity, and long-term operational growth.
          </p>
        </div>
      </section>

      <section id="services" className="services">
        <p className="sectionLabel">Our Services</p>

        <h2>Digital infrastructure for operational clarity.</h2>

        <div className="serviceGrid">
          {services.map((service) => (
            <motion.article
              key={service.title}
              className="serviceCard"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="serviceBullet"></div>

              <div>
                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="brandSection">
        <img
          src={djcCoreOps}
          alt="DJC Solutions and CoreOps"
          className="brandImage"
        />
      </section>

      <section className="value">
        <p className="sectionLabel">Value</p>

        <h2>Efficiency, visibility, reliability, and smarter decisions.</h2>

        <div className="valueGrid">
          <div>
            <h3>Operational Efficiency</h3>

            <p>Reduce manual work, repetitive tasks, and process delays.</p>
          </div>

          <div>
            <h3>Real-Time Visibility</h3>

            <p>Track performance, reporting, and operations from one place.</p>
          </div>

          <div>
            <h3>AI-Driven Growth</h3>

            <p>Use intelligent systems to support better decisions at scale.</p>
          </div>
        </div>
      </section>

      <section id="mission" className="mission">
        <div className="missionLogoWrap">
          <img src={djcLogo} alt="DJC Solutions Ltd." className="missionLogo" />
        </div>

        <p className="sectionLabel">Our Mission</p>

        <h2>
          To help businesses modernize operations through intelligent
          automation, customized digital solutions, and AI-driven technologies
          that increase efficiency, visibility, and long-term growth.
        </h2>
      </section>

      <a
        href="https://www.coreopspro.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="coreopsLink"
      >
        <section className="coreopsSection">
          <img src={coreOpsLogo} alt="CoreOpsPro" className="coreopsLogo" />

          <div>
            <p className="sectionLabel">Partner Platform</p>

            <h2>CoreOpsPro</h2>

            <p>
              Intelligent automation systems designed to optimize and scale
              operational performance in real time.
            </p>

            <span className="visitLink">Visit CoreOpsPro →</span>
          </div>
        </section>
      </a>

      <section id="contact" className="contact">
        <div>
          <p className="sectionLabel">Contact</p>

          <h2>Build a smarter system for your business.</h2>
        </div>

        <form
          action="https://formsubmit.co/DJCSOLUTIONS@outlook.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New DJC Solutions Website Message"
          />

          <input type="hidden" name="_captcha" value="false" />

          <input
            name="name"
            placeholder="Name"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows="5"
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <div className="footerBrand">
          <img src={djcLogo} alt="DJC Solutions Ltd." />

          <p>DJC Solutions Ltd.</p>
        </div>

        <p>Automation · Dashboards · Websites · AI Integration</p>
      </footer>
    </main>
  );
}