
import './App.css';
// import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/home/About'
import Contact from './pages/home/contact'
import Login from './pages/home/Login'
import Dashboard from './pages/Dashboard/dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/home/Signup';
import Users from './components/Users';
import Demo from './pages/home/Demo';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/demo" element={<Demo/>} />
          
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
