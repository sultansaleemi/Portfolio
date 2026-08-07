import { motion } from "framer-motion";

import {
    FaWordpress,
    FaPaintBrush,
    FaRocket,
    FaCode,
    FaCheckCircle,
    FaMapMarkerAlt
} from "react-icons/fa";

import "./About.css";

import profile from "../assets/sultan.png";


const skills = [
    "WordPress",
    "Elementor Pro",
    "WooCommerce",
    "React",
    "Laravel",
    "PHP",
    "JavaScript",
    "UI/UX",
    "Performance Optimization"
];


const journey = [
    {
        year: "2021",
        title: "Started Web Development",
        text: "Started building websites and mastering modern frontend technologies."
    },
    {
        year: "2023",
        title: "Professional WordPress Developer",
        text: "Delivered business websites, Elementor projects and custom solutions."
    },
    {
        year: "2026",
        title: "Open For UAE Opportunities",
        text: "Available to join companies looking for WordPress and frontend expertise."
    }
];



const particles = Array.from({ length: 25 });


const About = () => {


    return (

        <section className="about-page">


            {/* FLOATING PARTICLES */}

            <div className="particles">

                {
                    particles.map((_, i) => (

                        <span key={i}></span>

                    ))
                }

            </div>




            {/* HEADER */}


            <motion.div

                className="about-header"

                initial={{ opacity: 0, y: 50 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

            >


                <span>ABOUT SULTAN</span>


                <h1>

                    I create digital <span className="build">experiences that  </span>

                    <br />

                    
                        <span>help businesses grow.</span>
                  


                </h1>


                <p>

                    WordPress Developer specializing in Elementor Pro,
                    WooCommerce and custom website development.
                    Building fast, modern and conversion-focused websites.

                </p>


            </motion.div>







            {/* PROFILE */}


            <div className="about-profile">


                <motion.div

                    className="profile-glass"

                    initial={{ x: -80, opacity: 0 }}

                    whileInView={{ x: 0, opacity: 1 }}

                    viewport={{ once: true }}

                >


                    <div className="profile-image">

                        <img src={profile} alt="Sultan" />

                    </div>




                    <h2>

                        Sultan <span>Mehmood Saleemi</span>

                    </h2>



                    <p>
                        WordPress Developer
                    </p>




                    {/* UAE BADGE */}

                    <div className="uae-badge">

                        <FaMapMarkerAlt />

                        Currently Available in UAE 🇦🇪

                    </div>





                    <div className="profile-stats">


                        <div>

                            <h3>3+</h3>

                            <span>
                                Years Experience
                            </span>

                        </div>



                        <div>

                            <h3>20+</h3>

                            <span>
                                Websites
                            </span>

                        </div>



                        <div>

                            <h3>100%</h3>

                            <span>
                                Responsive
                            </span>

                        </div>


                    </div>



                </motion.div>







                <motion.div

                    className="story-glass"

                    initial={{ x: 80, opacity: 0 }}

                    whileInView={{ x: 0, opacity: 1 }}

                    viewport={{ once: true }}

                >


                    <h2>

                        My <span>Story</span>

                    </h2>


                    <p className="story-text">

                        I am a WordPress Developer specializing in building modern,
                        high-performance websites that combine <strong>creative design, speed,
                            and business objectives.</strong>

                        <br /><br />

                        With professional experience in <strong>WordPress, Elementor Pro,
                            WooCommerce, and custom development,</strong> I create responsive websites
                        that are visually engaging, easy to manage, and optimized for real business growth.

                        <br /><br />

                        I have experience converting <strong>Figma and PSD designs into
                            pixel-perfect WordPress websites</strong> while focusing on user experience,
                        performance optimization, and SEO best practices.

                        <br /><br />

                        My goal is simple — to help businesses establish a strong online presence
                        through websites that not only look professional but also attract customers,
                        generate leads, and deliver measurable results.

                    </p>

                </motion.div>



            </div>








            {/* EXPERTISE */}


            <section className="expertise">


                <h2>

                    What <span>I Bring</span>

                </h2>



                <div className="expertise-grid">



                    <div className="expert-card">

                        <FaWordpress />

                        <h3>
                            WordPress Specialist
                        </h3>

                        <p>
                            Custom websites, Elementor,
                            WooCommerce solutions.
                        </p>

                    </div>





                    <div className="expert-card">

                        <FaPaintBrush />

                        <h3>
                            Design Implementation
                        </h3>

                        <p>
                            Figma & PSD designs converted
                            into pixel-perfect websites.
                        </p>

                    </div>





                    <div className="expert-card">

                        <FaRocket />

                        <h3>
                            Performance Focused
                        </h3>

                        <p>
                            Fast loading websites built
                            for business growth.
                        </p>

                    </div>



                </div>


            </section>







            {/* SKILLS */}


            <section className="skills-area">


                <h2>
                    Technology <span>Stack</span>
                </h2>



                <div className="skills-wrapper">


                    {
                        skills.map(skill => (

                            <motion.div

                                className="skill-item"

                                key={skill}

                                whileHover={{
                                    scale: 1.08,
                                    y: -5
                                }}

                            >


                                <FaCode />

                                {skill}


                            </motion.div>

                        ))
                    }


                </div>



            </section>







            {/* WHY HIRE */}


            <section className="hire-area">


                <h2>

                    Why Companies <span>Hire Me</span>

                </h2>



                <div className="hire-list">


                    <div>
                        <FaCheckCircle />
                        Strong WordPress & Elementor Expertise
                    </div>


                    <div>
                        <FaCheckCircle />
                        Experience Building Business Websites
                    </div>


                    <div>
                        <FaCheckCircle />
                        Understanding Of UX & Conversion
                    </div>


                    <div>
                        <FaCheckCircle />
                        Ready For UAE Opportunities
                    </div>



                </div>


            </section>








            {/* JOURNEY */}


            <section className="journey">


                <h2>
                    Career <span>Journey</span>
                </h2>



                <div className="journey-wrapper">


                    {

                        journey.map((item, index) => (


                            <motion.div

                                className="journey-card"

                                key={index}

                                initial={{ opacity: 0, y: 40 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{
                                    delay: index * .2
                                }}

                            >


                                <span>
                                    {item.year}
                                </span>


                                <h3>
                                    {item.title}
                                </h3>


                                <p>
                                    {item.text}
                                </p>


                            </motion.div>


                        ))


                    }


                </div>



            </section>




        </section>


    )


}


export default About;