import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

// Sections
import Sobre from './pages/Sobre';
import HomeDifferentials from './components/HomeDifferentials';
import HomeAreas from './components/HomeAreas';

import Biblioteca from './pages/Biblioteca';
import HomeContact from './components/HomeContact';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Unmount the splash screen after the animation completes (2.2s delay + 0.8s duration)
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-dark min-h-screen font-sans selection:bg-gold selection:text-dark overflow-x-hidden flex flex-col">
      {showSplash && <SplashScreen />}
      
      <Header />
      <div className="flex-grow">
        <Hero />
        <Sobre />
        <HomeDifferentials />
        <HomeAreas />

        <Biblioteca />
        <HomeContact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
