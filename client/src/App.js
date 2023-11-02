import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { CreateEntry } from "./pages/CreateEntry";
import { DiaryEntries } from "./pages/DiaryEntries";
import { CalendarEntries } from "./pages/CalendarEntries";
import { CurrentEntry } from "./pages/CurrentEntry";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-entry" element={<CreateEntry />} />
          <Route path="/calendar" element={<CalendarEntries />} />
          <Route path="/diary-entries" element={<DiaryEntries />} />
          <Route path="/diary-entries/:id" element={<CurrentEntry/>} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
