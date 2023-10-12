import React from "react";
import questionsData from "./questions.json"; // Import your JSON data


function Question() {
  return (
    <div>
      {questionsData.questions.map((question, index) => (
        <div key={index}>
          <h3>{question.title}</h3>
          <ul>
            {question.answers.map((answer, answerIndex) => (
              <li key={answerIndex}>
                {answer.correct ? <strong>{answer.answer}</strong> : answer.answer}
              </li>
            ))}
          </ul>
          <p>{question.helper.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Question;
