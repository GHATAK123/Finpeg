import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Searchbox from "./Components/Searchbox";
import ShowInvestment from "./Components/ShowInvestment";

function App() {
  return (
    <>
      <Navbar/>
      <Searchbox />
      
      <ShowInvestment />
      <br/>
      <Footer />
    </>
  );
}

export default App;
