// /components/QuizPage.js

import React, { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard.jsx";
import Timer from "./Timer";

const QuizPage = () => {
  const [question, setQuestion] = useState("");
  const [questionImage, setQuestionImage] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20); // Session timer
  const [isGameOver, setIsGameOver] = useState(false);

  // Fetch a new question
  const fetchQuestion = async () => {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      const randomCharacter =
        data.results[Math.floor(Math.random() * data.results.length)];

      // Generate options
      const shuffledOptions = [...data.results]
        .filter((char) => char.name !== randomCharacter.name) // removing correct answer from answers
        .sort(() => 0.5 - Math.random()) //make sure distracted answers shuffled
        .slice(0, 3) //grab the first three distractors
        .map((char) => char.name);

      // Ensure the correct answer is included
      if (!shuffledOptions.includes(randomCharacter.name)) {
        shuffledOptions.pop();
        shuffledOptions.push(randomCharacter.name);
      }

      setOptions(shuffledOptions.sort(() => 0.5 - Math.random())); // Shuffle options
      setCorrectAnswer(randomCharacter.name);

      // Set the question
      setQuestion(`Who is this Character?`);
      setQuestionImage(randomCharacter.image);
    } catch (error) {
      console.error("Error fetching character data:", error);
      setFeedback("Unable to fetch question. Please try again.");
    }
  };

  // Handle answer selection
  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setFeedback("Correct!");
      setScore((prevScore) => prevScore + 1); // Increment score
    } else {
      setFeedback(`Wrong! The correct answer was ${correctAnswer}.`);
    }

    // Move to the next question after a delay
    setTimeout(() => {
      setFeedback("");
      fetchQuestion();
    }, 1500);
  };

  // Handle timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsGameOver(true); // End the session
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isGameOver]);

  // Handle Play Again
  const handlePlayAgain = () => {
    setScore(0);
    setTimeLeft(20);
    setIsGameOver(false);
    fetchQuestion();
  };

  // Initial fetch
  useEffect(() => {
    fetchQuestion();
  }, []);

  if (isGameOver) {
    return (
      <div className="quiz-container">
        {/*<h2>Time's up!</h2>
        <p>Your score: {score}</p>
        <button onClick={handlePlayAgain}>Play Again</button>*/}
        <h2>Your score: {score}</h2>
        <Scoreboard score={score} onPlayAgain={handlePlayAgain} />
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>{question}</h2>
      {questionImage && (
        <img
          src={questionImage}
          alt="Character"
          style={{
            width: "200px",
            borderRadius: "10px",
            margin: "20px 0",
            display: "block",
          }}
        />
      )}
      {options.map((option, index) => (
        <button
          key={index}
          className="quiz-option"
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}
      <div className="quiz-feedback">{feedback}</div>
      <div className="quiz-score">Score: {score}</div>
      <div className="quiz-timer">
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      </div>
    </div>
  );
};

export default QuizPage;
