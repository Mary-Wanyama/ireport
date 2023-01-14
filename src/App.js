import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
// import Reports from "./components/Reports";
// import Contacts from "./components/Contacts";
// import Home from "./components/Home";
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
