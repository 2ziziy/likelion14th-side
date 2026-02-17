import React, { useEffect, useState } from "react";
import styled from "styled-components";
import lionHead from "../assets/lion.png";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
`;

const ProgressContainer = styled.div`
  width: 339px;

  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 100;
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 10px;
  background-color: white;
  border-radius: 10px;
  border: 2px solid #ffffff;
  position: relative;
  margin: 10px 0;
`;

const ProgressFill = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ff6000;
  border-radius: 10px;
`;

const LionIcon = styled.img`
  width: 40px;
  position: absolute;
  top: -35px;
  image-rendering: pixelated;

  transform: translateX(-50%);
`;

const TimeText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  color: #000;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
`;

const QuestionTitle = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 130%;
  text-align: center;
  max-width: 320px;

  color: #000000;
  text-shadow: 2px 2px 0px #ff6000;
`;

const QuestionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const ContentDetail = styled.div`
  display: flex;
  width: 313px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid #000000;
  cursor: pointer;

  background: ${(p) => (p.selected ? "#FF6000" : "#FFFFFF")};
  box-shadow: ${(p) =>
    p.selected ? "0px 4px 0px rgba(0, 0, 0, 0.5)" : "none"};

  transition: all 0.15s ease;
`;

const ContentText = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  text-align: center;

  color: ${(p) => (p.selected ? "#FFFFFF" : "#000000")};
`;

const ButtonRow = styled.div`
  width: 313px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBtn = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 130%;
  text-align: center;

  color: #ffffff;
  -webkit-text-stroke: 1px #ff6000;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.5);

  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  opacity: ${(p) => (p.disabled ? 0.4 : 1)};
  pointer-events: ${(p) => (p.disabled ? "none" : "auto")};

  &:hover {
    opacity: ${(p) => (p.disabled ? 0.4 : 0.8)};
  }
`;

export default function Test() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState(null);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/questions`)
      .then((r) => r.json())
      .then((data) => {
        setQuestions(data);
        setAnswers(new Array(data.length).fill(null));
      });
  }, []);

  if (!questions) return <div>로딩중...</div>;

  const q = questions[index];

  /* 선택 */
  const handleSelect = (opt) => {
    const copy = [...answers];
    copy[index] = opt;
    setAnswers(copy);
  };

  const handlePrev = () => {
    if (index === 0) {
      navigate("/main");
      return;
    }
    setIndex((i) => i - 1);
  };

  /* 다음 */
  const handleNext = async () => {
    if (!answers[index]) {
      alert("선택하세요");
      return;
    }

    if (index === questions.length - 1) {
      const answerValues = answers.map((a) => a.value);

      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/result`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: answerValues,
        }),
      });

      const resultData = await res.json();

      navigate("/result", { state: resultData });
      return;
    }

    setIndex((i) => i + 1);
  };

  const progressWidth = index * 56;

  return (
    <Wrapper>
      <ProgressContainer>
        <ProgressBarWrapper>
          <ProgressFill style={{ width: `${progressWidth}px` }} />
          <LionIcon src={lionHead} style={{ left: `${progressWidth}px` }} />
        </ProgressBarWrapper>
        <TimeText>
          <span>00:00</span>
          <span>06:00</span>
        </TimeText>
      </ProgressContainer>

      <Question>
        <QuestionTitle>{q.text}</QuestionTitle>
        <QuestionContent>
          {q.options.map((opt) => (
            <ContentDetail
              key={opt.value}
              selected={answers[index]?.value === opt.value}
              onClick={() => handleSelect(opt)}
            >
              <ContentText>{opt.label}</ContentText>
            </ContentDetail>
          ))}
        </QuestionContent>
        <ButtonRow>
          <NavBtn onClick={handlePrev}>이전</NavBtn>
          <NavBtn onClick={handleNext} disabled={!answers[index]}>
            다음
          </NavBtn>
        </ButtonRow>
      </Question>
    </Wrapper>
  );
}
