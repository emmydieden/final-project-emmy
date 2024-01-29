// Entry point of the React application using React Router for navigation

import "./App.css";

import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";

import { Header } from "./components/header/Header";
import { NavbarVertical} from "./components/navbarVertical/NavbarVertical"
import { Footer } from "./components/footer/Footer";
import { recipeStore } from "./stores/recipeStore";


export const App = () => {
  const { hamburgerOpen, setHamburgerOpen} = recipeStore();
  return (
    <>
      <BrowserRouter>
        <main>
          <Header />
        {  hamburgerOpen && <NavbarVertical/>}
          <Routes>{routes}</Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
};
