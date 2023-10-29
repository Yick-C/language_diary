import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Auth } from "./pages/auth";
import { DiaryEntries } from './pages/diary-entries';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diaryEntries" element={<DiaryEntries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
