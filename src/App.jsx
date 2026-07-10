import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCar from "./components/AddCar";
import ViewAll from "./components/ViewAll";
import SearchCar from "./components/SearchCar";
import DeleteCar from "./components/DeleteCar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app-shell">
      <BrowserRouter>
        <NavBar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<AddCar />} />
            <Route path="/add" element={<AddCar />} />
            <Route path="/all" element={<ViewAll />} />
            <Route path="/view-all" element={<ViewAll />} />
            <Route path="/search" element={<SearchCar />} />
            <Route path="/delete" element={<DeleteCar />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
