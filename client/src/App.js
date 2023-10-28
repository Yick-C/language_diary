import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import { Home } from "./pages/home";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
