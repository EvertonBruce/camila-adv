import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import AreaAtuacao from './components/areas-atuacao/AreaAtuacao';
import Contato from './components/contato/Contato'
import Wpp from './components/wpp-button/WppButton'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AreaAtuacao />
      <Contato />
      <Wpp />
    </>
  );
}

export default App;
