import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Sections
import Sobre from './pages/Sobre';
import HomeDifferentials from './components/HomeDifferentials';
import HomeAreas from './components/HomeAreas';
import Blog from './pages/Blog';
import Biblioteca from './pages/Biblioteca';
import HomeContact from './components/HomeContact';

function App() {
  return (
    <div className="bg-dark min-h-screen font-sans selection:bg-gold selection:text-dark overflow-x-hidden flex flex-col">
      <Header />
      <div className="flex-grow">
        <Hero />
        <Sobre />
        <HomeDifferentials />
        <HomeAreas />
        <Blog />
        <Biblioteca />
        <HomeContact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
