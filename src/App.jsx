import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GenerateLeadsDasboard from "./pages/GenerateLeadsDasboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GenerateLeadsDasboard />} />
      </Routes>
    </Router>
  );
}

export default App;
