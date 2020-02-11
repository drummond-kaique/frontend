import React from "react";

import "./index.css";

const Header = (props) => (
  <header className="header-two-bars">
    <div className="header-first-bar">
      <div className="header-limiter">
        <h1>
          <a href="/">
            My<span>App</span>
          </a>
        </h1>

        <a href="/" className="logout-button">
          Logout
        </a>
      </div>
    </div>

    <div className="header-second-bar">
      <div className="nav-options" onClick={props.workOfArt}>
        <span className="nav-text">Obras</span>
      </div>
      <div className="nav-options" onClick={props.autor}>
        <span className="nav-text">Autores</span>
      </div>
      <div className="nav-options" onClick={props.workOfArtForm}>
        <span className="nav-text">Cadastro de Obras</span>
      </div>
      <div className="nav-options" onClick={props.autorForm}>
        <span className="nav-text">Cadastro de Autores</span>
      </div>
    </div>
  </header>
);

export default Header;
