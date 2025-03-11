//import React, { useState } from "react";
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
      { question: "Which property is used to change the font style of an element?", options: ["font-style", "style", "font"], answer: "font-style" },
      { question: "Which property is used to change the font weight of an element?", options: ["font-weight", "weight", "font"], answer: "font-weight" },
      { question: "Which property is used to change the font family of an element?", options: ["font-family", "family", "font"], answer: "font-family" },
      { question: "Which property is used to change the text alignment of an element?", options: ["text-align", "align", "alignment"], answer: "text-align" },
      { question: "Which property is used to change the text decoration of an element?", options: ["text-decoration", "decoration", "text-decorate"], answer: "text-decoration" },
      { question: "Which property is used to change the text transform of an element?", options: ["text-transform", "transform", "text"], answer: "text-transform" },
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
      { question: "Which command commits changes in Git?", options: ["git commit", "git save", "git push"], answer: "git commit" },
      { question: "Which command pushes changes to a remote repository in Git?", options: ["git push", "git send", "git upload"], answer: "git push" },
      { question: "Which command pulls changes from a remote repository in Git?", options: ["git pull", "git fetch", "git update"], answer: "git pull" },
      { question: "Which command creates a new branch in Git?", options: ["git branch", "git new", "git create"], answer: "git branch" },
    ],
  },
];

export default tutorials;
