import "./App.css";
import Navbar from "./components/Navbar";
import Conduct from "./components/Conduct";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Venue from "./components/Venue";
import Home from "./components/Home";
import Rules from "./components/Rules";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <div className='max-w-6xl mx-auto px-4'>
        <About />
        <Rules />
        <Conduct />
        <Venue />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
