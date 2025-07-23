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
  // const isDark = localStorage.getItem("isDark") === "true";
  const [isDark, setIsDark] = useState(()=> localStorage.getItem("isDark") === "true")
  console.log(`App is rerendering with dark mode ${isDark}`);
  
  // if (isDark) {
  //   document.body.classList.add("dark");
  // }

  function applyDarkMode() {
    setIsDark(!isDark)
    localStorage.setItem("isDark", isDark);
    console.log('applyDarkMode is running');
  }

  return (
    <div className={isDark? 'dark': 'light'}>
      <Header applyDarkMode={applyDarkMode}/>
      <Outlet />
    </div>
  );
}
