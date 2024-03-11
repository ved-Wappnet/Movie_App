import { NavLink, useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdOutlineDesignServices, MdOutlineFileDownload } from "react-icons/md";
import { SiPowerpages } from "react-icons/si";
import { HiDocument } from "react-icons/hi2";
import { TbExchange } from "react-icons/tb";
import { useState } from "react";

const Sidebar = () => {
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
  const location = useLocation();

  const togglePagesMenu = () => {
    setPagesMenuOpen(!pagesMenuOpen);
  };

  return (
    <div className="bg-gray-600 text-gray-300 min-h-screen overflow-y-auto sidebar">
      <div className="containe mt-20 0 p-4">
        <h1 className="mx-3 my-3 font-medium text-2xl">Dash UI</h1>
        <nav>
          <ul className="flex flex-col">
            <li className="">
              <NavLink
                to="/admin/user"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-md hover:bg-gray-700 ${
                    isActive ? "text-red-400" : "text-white"
                  }`
                }
              >
                <IoMdHome className="mr-1" /> Dashboard
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to={"/admin/services"}
                // className="flex items-center p-2 rounded-md hover:bg-gray-700"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-md hover:bg-gray-700 ${
                    isActive ? "text-red-400" : "text-white"
                  }`
                }
              >
                <MdOutlineDesignServices className="mr-1" /> Layouts & Pages
              </NavLink>
              <ul className="flex flex-col">
                <li>
                  <button
                    onClick={togglePagesMenu}
                    className={`flex items-center w-full p-2 rounded-md hover:bg-gray-700 cursor-pointer ${
                      location.pathname.startsWith("/admin/pages")
                        ? "text-red-400"
                        : "text-white"
                    }`}
                  >
                    <SiPowerpages className="mr-1" /> Pages
                    <svg
                      className={`h-4 w-4 ml-2 transition-transform transform ${
                        pagesMenuOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <ul className={`sub-menu ${pagesMenuOpen ? "show" : ""}`}>
                    <li className="mt-2 ">
                      <NavLink
                        to={"/admin/pages/profile"}
                        // className="p-2 block w-full rounded-md hover:bg-gray-700"
                        className={({ isActive }) =>
                          `flex items-center p-2 rounded-md hover:bg-gray-700 ${
                            isActive ? "text-red-300" : "text-white"
                          }`
                        }
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li className="mt-2">
                      <NavLink
                        to={"/admin/pages/settings"}
                        // className="p-2  w-full rounded-md hover:bg-gray-700"
                        className={({ isActive }) =>
                          `flex items-center p-2 rounded-md hover:bg-gray-700 ${
                            isActive ? "text-red-400" : "text-white"
                          }`
                        }
                      >
                        Settings
                      </NavLink>
                    </li>

                    <li className="mt-2">
                      <NavLink
                        to={"/admin/pages/pricing"}
                        className={({ isActive }) =>
                          `flex items-center p-2 rounded-md hover:bg-gray-700 ${
                            isActive ? "text-red-400" : "text-white"
                          }`
                        }
                      >
                        Pricing
                      </NavLink>
                    </li>
                    <li className="mt-2">
                      <NavLink
                        to={"/admin/pages/404"}
                        className={({ isActive }) =>
                          `flex items-center p-2 rounded-md hover:bg-gray-700 ${
                            isActive ? "text-red-400" : "text-white"
                          }`
                        }
                      >
                        404 Error
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <div className="flex items-center  p-2 rounded-md text-gray-400">
                DOCUMMENTATION
              </div>
              <ul>
                <li>
                  <NavLink
                    to={"/admin/documentation/docs"}
                    className="flex items-center p-2 rounded-md hover:bg-gray-700"
                  >
                    <HiDocument className="mr-1" /> Docs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/admin/documentation/changelog"}
                    className="flex items-center p-2 rounded-md hover:bg-gray-700"
                  >
                    <TbExchange className="mr-1" />
                    Changelog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/admin/documentation/download"}
                    className="flex items-center p-2 rounded-md hover:bg-gray-700"
                  >
                    <MdOutlineFileDownload className="mr-1" />
                    Download
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
