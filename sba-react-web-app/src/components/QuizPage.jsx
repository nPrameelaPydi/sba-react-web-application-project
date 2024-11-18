// /components/QuizPage.js

import React, { useEffect, useState } from "react";
import { fetchTriviaData } from "../utils/api";
import Timer from "./Timer";

const QuizPage = () => {
  const [question, setQuestion] = useState("");
  const [questionImage, setQuestionImage] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Adjust timer duration as needed

  // Fetch a new question
  const fetchQuestion = async () => {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      const randomCharacter =
        data.results[Math.floor(Math.random() * data.results.length)];

      // Generate options
      const shuffledOptions = [...data.results]
        .filter((char) => char.name !== randomCharacter.name) // Avoid duplicate answers
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((char) => char.name);

      // Ensure the correct answer is included
      if (!shuffledOptions.includes(randomCharacter.name)) {
        shuffledOptions.pop();
        shuffledOptions.push(randomCharacter.name);
      }

      setOptions(shuffledOptions.sort(() => 0.5 - Math.random())); // Shuffle options
      setCorrectAnswer(randomCharacter.name);

      // Set the question dynamically
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

    // Reset feedback and fetch a new question after a delay
    setTimeout(() => {
      setFeedback("");
      fetchQuestion();
      setTimeLeft(30); // Reset timer
    }, 1500);
  };

  // Handle timer running out
  useEffect(() => {
    if (timeLeft === 0) {
      setFeedback(`Time's up! The correct answer was ${correctAnswer}.`);
      setTimeout(() => {
        setFeedback("");
        fetchQuestion();
        setTimeLeft(30); // Reset timer
      }, 1500);
    }
  }, [timeLeft]);

  // Initial fetch
  useEffect(() => {
    fetchQuestion();
  }, []);

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
