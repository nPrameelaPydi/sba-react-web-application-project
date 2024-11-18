import React from "react";
import { Link } from "react-router-dom";
import CarouselComponent from "../components/Carousel.jsx";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Welcome to TriviaVerse</h1>
        <div className="carousel-container">
          <CarouselComponent />
        </div>
      </div>

      <div className="homepage" style={{ marginBottom: "5rem" }}>
        <h1>TriviaVerse</h1>
        <p>
          Welcome to the ultimate trivia experience! Test your knowledge of Rick
          and Morty characters and episodes.
        </p>
        <Link to="/quiz">
          <button>Start Trivia</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
