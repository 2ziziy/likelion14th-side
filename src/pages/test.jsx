import React, { useState } from "react";
import styled from "styled-components";
import lionHead from "../assets/lion.png";
import { useNavigate, useLocation } from "react-router-dom";

const QUESTIONS = [
  {
    id: 1,
    text: "코딩할 때 스타일은?",
    options: [
      { value: 1, label: "미리미리 끝낸다." },
      { value: 2, label: "나눠서 처리한다." },
      { value: 3, label: "삘 탈 때 몰아서 한다." },
      { value: 4, label: "마감기한까지 미룬다." },
    ],
  },
  {
    id: 2,
    text: "에러가 날 때 반응은?",
    options: [
      { value: 1, label: "쉰다." },
      { value: 2, label: "계속 다시 실행한다." },
      { value: 3, label: "AI의 도움을 받는다." },
      { value: 4, label: "접는다." },
    ],
  },
  {
    id: 3,
    text: "코딩 하기 전 가장 먼저 하는 행동은?",
    options: [
      { value: 1, label: "계획표를 본다." },
      { value: 2, label: "커피를 내린다." },
      { value: 3, label: "주변을 청소한다." },
      { value: 4, label: "조원의 독촉 연락을 받는다." },
    ],
  },
  {
    id: 4,
    text: "선호하는 장소는?",
    options: [
      { value: 1, label: "조용한 도서관" },
      { value: 2, label: "편안한 집" },
      { value: 3, label: "북적북적 카페" },
      { value: 4, label: "쿵짝쿵짝 클럽" },
    ],
  },
  {
    id: 5,
    text: "코딩할 때 가장 싫은 상황은?",
    options: [
      { value: 1, label: "알 수 없는 오류" },
      { value: 2, label: "저장 안 했는데 컴다운됨" },
      { value: 3, label: "깨져버린 디자인" },
      { value: 4, label: "깃허브 꼬였을 때" },
    ],
  },
  {
    id: 6,
    text: "코딩할 때 꼭 필요한 것은?",
    options: [
      { value: 1, label: "잠을 깨워줄 커피" },
      { value: 2, label: "도움을 요청할 AI" },
      { value: 3, label: "노래를 틀어줄 이어폰" },
      { value: 4, label: "미모점검을 위한 거울" },
    ],
  },
];

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
  margin-top: 20px;
  margin-bottom: 5px;
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
  font-size: 22px;
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
  font-size: 18px;
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
  font-size: 20px;
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
  const location = useLocation();

  const [index, setIndex] = useState(location.state?.index ?? 0);

  const [answers, setAnswers] = useState(
    location.state?.fullAnswers ?? new Array(QUESTIONS.length).fill(null),
  );

  const q = QUESTIONS[index];

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

  const handleNext = () => {
    if (!answers[index]) {
      alert("선택하세요");
      return;
    }

    if (index === QUESTIONS.length - 1) {
      const answerValues = answers.map((a) => a.value);
      navigate("/result", {
        state: {
          answers: answerValues,
          index,
          fullAnswers: answers,
        },
      });
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
