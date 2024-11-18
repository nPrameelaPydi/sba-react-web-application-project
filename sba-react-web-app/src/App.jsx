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
    //<div>
    //  <TestApi />
    //</div>

    <div>
      <Nav></Nav>
      <div>
        <h1>Welcome to TriviaVerse</h1>
        <CarouselComponent />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/quiz" element={<QuizPage />}></Route>
        <Route path="/scoreboard" element={<Scoreboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
