import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import TranslatePage from "./pages/TranslatePage";
import RandomStringPage from "./pages/RandomStringPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translate" element={<TranslatePage />} />
        <Route path="/random" element={<RandomStringPage />} />
      </Routes>
    </Router>
  );
}

export default App;
