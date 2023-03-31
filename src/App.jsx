import { Header } from "./components";
import "./App.scss";
import { Router } from "./routes/Router";

export const App = () => {
  const personalDetails = {
    name: "Giancarlo Sanchez",
    location: "Lima, PE",
    tagline: "I'm FrontEnd Developer",
    email: "gian23080@gmail.com",
    availability: "Open for work",
    brand:
      "I'm Giancarlo, I'm' from Peru and I have a great passion for programming.I'm a junior programmer with a passion for web development and I'm excited to share my projects with you. In my portfolio, you will find examples of projects I have worked on. My main goal in my portfolio is to show my ability to build attractive and functional websites using HTML, CSS and JavaScript, as well as to demonstrate my ability to quickly learn new technologies and tools. In addition, I have worked on projects that involve the use of frameworks such as Bootstrap, React and Redux Toolkit.I have solid knowledge in. Javascript, HTML, CSS, React, Node Js, Express.js, Redux. I am also familiar with MySQL,Bootstrap, Tailwind, Git, and GitHub. My hobbies are traveling, seeing new places and living new experiences.",
  };

  return (
    <>
      <Header />
      <Router personalDetails={personalDetails} />
    </>
  );
};
