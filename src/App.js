import './App.css';
import Boost from './components/boost/Boost';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Statistics from './components/statistics/Statistics';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
