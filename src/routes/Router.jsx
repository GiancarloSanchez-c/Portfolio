import { Routes, Route, useLocation } from "react-router-dom";
import { About, Contact, Home, Portfolio } from "../pages";

export const Router = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}
            email={personalDetails.email}
            availability={personalDetails.availability}
            location={personalDetails.location}
            brand={personalDetails.brand}
          />
        }
      />

      <Route path="/" element={<Home name={personalDetails.name} tagline={personalDetails.tagline} />} />
      <Route path="/contact" element={<Contact name={personalDetails.name} email={personalDetails.email} location={personalDetails.location} />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};
