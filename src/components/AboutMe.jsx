import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SocialIcons } from "./SocialIcons";
import about from "../assets/img/profile.jpg";
import Cv from "../assets/CV.pdf";

export const AboutMe = ({ name, email,location, availability, brand }) => {
  
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="About-container">
      <div className="Wrapper">
        <motion.div
          className="About-img"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={about} alt={name} />
        </motion.div>
        <motion.div
          className="About-montion"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="About-content">
            <h4 className="About-h4">Nice to meet you</h4>
            <h5 className="About-h5">I'm Frontend Web Developer!</h5>
            <div className="About-description">
              <p className="About-brand">{brand}</p>
            </div>
            <div className="About-profile">
              <div className="About-containt">
                <div className="About-info">
                  <span className="About-span">Name: </span>
                  <p className="About-p">Giancarlo Sanchez</p>
                </div>
                <div className="About-info">
                  <span className="About-span">Email: </span>
                  <p className="About-p">
                    <a className="About-email" href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="About-containt">
                <div className="About-info">
                  <span className="About-span">Location: </span>
                  <p className="About-p">{location}</p>
                </div>
                <div className="About-info">
                  <span className="About-span">Availability: </span>
                  <p className="About-p">{availability}</p>
                </div>
              </div>
            </div>
            <div className="About-button">
              <a href={Cv} className="About-download" download="Cv">Download Cv</a>
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
