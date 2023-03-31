import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Form = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <motion.form
      action="https://getform.io/f/e22e20fe-1898-472e-a835-bbc543983f37"
      method="POST"
      ref={ref}
      className="Form"
      initial={{ x: "-10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h4 className="Form-h4">Message Me</h4>
      <div className="Form-inputs" >
        <input type="text" className="Form-input " name="name" autoComplete="off" placeholder="Name" required />
        <input type="email" className="Form-input " name="email" autoComplete="off" placeholder="Email" required />

      </div>
      <div className="Form-group">
        <input type="text" className="Form-input" name="subject" autoComplete="off" placeholder="Subject" required />
      </div>
      <div className="Form-group">
        <textarea className="Form-input" name="message" placeholder="Message" autoComplete="off" required></textarea>
      </div>
      <div className="Form-submit">
        <button type="submit" className="Form-button">
          Send Message
        </button>
      </div>
    </motion.form>
  );
};
