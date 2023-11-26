import React from "react";
import Nav from "../Nav";
import Cards from "./Cards";
import Header from "./Header";
import data from "./projectsData.json";
import Footer from "../Footer";
const Projects = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Cards data={data} />
      <Footer />
    </div>
  );
};

export default Projects;
