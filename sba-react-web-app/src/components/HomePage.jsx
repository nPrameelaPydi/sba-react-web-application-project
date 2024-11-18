// /components/HomePage.js

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>TriviaVerse</h1>
      <p>
        Welcome to the ultimate trivia experience! Test your knowledge of Rick
        and Morty characters and episodes.
      </p>
      <Link to="/quiz">
        <button>Start Trivia</button>
      </Link>
    </div>
  );
};

export default HomePage;
