import React from "react";
import NavBar from "../public/NavBar";
import Accordion from "./Accordian";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="px-4 py-2 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">WiFi implementation</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          Wi-Fi offers significant advantages such as remote accessibility, scalability, ease of use, and real-time updates, making it a favorable choice for enabling wireless communication within the system. While UART communication has its strengths, Wi-Fi complements it by providing flexibility and remote accessibility crucial for efficient and modern systems.
          </p>
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default About;
