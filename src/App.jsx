import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import UserService from "./pages/UserService";
import BookService from "./pages/BookService";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserService />} />
        <Route path="/books" element={<BookService />} />
      </Routes>
       
    </BrowserRouter>
      
    
  )
}

export default App
