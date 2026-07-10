import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCar from "./components/AddCar";
import ViewAll from "./components/ViewAll";
import SearchCar from "./components/SearchCar";
import DeleteCar from "./components/DeleteCar";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AddCar />} />
          <Route path="/add" element={<AddCar />} />
          <Route path="/all" element={<ViewAll />} />
          <Route path="/view-all" element={<ViewAll />} />  
          <Route path="/search" element={<SearchCar />} />
          <Route path="/delete" element={<DeleteCar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
