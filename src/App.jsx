import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home";
// import ActionMovies from "./components/ActionMovies";
// import TVShows from "./components/ClassicMovies";
// import MovieDetail from "./pages/MovieDetail";
// import NewsDisplay from "./pages/NewsDisplay";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Spinner from "./components/Spinner";
// import { useDispatch, useSelector } from "react-redux";
// const LazyAction = React.lazy(() => import("./components/ActionMovies"));
const LazyClassic = React.lazy(() => import("./components/ClassicMovies"));
const LazyMovieDetail = React.lazy(() => import("./pages/MovieDetail"));
const LazyNews = React.lazy(() => import("./pages/NewsDisplay"));
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import FavoriteMovies from "./components/FavoriteMovies";
import ContactUs from "./pages/ContactUs";
import { ThemeProvider } from "./Context/ThemeContext";
import Hoc from "./components/Hoc";
import WithAuth from "./Validations/WithAuth";
import Footer from "./components/Footer";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {


  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeProvider value={{ themeMode, toggleTheme }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route
                index
                element={
                  <WithAuth>
                    <Home />
                  </WithAuth>
                }
              />
              {/* <Route
              path="/action-movies"
              element={
                <React.Suspense fallback={<Spinner />}>
                  <LazyAction />
                </React.Suspense>
              }
            /> */}
              <Route path="/action-movies" element={<Hoc />} />
              <Route
                path="/tv-shows"
                element={
                  <React.Suspense fallback={<Spinner />}>
                    <LazyClassic />
                  </React.Suspense>
                }
              />
              <Route path="/favorites" element={<FavoriteMovies />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route
                path="/news"
                element={
                  <React.Suspense fallback={<Spinner />}>
                    <LazyNews />
                  </React.Suspense>
                }
              />
              <Route
                path="/movie/:imdbID"
                element={
                  <React.Suspense fallback={<Spinner />}>
                    <LazyMovieDetail />
                  </React.Suspense>
                }
              />
              <Route
                path="/login"
                element={
                  <React.Suspense fallback={<Spinner />}>
                    <Login />
                  </React.Suspense>
                }
              />
              <Route
                path="/signup"
                element={
                  <React.Suspense fallback={<Spinner />}>
                    <Signup />
                  </React.Suspense>
                }
              />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
      <Footer />
    </>
  );
}

export default App;
