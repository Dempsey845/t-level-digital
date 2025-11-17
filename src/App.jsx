import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FlashCards from "./pages/FlashCards";
import Navbar from "./components/Navbar/Navbar";
import ProblemSolving from "./pages/ProblemSolving";
import Programming from "./pages/Programming";
import EmergingIssues from "./pages/EmergingIssues";
import Legislation from "./pages/Legislation";
import BusinessContext from "./pages/BusinessContext";
import Data from "./pages/Data";
import DigitalEnvironments from "./pages/DigitalEnvironments";
import Security from "./pages/Security";
import TopicDetail from "./pages/TopicDetails";
import FlashCardPlay from "./pages/FlashCardPlay";
import RevisionComputationalThinking from "./components/Revision/RevisionComputationalThinking";

function App() {
  return (
    <Router>
      <Navbar />

      <main className="px-2 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashcards" element={<FlashCards />} />
          <Route path="/flashcards/play" element={<FlashCardPlay />} />
          <Route path="/areas/problem-solving" element={<ProblemSolving />} />
          <Route path="/areas/programming" element={<Programming />} />
          <Route path="/areas/emerging-issues" element={<EmergingIssues />} />
          <Route path="/areas/legislation" element={<Legislation />} />
          <Route path="/areas/business-context" element={<BusinessContext />} />
          <Route path="/areas/data" element={<Data />} />
          <Route
            path="/areas/digital-environments"
            element={<DigitalEnvironments />}
          />
          <Route path="/areas/security" element={<Security />} />
          <Route path="/topics/:id" element={<TopicDetail />} />
          <Route
            path="/outcomes/1.1"
            element={<RevisionComputationalThinking />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
