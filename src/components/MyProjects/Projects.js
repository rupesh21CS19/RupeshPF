import React from "react";
import Nav from "../Nav";
import Cards from "./Cards";
import Header from "./Header";
import data from "../../projectsData.json";
const Projects = () => {
  return (
    <>
      <Nav />
      <Header />
      <Cards data={data} />
    </>
  );
};

export default Projects;
