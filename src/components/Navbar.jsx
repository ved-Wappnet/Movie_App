import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import moment from "moment";
import { ThemeContext } from "../Context/ThemeContext";
import useLanguage from "../customhooks/useLanguage";
import "../App.css";
import { useTranslation } from "react-i18next";
import { InputSwitch } from "primereact/inputswitch";
import { Badge } from "primereact/badge";
import { Dropdown } from "primereact/dropdown";
import { selectFavoritesCount } from "../Movie-Reducer/favoriteSlice";
import { useSelector } from "react-redux";
// import { GoogleLogin } from "@react-oauth/google";

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [currentTime, setCurrentTime] = useState("");
  const [language, setLanguage] = useState("en");

  const { themeMode, toggleTheme } = useContext(ThemeContext);
  const { changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const favoritesCount = useSelector(selectFavoritesCount);

  useEffect(() => {
    const updatedtime = setInterval(() => {
      setCurrentTime(moment().format("LTS"));
    }, 1000);
    return () => clearInterval(updatedtime);
  }, []);

  const onChangeTheme = () => {
    toggleTheme();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const languageOptions = [
    { label: t("English"), value: "en" },
    { label: t("French"), value: "fr" },
    { label: t("Hindi"), value: "hi" },
  ];

  return (
    <nav
      className={`p-4 fixed top-0 w-full z-10 ${
        themeMode === "dark"
          ? "bg-gray-700 text-white"
          : "bg-gray-700 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link
            to="/"
            className={`text-xl font-bold ${
              themeMode === "dark" ? "text-white" : "text-white"
            }`}
          >
            MovieApp
          </Link>
        </div>
        {/* <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        /> */}
        <div className="hidden md:block">
          <ul className="flex space-x-4 w-full ml-44">
            <li>
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "text-red-500" : "text-white"
                }
              >
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/action-movies"
                className={`${
                  location.pathname === "/action-movies"
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                {t("navbar.actionMovies")}
              </Link>
            </li>
            <li>
              <Link
                to="/tv-shows"
                className={`${
                  location.pathname === "/tv-shows"
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                {t("navbar.classicMovies")}
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className={`${
                  location.pathname === "/news" ? "text-red-500" : "text-white"
                }`}
              >
                {t("navbar.news")}
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className={`${
                  location.pathname.startsWith("/admin")
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                Admin
              </Link>
            </li>
            {isAuthenticated && (
              <li className="mt-[-4px]">
                <Link to="/favorites" className="text-white">
                  {t("navbar.favorites")}{" "}
                  <span>
                    {" "}
                    <i
                      className="pi pi-bell p-overlay-badge"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <Badge value={favoritesCount} severity={"danger"}></Badge>
                    </i>
                  </span>
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/contact"
                className={`${
                  location.pathname === "/contact"
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                {t("navbar.contact")}
              </Link>
            </li>

            <InputSwitch
              checked={themeMode === "dark"}
              onChange={onChangeTheme}
            />

            {/* <div>
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        onChange={onChangeTheme}
        checked={themeMode === "dark"}
      />
      <label
        htmlFor="toggle"
        className="flex items-center cursor-pointer"
      >
        <div className="relative w-10 h-6 bg-gray-400 rounded-full p-1 transition duration-300 ease-in-out">
          <div className={`toggleTrack${themeMode === "dark" ? "Check" : "X"}_dm8H absolute left-0 top-0 bottom-0 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center transition duration-300 ease-in-out`}>
            <span className="toggleIcon_pHJ9 text-white">{themeMode === "dark" ? "🌞" : "🌜"}</span>
          </div>
          <div className={`toggleTrack${themeMode === "dark" ? "X" : "Check"}_mk7D absolute right-0 top-0 bottom-0 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center transition duration-300 ease-in-out`}>
            <span className="toggleIcon_pHJ9 text-white">{themeMode === "dark" ? "🌜" : "🌞"}</span>
          </div>
          <div className="toggleTrackThumb_W6To absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
        </div>
      </label>
    </div> */}

            <div className="text-white bg-red-500 p-1 ml-2 text-sm">
              {currentTime}
            </div>
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <XIcon className="w-6 h-6 text-white" />
            ) : (
              <MenuIcon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
        <div className="md:block hidden">
          {isAuthenticated ? (
            <div className="relative">
              <img
                src={user.picture}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={handleProfileClick}
              />
              {showProfileMenu && (
                <ul
                  className={`absolute bg-${
                    themeMode === "dark" ? "white" : "white"
                  } py-2 shadow-md rounded-md mt-2 w-44 text-center ml-[-20px] ${
                    themeMode === "dark" ? "text-black" : "text-black"
                  }`}
                >
                  <li className="px-4 py-2 text-center">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                  </li>
                  <hr
                    className={`${
                      themeMode === "dark"
                        ? "border-gray-400"
                        : "border-gray-200"
                    }`}
                  />
                  <li
                    className={`hover:bg-${
                      themeMode === "dark" ? "gray-800" : "gray-200"
                    } px-4 py-2 cursor-pointer`}
                    onClick={handleLogout}
                  >
                    <button>
                      {themeMode === "dark" ? "Log Out" : "Log Out"}
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <button className="text-white" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          )}
        </div>
        <div className="md:block hidden">
          {/* <div className="relative">
            <button
              onClick={handleLanguageClick}
              className="bg-gray-800 text-white px-3 py-2 rounded-md hover:bg-gray-700"
            >
              {t("language")}
            </button>
            {showLanguageMenu && (
              <div className="absolute top-full right-0 bg-gray-700 w-36 mt-1 rounded-md shadow-lg">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block w-full px-4 py-2 text-left text-white hover:bg-gray-600"
                >
                  {t("english")}
                </button>
                <button
                  onClick={() => changeLanguage("fr")}
                  className="block w-full px-4 py-2 text-left text-white hover:bg-gray-600"
                >
                  {t("french")}
                </button>
                <button
                  onClick={() => changeLanguage("hi")}
                  className="block w-full px-4 py-2 text-left text-white hover:bg-gray-600"
                >
                  {t("hindi")}
                </button>
              </div>
            )}
          </div> */}
          <Dropdown
            value={language}
            options={languageOptions}
            onChange={(e) => {
              setLanguage(e.value);
              changeLanguage(e.value);
            }}
            optionLabel="label"
            placeholder={t("language")}
            className="bg-gray-300 text-white rounded-md hover:bg-gray-300"
          />
        </div>
      </div>

      {/* Mobile view */}
      {showMenu && (
        <div className="md:hidden absolute top-full right-0 bg-gray-700 w-full">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="/"
                className={`${
                  location.pathname === "/" ? "text-red-500" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/action-movies"
                className={`${
                  location.pathname === "/action-movies"
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                Action Movies
              </Link>
            </li>
            <li>
              <Link
                to="/tv-shows"
                className={`${
                  location.pathname === "/tv-shows"
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                Classic Movies
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className={`${
                  location.pathname === "/news" ? "text-red-500" : "text-white"
                }`}
              >
                News
              </Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link
                  to="/favorites"
                  className={`${
                    location.pathname === "/favorites"
                      ? "text-red-500"
                      : "text-white"
                  }`}
                >
                  Favorite Movies
                </Link>
              </li>
            )}
            {isAuthenticated ? (
              <li>
                <button className="text-white" onClick={handleLogout}>
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button
                  className="text-white"
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
