import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Destination } from "./Pages/Destination";
import { Crew } from "./Pages/Crew";
import { Technology } from "./Pages/Technology";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/destination"
          element={<Destination></Destination>}
        ></Route>
        <Route path="/crew" element={<Crew></Crew>}></Route>
        <Route path="/technology" element={<Technology></Technology>}></Route>
      </Routes>
    </>
  );
}

export default App;
