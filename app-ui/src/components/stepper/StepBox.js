import React, { useState, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  AnswerBtn,
  EnterBtn,
  IconWrapper,
  MainText,
  StepContainer,
  SubText,
} from "../../utils/utils_styled";
import { flexAlignStyle, inputBoxStyle } from "../../utils/utils_style";
import { imageMap } from "../../constants/Constants";

const StepBox = (props) => {
  const { data, handleNext } = props;
  const buttonRef = useRef(null);
  const [answer, setAnswer] = useState();

  const handleOnAnswer = (option) => {
    setAnswer(option);
    handleNext(option);
    setAnswer("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      buttonRef.current.click();
    }
  };

  return (
    <StepContainer>
      <div>
        <IconWrapper>
          <img src={imageMap[data.type]} alt={`${data.type}-icon`}></img>
        </IconWrapper>
        <MainText>{data.question}</MainText>
        {data.answerType === "options" &&
          data.options.length > 1 &&
          data.options.map((option, index) => {
            return (
              <AnswerBtn
                key={index + option}
                onClick={() => handleOnAnswer(option)}
              >
                <SubText>{option}</SubText>
              </AnswerBtn>
            );
          })}
        {data.answerType === "single" && (
          <>
            <div style={flexAlignStyle}>
              <input
                style={inputBoxStyle}
                value={answer}
                autoFocus
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={handleKeyDown}
                type={data.unit && data.unit !== null ? "number" : "text"}
              />
              {data.unit && <SubText>{data.unit}</SubText>}
              <EnterBtn ref={buttonRef} onClick={() => handleOnAnswer(answer)}>
                <i
                  className="bi bi-arrow-right-circle"
                  style={{ fontSize: "20px" }}
                ></i>
              </EnterBtn>
            </div>
          </>
        )}
      </div>
    </StepContainer>
  );
};

export default StepBox;
