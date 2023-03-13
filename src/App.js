import "./App.css";
import Navbar from "./components/Navbar";
import Conduct from "./components/Conduct";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Venue from "./components/Venue";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Conduct />
      <Venue />
      <FAQ />
    </div>
  );
}

export default App;
