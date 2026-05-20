import { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home
        className={"home" + theme == "light" ? "home-light" : "home-dark"}
      />
    </ThemeContext.Provider>
  );
}

/* 
Provider

👉 comparte datos

value = datos globales

*/

function Home() {
  return <Card />;
}

function Card() {
  return <Boton />;
}

function Boton() {
  const { theme, setTheme } = useContext(ThemeContext);

  function cambiarTema() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return <button onClick={cambiarTema}>Tema actual: {theme}</button>;
}
