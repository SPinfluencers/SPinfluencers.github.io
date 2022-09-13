import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo.png"
import { saveAs } from "file-saver";
import resume from '../Head/Sagar Pawar Resume.pdf'
 
const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })

  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1c510R8AVplgQ5YLwwUwwqm9N239J9fo3/view?usp=sharing",
      "Sagar Pawar Resume.pdf"
    );
  };

  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
          <h1>
              SAG<span>AR</span>
            </h1>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>Skills</a>
              </li>
              <li>
                <a href='#portfolio'>projects</a>
              </li>
              <li>
                <a href='#resume'>experience</a>
              </li>
              {/* <li>
                <a href='#clients'>clients</a>
              </li> */}
              {/* <li>
                <a href='#blog'>blog</a>
              </li> */}
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <button className='home-btn'><a href={resume} download>RESUME</a></button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
