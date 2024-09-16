import React from 'react';
// import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';
import "./style.css"
import logo from './logo.png';

const Navbar = () => {
  return (
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
  <div class="container-fluid">
      <div>
          <a class="navbar-brand" href="/users"><img class="logo" src={logo} /></a>
      </div>
      <div><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button></div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link" href="/add">AddUser</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/possession">Possession</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="users/:id">ShowUser</a>
              </li>
          </ul>
          <a href="#"><button class="btn btn-outline-success" type="submit">Connexion</button></a>
          <a href="#"><button class="btn btn-outline-success" type="submit">Inscription</button></a>

      </div>
  </div>
</nav>

  );
}

export default Navbar;