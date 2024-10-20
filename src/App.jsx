import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import UserService from "./pages/UserService";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserService />} />
      </Routes>
       
    </BrowserRouter>
      
    
  )
}

export default App
