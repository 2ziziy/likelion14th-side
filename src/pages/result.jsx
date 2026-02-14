import React from 'react';
import styled from 'styled-components';
import lionImage from '../assets/playlist.png'; 
import lionHead from '../assets/lion.png';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

{/* 전체 영역을 감싸는 틀 */}
const ProgressContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

{/* 흰색 테두리가 있는 긴 막대 */}
const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 10px;
  background-color: white;
  border-radius: 10px;
  border: 2px solid #FFFFFF;
  position: relative;
  margin: 10px 0;
`;

{/* 주황색으로 꽉 찬 내부 */}
const ProgressFill = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FF6000;
  border-radius: 10px;
`;

{/* 오른쪽 끝에 떠 있는 사자 머리 */}
const LionIcon = styled.img`
  width: 40px;
  position: absolute;
  right: -20px;
  top: -35px;
  image-rendering: pixelated;
`;

{/* 아래쪽 시간 표시 */}
const TimeText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  color: #000;
`;

{/* 결과 멘트 */}
const ResultTitle = styled.h2`
  font-weight: 400;
  font-size: 30px;
  line-height: 130%;
  text-align: center;

  color: #000000;
  -webkit-text-stroke: 1px #FFFFFF;
  text-shadow: 4px 4px 0px #FF6000;

  white-space: pre-wrap;
`;

{/* 썸네일 박스 */}
const ThumbnailBox = styled.div`
  width: 250px;
  height: 250px;
  background: #FFFFFF;
  border: 3px solid #000000;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  box-shadow: 5px 5px 0px rgba(0,0,0,0.2);
`;

{/* 썸네일 박스 안에 들어있는 이미지 */}
const ThumbnailImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
`;

{/* 지원하기 버튼 */}
const ApplyButton = styled.button`
  font-weight: 400;
  font-size: 30px;
  line-height: 130%;
  text-align: center;

  background: none;
  border: none;
  cursor: pointer;
  white-space: pre-wrap;

  color: #FFFFFF;
  -webkit-text-stroke: 1px #FF6000;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 0.8;
  }
`;

function Result() {
  const LION_APPLY_URL = "멋자 지원 페이지 URL"; 

  const handleApply = () => {
    window.open(LION_APPLY_URL, "_blank");
  };

  return (
    <Wrapper>
      <Container>
        <ProgressContainer>
          <ProgressBarWrapper>
            <ProgressFill />
            <LionIcon src={lionHead} alt="lion" />
          </ProgressBarWrapper>
          <TimeText>
            <span>00:00</span>
            <span>06:00</span>
          </TimeText>
        </ProgressContainer>

        <ResultTitle>
          차분한 집중력이 필요한 당신,{'\n'}
          주변 소음으로{'\n'}
          몰입도를 높여 보세요.
        </ResultTitle>

        <ThumbnailBox>
          <ThumbnailImage src={lionImage} alt="Result Thumbnail" />
        </ThumbnailBox>

        <ApplyButton onClick={handleApply}>
          플리 들으면서 멋사 14기{'\n'}
          지원하러 가기 &gt;
        </ApplyButton>

      </Container>
    </Wrapper>
  );
}

export default Result;