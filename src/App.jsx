import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import React, { useState } from "react";
import Spinner from "./components/Spinner";
import Home from "./components/Home";
import Hoc from "./components/Hoc";
import LazyClassic from "./components/ClassicMovies";
import LazyMovieDetail from "./pages/MovieDetail";
import LazyNews from "./pages/NewsDisplay";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import FavoriteMovies from "./components/FavoriteMovies";
import ContactUs from "./pages/ContactUs";
import { ThemeProvider } from "./Context/ThemeContext";
import WithAuth from "./Validations/WithAuth";
import Admin from "./components/layouts/Admin";
import Dashboard from "./pages/Admin/Dashboard";
import Admincontact from "./pages/Admin/Admincontact";
import Adminservice from "./pages/Admin/Adminservice";
import Profile from "./pages/Admin/Adminpages/Profile";
import Page404 from "./pages/Admin/Page404";
import Settings from "./pages/Admin/Adminpages/Settings";
import Pricing from "./pages/Admin/Adminpages/Pricing";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import HomeDataLoader from "./pages/HomeDataLoader";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Outlet />} loader={HomeDataLoader}>
          <Route
            index
            element={
              <WithAuth>
                <Home />
              </WithAuth>
            }
          />
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
        <Route path="/admin" element={<Admin />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="pages">
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="404" element={<Page404 />} />
          </Route>
          <Route path="contact" element={<Admincontact />} />
          <Route path="services" element={<Adminservice />} />
        </Route>
      </>
    )
  );

  return (
    <ThemeProvider value={{ themeMode, toggleTheme }}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
