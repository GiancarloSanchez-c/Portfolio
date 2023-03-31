import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SocialIcons } from "../components";

export const Home = ({ name, tagline }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="Home">
      <div className="Wrapper">
        <div className="Home-name">
          <motion.h1
            className="Home-h1"
            ref={ref}
            initial={{ y: "-10vw", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {name}
          </motion.h1>
          <motion.p
            className="Home-description"
            ref={ref}
            initial={{ y: "10vw", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {tagline}
          </motion.p>
        </div>
        <SocialIcons />
      </div>
    </section>
  );
};
