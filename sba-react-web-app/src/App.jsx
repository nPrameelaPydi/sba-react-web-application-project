import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import QuizPage from "./components/QuizPage.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import Nav from "./components/Nav.jsx";
import CarouselComponent from "./components/Carousel.jsx";

import TestApi from "./TestApi";

function App() {
  return (
    <div>
      <Nav />
      <div>
        <h1>Welcome to TriviaVerse</h1>
        <div className="carousel-container">
          <CarouselComponent />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
      </Routes>
    </div>
  );
}

export default App;
