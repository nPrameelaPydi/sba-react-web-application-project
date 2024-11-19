# <a href="https://merry-bunny-77b7e5.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify Live Link (Hosted on Netlify)</a>

# TriviaVerse

A fun trivia game app that uses the Rick and Morty API or any API with engaging content. The app generates random trivia questions based on characters, episodes, or locations, and tracks user performance.

## Technologies Used

- **React**: The frontend library used to build the user interface, handle component rendering, and manage state.
- **CSS**: For styling the application, including layout, button designs, and responsive elements.
- **JavaScript**: The primary language for the logic and functionality of the app.
- **APIs**: The application fetches trivia questions and options from a third-party API (e.g., Rick and Morty API) to dynamically generate quiz questions.
- **React Hooks**: `useState`, `useEffect` for managing state and side effects within the app.
- **React Router**: For managing different routes in the app.

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

[Visit the live version of the TriviaVerse Application here](https://merry-bunny-77b7e5.netlify.app/).

## Usage Instructions

1. Clone the repository:
   ```bash
   git clone git@github.com:nPrameelaPydi/sba-react-web-application-project.git
   ```
2. Navigate into project directory, Install dependencies, Run the app:
   ```bash
   cd quiz-app, npm install, npm start
   ```

## Folder Structure

```
sba-react-web-app
├── /index.html              # Main HTML file
├── /src
│   ├── /components          # React components (Carousel, Footer, HomePage, Nav, QuizPage, Scoreboard, Timer)
│   │   ├── Carousel.jsx
│   │   ├── Footer.jsx
│   │   ├── HomePage.jsx
│   │   ├── Nav.jsx
│   │   ├── QuizPage.jsx
│   │   ├── Scoreboard.jsx
│   │   └── Timer.jsx
│   ├── /assets               # Static files like images
│   │   └── /images           # Image files
│   ├── App.css               # Global styles
│   ├── App.jsx               # Main App component
│   ├── main.jsx              # Entry point for React
├── package.json             # Project metadata and dependencies
├── README.md                # This file
```

## Unsolved Problems / Future Improvements

- **Timer Update**: Set a time limit for each question to enhance the challenge and ensure consistent pacing.
- **Scoreboard Display**: Add features to display the top score, recent scores, number of times played, and more details on the Scoreboard page.
- **Trivia Questions**: Expand the questions to include more parameters such as character locations, episodes, and other details.
- **Mobile Responsiveness**: Improve the UI for smaller screens. Some styles need adjustments to ensure better compatibility with mobile devices.

## Acknowledgments

- [Rick and Morty API](https://rickandmortyapi.com/) for providing the character trivia data.
- [React](https://reactjs.org/) for making frontend development easier and more efficient.
