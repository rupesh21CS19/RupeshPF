import { FaGithub, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
const Cards = ({ data }) => {
  return (
    <div className="text-white card-container sm:w-[80%] px-4  sm:m-auto flex justify-between flex-wrap">
      {
        //
        data &&
          data.map((e) => {
            console.log(e.img);
            return (
              <div
                key={e.id}
                className=" text-xl  sm:w-[400px]   overflow-hidden shadow-lg  "
              >
                <div className="flex items-center justify-between  mt-6 my-2  border-t-2 border-b-2 border-red-700 py-1">
                  <div>
                    <h4>PROJECT {e.id}</h4>
                  </div>
                  <div className="flex text-red-700 gap-3 ">
                    <Link to={e.github}>
                      <FaGithub className="cursor-pointer transition ease-in-out delay-1  hover:-translate-y-1 hover:scale-150   duration-300" />
                    </Link>

                    <Link to={e.link}>
                      <FaGlobe className="cursor-pointer transition ease-in-out delay-1  hover:-translate-y-1 hover:scale-210   duration-300" />
                    </Link>
                  </div>
                </div>
                <div className="text-sm">{e.description}</div>
                <div className="my-3 mt-4   ">
                  <img
                    className="cursor-pointer transition ease-in-out delay-1 rounded-xl hover:scale-110 duration-300  shadow-md shadow-red-700/50 "
                    src={require(`${e.img}`)}
                    alt="e"
                  />
                </div>
              </div>
            );
          })
      }
    </div>
  );
};

export default Cards;
