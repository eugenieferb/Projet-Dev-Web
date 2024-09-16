// import './styles/app.css';
// import { createRoot } from 'react-dom/client';
// import React from 'react';
// //import User from './react/controllers/User.jsx';
// import Hello from './react/controllers/Hello.jsx';
// const domNode = document.getElementById('root');
// const root = createRoot(domNode);
// root.render(<User />);
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import User from './react/controllers/User.jsx';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AddUser from './react/controllers/AddUser.jsx';
import UserDetails from './react/controllers/ShowUser.jsx';
import PossessionIndex from "./react/controllers/Possession.jsx";



function Main() {

  return (
      <Router>
        <div className="app">
            <Navbar />
          </div> 
          <div className="Route">
            <Routes>
              <Route path="users" element={<User/>} />
              <Route path="add" element={<AddUser/>} />
              <Route path="users/:id" element={<UserDetails/>} />
              <Route path="possession" element={<PossessionIndex/>} />
            </Routes>
          </div>
          <div className="footer">
          <Footer />
        </div>
      </Router>
  )
}

export default Main

if (document.getElementById('app')) {
    const rootElement = document.getElementById("app");
    const root = createRoot(rootElement);
 
    root.render(
        <StrictMode>
            <Main />
        </StrictMode>
    );
}