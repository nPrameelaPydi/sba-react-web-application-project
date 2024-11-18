# TriviaVerse

A fun trivia game app that uses the Rick and Morty API or any API with engaging content. The app generates random trivia questions based on characters, episodes, or locations, and tracks user performance.

## Technologies Used

- **React**: The frontend library used to build the user interface, handle component rendering, and manage state.
- **CSS**: For styling the application, including layout, button designs, and responsive elements.
- **JavaScript**: The primary language for the logic and functionality of the app.
- **APIs**: The application fetches trivia questions and options from a third-party API (e.g., Rick and Morty API) to dynamically generate quiz questions.

## Approach Taken

1. **React Components**: The app is divided into multiple React components:

   - `QuizPage`: Displays the trivia question, options, and handles the logic for answering questions, providing feedback, and navigating between questions.
   - `Timer`: Manages the countdown for the trivia session.
   - `Scoreboard`: Displays the user's score and allows them to play again.

2. **State Management**: React `useState` is used for managing states like the current question, options, score, and time left.

3. **Timer Logic**: A global timer is implemented that counts down for 20 seconds for the entire quiz session. The timer's state is updated and displayed in real-time.

4. **Fetching Trivia Data**: The app fetches trivia data from a remote API (like the Rick and Morty API) to display random trivia questions and multiple-choice options.

5. **Styling**: The app is styled with basic CSS. The layout is designed to be mobile-responsive and centered on the screen.

## Live Site

[Visit the live version of the Trivia Quiz Application here](https://gregarious-naiad-9d9f4f.netlify.app/).

## Usage Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/trivia-quiz-app.git
   ```
