import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); //lo uso para el menu principalmente 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className="bg-gradient-to-b from-black to-secondary-1 text-primary-1 shadow"
      role="navigation"
    >
      <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-nowrap">
        {isMobile 
          ? <p>Soy el header MOBILE</p> 
          : <p>Soy el header WEB</p>
        }
      </div>
    </nav>
  );
};

export default Header;

