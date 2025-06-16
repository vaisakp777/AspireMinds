import React, { useState,useEffect } from "react";
import "./Navbar.css";
import { useNavigate,useLocation } from "react-router-dom";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const navItems = [
    { text: "HOME", href: "" },
    { text: "ABOUT US", href: "about" },
    { text: "SERVICES", href: "services" },
    { text: "CONTACT", href: "contact" }
  ];

  const toggleMenu = () => {
    console.log("toggle menu");
    setIsMenuOpen(!isMenuOpen);
    console.log("isMenuopen",isMenuOpen);
  };
  console.log("Current Path:", currentPath);
  useEffect(()=>{
    setCurrentPath(()=>{
      const path=location.pathname.split("/") || "";
      navItems.forEach((item) => {
        if (item.href === path[1]) {
          setActiveItem(item.text);
          
        }
      });
     
    })

  })
  const handleNavClick = (text) => {
    setActiveItem(text);
    
    
  };

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          {/* Logo placeholder - replace with your logo */}
          <img src="../../images/Logo_final.jpg" alt="Logo" className="logo-placeholder"/>
        </div>

        <button 
          className={`hamburger`}
          onClick={()=>{{toggleMenu()};console.log(isMenuOpen)}}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeItem === item.text ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    navigate("/"+item.href, { replace: true });
                  }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;