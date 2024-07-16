import './App.css';
import DashboardComponent from './DashbordComponent';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  console.log(user)
  return (
    <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<LoginComponent setUser={setUser} />} />
       <Route exact path="/signup" element={<SignupComponent />} />
       <Route exact path="/dashboard" element={<DashboardComponent />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
