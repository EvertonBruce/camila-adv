import './App.css';
import {
  Route,
  HashRouter,
  Routes
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import AreaAtuacao from'./components/areas-atuacao/AreaAtuacao';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AreaAtuacao />
    </>
  );
}

export default App;
