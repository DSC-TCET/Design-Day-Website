import "./App.css";
import Navbar from "./components/Navbar";
import Conduct from "./components/Conduct";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Venue from "./components/Venue";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Conduct />
      <Venue />
      <FAQ />
    </div>
  );
}

export default App;
