import React from 'react';
import "./style.css"
import logo from './logo.png';
// import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <div class="d-flex justify-content-center">
            <a class="nav-link" href="#">Politique de confidentialité  &copy; 2023-2024 Tous droits réservés</a>
            {/* <a class="nav-link">&copy; 2023-2024 Tous droits réservés</a> */}
          </div>
        </li>
      </ul>
    </nav>


    //     <div class="container">
    //   <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    //     <div class="col-md-4 d-flex align-items-center">
    //       <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
    //         <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
    //       </a>
    //       <span class="text-muted">&copy; 2021 Company, Inc</span>
    //     </div>

    //     <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
    //       <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
    //       <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
    //       <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
    //     </ul>
    //   </footer>
    // </div>
  );
}

export default Footer;