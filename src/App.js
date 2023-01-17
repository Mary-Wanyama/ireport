import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile/profile";
import NewReport from "./NewReport/NewReport";
import Home from "./Components/Home/Home";
import MyPosts from "./Components/Home/my-posts";
import Maps from "./Components/maps";
import Register from "./Components/Register";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signupform from "./Components/Signupform";
import HomeAdmin from "./Components/Home/home-admin";
import NewAlert from "./NewReport/NewAlert";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/newreport" element={<NewReport />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/myposts" element={<MyPosts />} />
        <Route exact path="/map" element={<Maps />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin" element={<HomeAdmin />} />
        <Route exact path="/signup" element={<Signupform />} />
        <Route exact path="/newalert" element={<NewAlert />} />
      </Routes>
    </div>
  );
}

export default App;
