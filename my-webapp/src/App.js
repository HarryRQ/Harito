import React from 'react'
import Home from "./components/home/index"
import CV from './components/body/contact/CV/cv';
import { BrowserRouter as Router, Routes, Route, Redirect, Link, NavLink,} from "react-router-dom";

function App() {
  return (
    <div> 
    <Home/>
    <Router>
      <Routes>
      <Route path="/cv" element={<CV/>}/>
      </Routes>
    </Router>
    </div>

  )
}

export default App
