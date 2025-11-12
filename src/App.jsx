import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FlashCards from "./pages/FlashCards";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <main className="px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashcards" element={<FlashCards />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
