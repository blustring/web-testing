import React from "react";
import { render, screen, cleanup } from "@testing-library/react"; 
import Question from "../Question"; 
import questionsData from "../questions.json"; 




afterEach(() => {
    cleanup();
});



test("should render questions and answers", () => {
  render(<Question />);
  
  // Check if each question and answer is rendered
  questionsData.questions.forEach((question) => {
    expect(screen.getByText(question.title)).toBeInTheDocument();
    question.answers.forEach((answer) => {
      const answerElement = screen.getByText(answer.answer);
      expect(answerElement).toBeInTheDocument();
      if (answer.correct) {
        // Check if the correct answer is wrapped in <strong>
        expect(answerElement.tagName).toBe("STRONG");
      }
    });
    expect(screen.getByText(question.helper.text)).toBeInTheDocument();
  });
});

console.log(questionsData);

test("should display helper text for each question", () => {
    render(<Question />);
    questionsData.questions.forEach((question) => {
      const helperText = screen.getByText(question.helper.text);
      expect(helperText).toBeInTheDocument();
    });
  });

  test("should display correct question titles", () => {
    render(<Question />);
    const questionTitles = screen.getAllByText(/What is the capital of France\?|Which planet is known as the Red Planet\?/i);
    expect(questionTitles).toHaveLength(2); 
  });

  test("should display correct question titles", () => {
    render(<Question />);
    const questionTitles = screen.getAllByText(/What is the capital of France\?|Which planet is known as the Red Planet\?/i);
    expect(questionTitles).toHaveLength(2); 
  });
  
  test("should not wrap incorrect answers in <strong>", () => {
  render(<Question />);
  const incorrectAnswers = screen.getAllByText("Madrid");
  incorrectAnswers.forEach((answer) => {
    expect(answer.tagName).not.toBe("STRONG");
  });
});

  
  
  