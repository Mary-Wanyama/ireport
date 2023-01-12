
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile/profile';
import NewReport from './NewReport/NewReport';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
    <Routes>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/newreport" element={<NewReport />} />
          <Route exact path='/home' element={<Home />} />
      </Routes>
        {/* <Profile/> */}
        {/* <NewReport/> */}
 <Home/>
    </div>
  );
}

export default App;
