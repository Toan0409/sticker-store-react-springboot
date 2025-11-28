import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/Home"
import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header />

      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center min-h-[852px]">
          <span className="text-2xl  font-primary text-primary dark:text-lighter">
            Loadings...
          </span>
        </div>
      ) : (<Outlet />)}
      <Footer />
    </>
  );
}

export default App
