import "./App.css";
import Navbar from "./components/landing/navbar";
import Hero from "./components/landing/hero";
import Feature from "./components/landing/feature";
import Works from "./components/landing/works";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Feature />
      <Works />
    </div>
  );
}

export default App;
