import React, { useState } from 'react';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import ContactWrap from './pages/Contact/ContactWrap';

const navItems = ['Home', 'About Us', 'Services', 'Commodity', 'Projects', 'Contact'];

function App() {
  const [activeNavItem, setActiveNavItem] = useState('Home');

  const handleNavChange = (item: string) => {
      setActiveNavItem(item);
  };

  const renderPage = () => {
    switch (activeNavItem) {
      case 'Home':
        return <Home onNavChange={handleNavChange} />;
      case 'About Us':
        return <AboutUs />;
      case 'Services':
        return <Services />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <ContactWrap />;
      default:
        return <Home onNavChange={handleNavChange} />;
    }
  };

  return (
    <>
        <Nav
          navItems={navItems}
          activeItem={activeNavItem}
          onNavChange={handleNavChange}
        />
        {renderPage()}
    </>
  );
}

export default App;
