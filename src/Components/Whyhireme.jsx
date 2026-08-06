import { motion } from "framer-motion";
import "./WhyHireMe.css";

const stats = [
  {
    number: "3+",
    title: "Years Experience",
    text: "Building modern WordPress websites and digital solutions."
  },
  {
    number: "20+",
    title: "Web Projects",
    text: "Websites created for businesses and personal brands."
  },
  {
    number: "3+",
    title: "Core Skills",
    text: "WordPress, Elementor Pro, WooCommerce & UI Design, Figma, Adobe PSD,"
  },
  {
    number: "UAE",
    title: "Available",
    text: "Open for full-time roles and freelance opportunities."
  }
];


const WhyHireMe = () => {
  return (
    <section className="why-section">

      {/* HEADER */}
      <motion.div
        className="why-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once:true }}
        transition={{ duration:0.7 }}
      >

        <span className="section-tag">
          WHY HIRE ME
        </span>

        <h2>
          Building Digital Experiences
          <span> That Create Results</span>
        </h2>

        <p>
          I don't just design websites. I create fast, responsive,
          and conversion-focused digital experiences that help businesses
          improve their online presence.
        </p>

      </motion.div>



      {/* STATS CARDS */}

      <div className="stats-grid">

        {stats.map((item,index)=>(

          <motion.div
            className="stat-card"
            key={index}
            initial={{
              opacity:0,
              y:50
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            viewport={{once:true}}
            transition={{
              delay:index * 0.15
            }}
            whileHover={{
              y:-8
            }}
          >

            <h3>
              {item.number}
            </h3>

            <h4>
              {item.title}
            </h4>

            <p>
              {item.text}
            </p>


          </motion.div>

        ))}

      </div>



      {/* SKILLS BADGES */}

      <motion.div
        className="skill-badges"
        initial={{
          opacity:0
        }}
        whileInView={{
          opacity:1
        }}
        viewport={{once:true}}
      >

        <span>
          WordPress Expert
        </span>

        <span>
          Elementor Pro
        </span>

        <span>
          WooCommerce
        </span>

        <span>
          UI/UX Design
        </span>

        <span>
          Performance Optimization
        </span>


      </motion.div>


    </section>
  );
};


export default WhyHireMe;