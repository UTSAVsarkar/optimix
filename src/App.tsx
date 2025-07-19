import React, { useState } from 'react';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact';

const navItems = ['Home', 'About Us', 'Services', 'Projects', 'Contact'];

function App() {
  const [activeNavItem, setActiveNavItem] = useState('Home');
  const [scrollToContact, setScrollToContact] = useState(false);

  const handleNavChange = (item: string) => {
    if (item === 'Contact') {
      setActiveNavItem('Home');
      setScrollToContact(false); // Reset trigger
      setTimeout(() => setScrollToContact(true), 0); // React will now detect change
    } else {
      setActiveNavItem(item);
      setScrollToContact(false);
    }
  };

  const renderPage = () => {
    switch (activeNavItem) {
      case 'Home':
        return <Home scrollToContact={scrollToContact} onNavChange={handleNavChange} />;
      case 'About Us':
        return <AboutUs />;
      case 'Services':
        return <Services />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
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
