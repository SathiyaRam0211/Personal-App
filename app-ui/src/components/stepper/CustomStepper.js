import React, { useState } from "react";
import StepBox from "./StepBox";
import { StepperContainer } from "../../utils/utils_styled";

const CustomStepper = () => {
  let [qNo, setQNo] = useState(0);
  const data = [
    {
      questionId: 1,
      userId: 1,
      frequency: "once", // once, every day, every week, every month, random period
      type: "fitness", // diet, sleep, fitness, entertainment, family, skin care, upskill, work, social
      question: "Do you workout?",
      answerType: "options", // single, options, range
      options: ["Yes", "No"],
      isAnswered: false,
      answer: "",
    },
    {
      questionId: 2,
      userId: 1,
      frequency: "everyday",
      type: "diet",
      question: "How much protein did you take in today?",
      answerType: "single",
      unit: "grams",
      isAnswered: false,
      answer: "",
    },
    {
      questionId: 3,
      userId: 1,
      frequency: "once",
      type: "upskill",
      question: "Which skill are you training for?",
      answerType: "single",
      isAnswered: false,
      answer: "",
    },
    {
      questionId: 4,
      userId: 1,
      frequency: "everyday",
      type: "selfcare",
      question: "Did you wash your hair?",
      answerType: "options",
      options: ["Yes", "No"],
      isAnswered: false,
      answer: "",
    },
    {
      questionId: 5,
      userId: 1,
      frequency: "everyday",
      type: "family",
      question: "How many hours did you spend with your parents today?",
      answerType: "single",
      unit: "hours",
      isAnswered: false,
      answer: "",
    },
    {
      questionId: 6,
      userId: 1,
      frequency: "everyday",
      type: "work",
      question: "Did you learn anything new in your work today?",
      answerType: "options",
      options: ["Yes", "No"],
      isAnswered: false,
      answer: "",
    },
    {
      questionId: 7,
      userId: 1,
      frequency: "everyday",
      type: "entertainment",
      question: "What did you watch today?",
      answerType: "single",
      isAnswered: false,
      answer: "",
    },
    {
      questionId: 8,
      userId: 1,
      frequency: "everyday",
      type: "sleep",
      question: "How many hours did you sleep last night?",
      answerType: "single",
      unit: "hours",
      isAnswered: false,
      answer: "",
    },
    {
      questionId: 9,
      userId: 1,
      frequency: "everyday",
      type: "social",
      question: "Did you go out today?",
      answerType: "options",
      options: ["Yes", "No"],
      isAnswered: false,
      answer: "",
    },
  ];

  const handleNext = (answer) => {
    if (answer !== null) {
      data[qNo].answer = answer;
      data[qNo].isAnswered = true;
    }
    if (qNo < data.length - 1) setQNo(qNo + 1);
    else setQNo(0);
  };

  return (
    <>
      <StepperContainer>
        <StepBox data={data[qNo]} handleNext={handleNext}></StepBox>
      </StepperContainer>
    </>
  );
};

export default CustomStepper;
