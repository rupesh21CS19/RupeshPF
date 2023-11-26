const HeroSection = () => {
  return (
    <>
      <div className="text-white flex my-20 justify-center items-center gap-4 flex-wrap  px-3 ">
        <div className=" ">
          <img
            className="rounded-full w-40vw]"
            src="images/ei_1700909229899-removebg-preview.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-red-700 my-4 text-lg ">
            Hello, I'm Rupesh Kumar
          </h2>
          <h1 className="text-4xl font-bold my-4  ">Frontend Developer</h1>
          <p>
            Front-end developer specializing in React.js and Tailwind CSS,{" "}
            <br /> adept at crafting dynamic and responsive user interfaces.
          </p>
          <button className="bg-red-700 font-semibold border-2 border-solid border-red-700  py-3 px-6 my-4 rounded-md cursor-pointer transition ease-in-out delay-1  hover:-translate-y-1 hover:bg-white hover:text-red-700 hover:border-2 hover:border-solid hover:border-red-700 hover:scale-210   duration-300">
            About Me
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
