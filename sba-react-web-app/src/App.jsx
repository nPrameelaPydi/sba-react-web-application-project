import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import QuizPage from "./components/QuizPage.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
