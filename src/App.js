import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile/profile";
import NewReport from "./NewReport/NewReport";
import Home from "./Components/Home/Home";
import MyPosts from "./Components/Home/my-posts";
import Maps from "./Components/maps";
import Register from "./Components/Register";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/newreport" element={<NewReport />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/myposts" element={<MyPosts />} />
        <Route exact path="/map" element={<Maps />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
