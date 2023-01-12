import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile/profile';
import NewReport from './NewReport/NewReport';

function App() {
  return (
    <div className="App">
    <Routes>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/newreport" element={<NewReport />} />
      </Routes>
        {/* <Profile/> */}
        {/* <NewReport/> */}
    </div>
  );
}

export default App;
