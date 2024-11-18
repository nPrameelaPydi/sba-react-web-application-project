import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import QuizPage from "./components/QuizPage.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import Nav from "./components/Nav.jsx";

import TestApi from "./TestApi";

function App() {
  return (
    //<div>
    //  <TestApi />
    //</div>

    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/quiz" element={<QuizPage />}></Route>
        <Route path="/scoreboard" element={<Scoreboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
