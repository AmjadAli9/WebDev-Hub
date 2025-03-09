import React, { useState } from "react";
import "./Tutorial.css";

const tutorials = [
  {
    id: 1,
    category: "HTML",
    title: "HTML Basics",
    description: "Learn the foundations of HTML and how to structure a webpage.",
    videos: [
      { type: "YouTube", url: "https://www.youtube.com/embed/dD2EISBDjWM" },
      { type: "YouTube", url: "https://www.youtube.com/embed/qz0aGYrrlhU" },
    ],
    quiz: [
      { question: "What does HTML stand for?", options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: "HyperText Markup Language" },
      { question: "Which tag is used to create a hyperlink in HTML?", options: ["<a>", "<link>", "<href>"], answer: "<a>" },
      { question: "Which tag is used to define a paragraph in HTML?", options: ["<p>", "<para>", "<paragraph>"], answer: "<p>" },
      { question: "Which tag is used to define a heading in HTML?", options: ["<h1>", "<heading>", "<head>"], answer: "<h1>" },
      { question: "Which tag is used to define a list in HTML?", options: ["<ul>", "<ol>", "<list>"], answer: "<ul>" },
      { question: "Which tag is used to define an image in HTML?", options: ["<img>", "<image>", "<picture>"], answer: "<img>" },
      { question: "Which tag is used to define a table in HTML?", options: ["<table>", "<tab>", "<tb>"], answer: "<table>" },
      { question: "Which tag is used to define a form in HTML?", options: ["<form>", "<input>", "<button>"], answer: "<form>" },
      { question: "Which tag is used to define an input field in HTML?", options: ["<input>", "<field>", "<text>"], answer: "<input>" },
      { question: "Which tag is used to define a button in HTML?", options: ["<button>", "<btn>", "<submit>"], answer: "<button>" },
    ],
  },
  {
    id: 2,
    category: "CSS",
    title: "CSS Styling",
    description: "Master the art of styling web pages with CSS.",
    videos: [
      { type: "YouTube", url: "https://www.youtube.com/embed/yfoY53QXEnI" },
      { type: "YouTube", url: "https://www.youtube.com/embed/OXGznpKZ_sA" },
    ],
    quiz: [
      { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], answer: "Cascading Style Sheets" },
      { question: "Which property is used to change text color in CSS?", options: ["text-color", "color", "font-color"], answer: "color" },
      { question: "Which property is used to change the background color of an element?", options: ["background-color", "color", "bgcolor"], answer: "background-color" },
      { question: "Which property is used to change the font size of an element?", options: ["font-size", "text-size", "size"], answer: "font-size" },
      {question: "Which property is used to change the font style of an element?", options: ["font-style", "style", "font"], answer: "font-style"} ,
      {question: "Which property is used to change the font weight of an element?", options: ["font-weight", "weight", "font"], answer: "font-weight"} ,
      {question: "Which property is used to change the font family of an element?", options: ["font-family", "family", "font"], answer: "font-family"} ,
      {question: "Which property is used to change the text alignment of an element?", options: ["text-align", "align", "alignment"], answer: "text-align"} ,
      {question: "Which property is used to change the text decoration of an element?", options: ["text-decoration", "decoration", "text-decorate"], answer: "text-decoration"} ,
      {question: "Which property is used to change the text transform of an element?", options: ["text-transform", "transform", "text"], answer: "text-transform"} ,
    ],
  },
  {
    id: 3,
    category: "JavaScript",
    title: "JavaScript Essentials",
    description: "Understand the fundamentals of JavaScript and DOM manipulation.",
    videos: [
      { type: "YouTube", url: "https://www.youtube.com/embed/W6NZfCO5SIk" },
      { type: "YouTube", url: "https://www.youtube.com/embed/hdI2bqOjy3c" },
    ],
    quiz: [
      { question: "Which of these is a JavaScript data type?", options: ["String", "HTML", "CSS"], answer: "String" },
      { question: "How do you declare a JavaScript variable?", options: ["var myVar;", "let myVar;", "const myVar;", "All of the above"], answer: "All of the above" },
      { question: "Which method is used to add an HTML element to the DOM?", options: ["document.append", "document.createElement", "document.add"], answer: "document.createElement" },
      { question: "Which method is used to remove an HTML element from the DOM?", options: ["document.removeElement", "document.removeChild", "document.deleteElement"], answer: "document.removeChild" },
      { question: "Which method is used to add a CSS class to an element?", options: ["element.addClass", "element.classList.add", "element.style.add"], answer: "element.classList.add" },
      { question: "Which method is used to remove a CSS class from an element?", options: ["element.removeClass", "element.classList.remove", "element.style.remove"], answer: "element.classList.remove" },
      { question: "Which method is used to toggle a CSS class on an element?", options: ["element.toggleClass", "element.classList.toggle", "element.style.toggle"], answer: "element.classList.toggle" },
      { question: "Which method is used to get the value of an input field?", options: ["input.value", "input.val", "input.text"], answer: "input.value" },
      { question: "Which method is used to set the value of an input field?", options: ["input.setValue", "input.val", "input.value"], answer: "input.value" },
      { question: "Which method is used to add an event listener to an element?", options: ["element.addListener", "element.eventListener", "element.addEventListener"], answer: "element.addEventListener" },
    ],
  },
  {
    id: 4,
    category: "React",
    title: "React Basics",
    description: "Learn the fundamentals of building user interfaces with React.",
    videos: [
      { type: "YouTube", url: "https://www.youtube.com/embed/w7ejDZ8SWv8" },
      { type: "YouTube", url: "https://www.youtube.com/embed/4UZrsTqkcW4" },
    ],
    quiz: [
      { question: "What is React primarily used for?", options: ["Styling", "Backend Development", "Building UI Components"], answer: "Building UI Components" },
      { question: "Which hook is used to manage state in React?", options: ["useState", "useEffect", "useContext"], answer: "useState" },
      { question: "Which hook is used to handle side effects in React?", options: ["useState", "useEffect", "useContext"], answer: "useEffect" },
      { question: "Which hook is used to share data across the component tree in React?", options: ["useState", "useEffect", "useContext"], answer: "useContext" },
      { question: "Which method is used to render a React component?", options: ["component.render", "component.display", "component.renderComponent"], answer: "component.render" },
      { question: "Which method is used to update the state of a React component?", options: ["this.setState", "this.updateState", "this.changeState"], answer: "this.setState" },
      { question: "Which method is used to handle events in React?", options: ["handleEvent", "eventHandler", "onClick"], answer: "onClick" },
      { question: "Which method is used to fetch data in React?", options: ["fetchData", "getData", "fetch"], answer: "fetch" },
      { question: "Which method is used to pass data between components in React?", options: ["passData", "sendData", "props"], answer: "props" },
      { question: "Which method is used to handle routing in React?", options: ["route", "router", "react-router"], answer: "react-router" },
      { question: "Which method is used to manage forms in React?", options: ["formState", "formHandler", "useState"], answer: "useState" },
    ],
  },
  {
    id: 5,
    category: "Node.js",
    title: "Node.js Essentials",
    description: "Understand backend development using Node.js and Express.",
    videos: [
      { type: "YouTube", url: "https://www.youtube.com/embed/TlB_eWDSMt4" },
      { type: "YouTube", url: "https://www.youtube.com/embed/Oe421EPjeBE" },
    ],
    quiz: [
      { question: "What is Node.js primarily used for?", options: ["Frontend Development", "Backend Development", "Database Management"], answer: "Backend Development" },
      { question: "Which module is used to create a server in Node.js?", options: ["http", "fs", "path"], answer: "http" },
      { question: "Which method is used to send a response in Node.js?", options: ["res.send", "res.write", "res.response"], answer: "res.send" },
      { question: "Which method is used to read a file in Node.js?", options: ["fs.read", "fs.readFile", "fs.open"], answer: "fs.readFile" },
      { question: "Which method is used to write to a file in Node.js?", options: ["fs.write", "fs.writeFile", "fs.save"], answer: "fs.writeFile" },
      { question: "Which method is used to handle routes in Node.js?", options: ["app.route", "app.use", "app.get"], answer: "app.get" },
      { question: "Which method is used to handle POST requests in Node.js?", options: ["app.post", "app.get", "app.route"], answer: "app.post" },
      { question: "Which method is used to connect to a database in Node.js?", options: ["connectDB", "db.connect", "mongoose.connect"], answer: "mongoose.connect" },
      { question: "Which method is used to define a schema in Node.js?", options: ["createSchema", "defineSchema", "new Schema"], answer: "new Schema" },
      { question: "Which method is used to perform CRUD operations in Node.js?", options: ["db.actions", "mongoose.methods", "model.methods"], answer: "model.methods" },
      { question: "Which method is used to handle errors in Node.js?", options: ["errorHandler", "app.error", "app.use"], answer: "app.use" },
    ],
  },
  {
    id: 6,
    category: "Git & GitHub",
    title: "Version Control with Git & GitHub",
    description: "Master version control and collaborative development with Git and GitHub.",
    videos: [
      { type: "YouTube", url: "https://www.youtube.com/embed/RGOj5yH7evk" },
      { type: "YouTube", url: "https://www.youtube.com/embed/sw0OW7gHEVg" },
    ],
    quiz: [
      { question: "What is Git used for?", options: ["Hosting Websites", "Version Control", "Database Management"], answer: "Version Control" },
      { question: "Which command initializes a Git repository?", options: ["git start", "git init", "git create"], answer: "git init" },
      { question: "Which command stages changes in Git?", options: ["git add", "git stage", "git commit"], answer: "git add" },
      { question: "Which command commits changes in Git?", options: ["git commit", "git save", "git push"], answer: "git commit"},
      { question: "Which command pushes changes to a remote repository in Git?", options: ["git push", "git send", "git upload"], answer: "git push" },
      { question: "Which command pulls changes from a remote repository in Git?", options: ["git pull", "git fetch", "git update"], answer: "git pull" },
      { question: "Which command creates a new branch in Git?", options: ["git branch", "git new", "git create"], answer: "git branch" },
      { question: "Which command switches to a different branch in Git?", options: ["git switch", "git checkout", "git change"], answer: "git checkout" },
      { question: "Which command merges branches in Git?", options: ["git merge", "git combine", "git join"], answer: "git merge" },
      { question: "Which command reverts changes in Git?", options: ["git revert", "git undo", "git reset"], answer: "git revert" },
      { question: "Which command creates a pull request in GitHub?", options: ["git request", "git pull-request", "git pr"], answer: "git pull-request" },
      { question: "Which command merges a pull request in GitHub?", options: ["git merge", "git accept", "git squash"], answer: "git merge" },
    ],
  },
];

