import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import gif from './gifHeader.gif';
import min1 from '../sidebar/minImages/img1min.jpg';
import min2 from '../sidebar/minImages/img2min.jpg';
import min3 from '../sidebar/minImages/img3min.jpg';

function topFunction(e) {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const Header = () => {
  return (

    <header class="fixed">
      <nav class="navbar fixed-top color-nav">
        <div class="row col-12 d-flex justify-content-center ">
          <div class="gif ">
            <button class=" gif-icon" onClick={e => topFunction(e)} type="button" >
              <img src={gif} class="gifImage" />
            </button>
          </div>
          <div id="mainnav" class="col-12 d-flex justify-content-end creditos">
            <ul class="menu">
              <li class="home">
                <a class="creditos">imagens usadas</a>
                <ul class="submenuteste creditos">
                  <li><a href="https://www.behance.net/gallery/170975077/Monster-Energy?tracking_source=search_projects|monster+energy"><img src={min1} style={{ zIndex: -1 }} /></a></li>
                  <li><a href="https://www.behance.net/gallery/56461915/Monster-Energy"><img src={min2} style={{ zIndex: -1 }} /></a></li>
                  <li><a href="https://www.behance.net/gallery/165913003/Monster-Energy?tracking_source=search_projects|monster+energy"><img src={min3} style={{ zIndex: -1 }} /></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Header