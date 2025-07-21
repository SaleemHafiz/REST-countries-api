import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from "./components/Filter";
// import flag from "./assets/images/flagPak.svg";
const flag = new URL("./assets/images/flagPak.svg", import.meta.url).href;  
import "./App.css";
import CountriesList from "./components/CountriesList";
import { Outlet } from "react-router-dom";

export default function App() {
  


  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