const Tutorials = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleSelectTutorial = (tutorial) => {
    setSelectedTutorial(tutorial);
    setSelectedVideo(tutorial.videos[0].url);
    setShowQuiz(false);
  };

  const startQuiz = () => {
    setShowQuiz(true);
    setCurrentQuestion(0);
    setScore(0);
    setQuizComplete(false);
  };

  const handleAnswer = (selectedOption) => {
    const correctAnswer = selectedTutorial.quiz[currentQuestion].answer;
    if (selectedOption === correctAnswer) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedTutorial.quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizComplete(true);
    }
  };

  return (
    <div className="container">
      <div className="top-section">
        <nav className="nav-links">
          <a href="/" className="nav-item">Home</a>
          <a href="Learn" className="nav-item">Tutorials</a>
          <a href="#contact" className="nav-item">Contact</a>
          <a href="Resources" className="nav-item">Resources</a>
          <a href="CodePad" className="nav-item">CodePad</a>
        </nav>
      </div>

      <div className="content-wrapper">
        <aside className="sidebar">
          <h3>Topics</h3>
          {tutorials.map((tutorial) => (
            <button
              key={tutorial.id}
              onClick={() => handleSelectTutorial(tutorial)}
              className={`sidebar-item ${selectedTutorial?.id === tutorial.id ? "active" : ""}`}
            >
              {tutorial.title}
            </button>
          ))}
        </aside>

        <main className="main-content">
          {selectedTutorial ? (
            <>
              <h2>{selectedTutorial.title}</h2>
              <p>{selectedTutorial.description}</p>

              <div className="video-options">
                {selectedTutorial.videos.map((video, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVideo(video.url)}
                    className={`video-btn ${selectedVideo === video.url ? "active" : ""}`}
                  >
                    Video {index + 1}
                  </button>
                ))}
              </div>

              {selectedVideo && (
                <iframe
                  src={selectedVideo}
                  title="Tutorial Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </>
          ) : (
            <p>Select a tutorial to get started!</p>
          )}
          
        </main>
      </div>
    </div>
  );
};

export default Tutorials;
