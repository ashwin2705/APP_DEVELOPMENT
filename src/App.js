import React from 'react'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Browse from './Components/Browse';
import PaymentForm from './Components/PaymentForm';
export default function App() {
  return (
     <div>
    <Router>
       <Routes>
        <Route path='/' element={<RegisterForm/>}></Route>
        <Route path='/Login' element={<LoginForm/>}></Route>
        <Route path='/Register' element={<RegisterForm/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/Browse" element={<Browse />} /> 
        <Route path="/Payment" element={<PaymentForm />} /> 
       </Routes>
    </Router>
    {/* <RegisterForm/> */}
    {/* <Navbar/> */}
    </div>
  )
}


// import './App.css';

// import { useState } from 'react';
// import LoginForm from './Components/LoginForm';
// import RegisterForm from './Components/RegisterForm';

// const App = () =>
// {
//   const [isRegister,setIsRegister] = useState(true);
//   return(
//     <div id = 'appdiv'>
//       <button onClick={() => setIsRegister(!isRegister)}>
//         {isRegister ? 'Switch to Login' : 'Switch to Register'}
//       </button>
//       {!isRegister ? <LoginForm/> : <RegisterForm/>}
//     </div>
//   )
// }

// export default App;