import { AiOutlineClose } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { BiSolidNews, BiSolidSearch } from "react-icons/bi";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { theme, ToggleTheme, isActive, active, search, SearchData } =
    useGlobalContext();

  const Menus = [
    {
      icon: <BiSolidSearch />,
      name: "All",
      link: "/",
    },
    {
      icon: <BiSolidNews />,
      name: "News",
      link: "News",
    },
    {
      icon: <BsImages />,
      name: "Images",
      link: "Images",
    },
    {
      icon: <FaVideo />,
      name: "Videos",
      link: "Videos",
    },
  ];

  return (
    <nav className="bg-slate-300 mb-2">
      <div className="flex justify-between p-2 items-start">
        <div className="flex gap-1 bg-blue text-white rounded p-1 text-sm items-center">
          <span>Goggle</span>{" "}
          <span>
            <BiSolidSearch />
          </span>
        </div>
        <div className="flex flex-col gap-3 text-sm ">
          <div className="relative w-full">
            <input
              type="text"
              value={search}
              onChange={(e) => SearchData(e.target.value)}
              className="bg-white shadow-box rounded-full w-full border-none outline-none px-2 py-1 text-sm"
            />
            <span className="absolute right-1 text-sm top-1/2 -translate-y-1/2 ">
              <AiOutlineClose />
            </span>
          </div>
          <div className="flex gap-3">
            {Menus.map((item, index) => {
              return (
                <NavLink
                  to={`${item.link}`}
                  onClick={() => isActive(index)}
                  key={index}
                  className={`flex items-center gap-1 py-1 duration-100 ${
                    active === index &&
                    "-mt-2  border-b-2 border-blue border-solid"
                  } `}
                >
                  <span className="text-text">{item.icon}</span>
                  <span className="text-text">{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div onClick={ToggleTheme}>
          <div className="flex gap-1 select-none cursor-pointer text-sm justify-center items-center bg-white shadow-box w-[70px] rounded-full">
            <span>
              {theme === "dark" ? <MdDarkMode /> : <MdOutlineLightMode />}
            </span>
            <span>{theme === "dark" ? "Dark" : "Light"}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
