import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
