import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ContactInfo = ({name, email, location}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      className="Contact-container"
      ref={ref}
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h4 className="Contact-h4">Contact information</h4>
      <p className="Contact-p">Open for opportunities. Let's connect and build something awesome together!</p>
      <ul className="Contact-ul">
        <li className="Contact-li">
          <div className="Contact-info">
            <span className="Contact-i">
              <i className="Contact-icon bi bi-person-fill"></i>
            </span>
            <div className="Contact-text">
              <h6 className="Contact-h6">Name</h6>
              <span className="Contact-span">{name}</span>
            </div>
          </div>
        </li>
        <li className="Contact-li">
          <div className="Contact-info">
            <span className="Contact-i">
              <i className="Contact-icon bi bi-geo-alt-fill"></i>
            </span>
            <div className="Contact-text">
              <h6 className="Contact-h6">Location</h6>
              <span className="Contact-span">{location}</span>
            </div>
          </div>
        </li>
        <li className="Contact-li">
          <div className="Contact-info">
            <span className="Contact-i">
              <i className="Contact-icon bi bi-envelope-fill"></i>
            </span>
            <div className="Contact-text">
              <h6 className="Contact-h6">Email</h6>
              <span className="Contact-span email">{email}</span>
            </div>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};
