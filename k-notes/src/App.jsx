import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
