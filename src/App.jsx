import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Destination } from "./Pages/Destination";
import { Crew } from "./Pages/Crew";
import { Technology } from "./Pages/Technology";

function App() {
  return (
    <>
      <Home></Home>
      <Destination></Destination>
      <Crew></Crew>
      <Technology></Technology>
    </>
  );
}

export default App;
