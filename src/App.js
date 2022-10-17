import './App.css';
import {
  Route,
  HashRouter,
  Routes
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
