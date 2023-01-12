
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import MyPosts from './Components/Home/my-posts';



function App() {
  return (
    <BrowserRouter>
        <Routes>
    <Route path="/Home" exact element={<Home />}/>
    <Route path="/MyPosts" exact element={<MyPosts />}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
