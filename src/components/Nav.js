import { NavLink, Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex justify-between bg-black text-white  px-[2vw]  sm:px-[10vw] py-5 items-center sticky top-0 ">
      <Link to="/RupeshPF" className="text-red-700 font-bold text-3xl">
        Rupesh.
      </Link>
      <div className="gap-4 flex">
        <NavLink
          className="cursor-pointer transition ease-in-out delay-1  hover:-translate-y-1 hover:scale-110 duration-300 "
          to="/RupeshPF"
        >
          Home
        </NavLink>
        <NavLink
          className="cursor-pointer transition ease-in-out delay-1  hover:-translate-y-1 hover:scale-110 duration-300 "
          to="/projects"
        >
          Projects
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
