import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/landing/navbar";
import Hero from "./components/landing/hero";
import Feature from "./components/landing/feature";
import Works from "./components/landing/works";
import CTA from "./components/landing/cta";
import Footer from "./components/landing/footer";
import About from "./components/about/about";
import SignUp from "./components/auth/signup";
import SignIn from "./components/auth/login";

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Feature />
      <Works />
      <CTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
