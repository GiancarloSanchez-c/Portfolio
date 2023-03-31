import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import close from "../assets/svg/close.svg";

export const Projects = ({ id, color, technologies, image, description, github, deployed, title }) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  Modal.setAppElement("#root");

  return (
    <motion.div
      ref={ref}
      className="Portfolio-container"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div style={{ backgroundColor: color }} className="Portfolio-card" onClick={handleOpenModal}>
        <div className="Portfolio-text">
          <p className="Portfolio-tech">
            <em>{technologies}</em>
          </p>
          <h3 className="Portfolio-title">{title}</h3>
          <span className="Portfolio-span">View Work &#8594;</span>
        </div>
        <div className="Portfolio-img">
          <img src={image} alt="Laptop displaying application" />
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        className="Portfolio-modal"
        style={{
          content: {
            backgroundColor: "#101010",
            color: "#9f9f9f",
            padding: "3.75rem",
            display: "flex",
            flexDirection: "column",
            width: "25rem",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            alignItems: "center",
            gap: "0.9375rem",
            zIndex: "999",
            position:"absolute"
          },
        }}
      >
        <img src={close} className="Portfolio-close" onClick={handleCloseModal} alt="Close"></img>
        <h3 className="Portfolio-title">{title}</h3>
        <p className="Portfolio-description">{description}</p>
        <button className="Portfolio-button" onClick={() => (window.location.href = github)}>
          Github Repo
        </button>
        <button className="Portfolio-button" onClick={() => (window.location.href = deployed)}>
          Live Link
        </button>
      </Modal>
    </motion.div>
  );
};
