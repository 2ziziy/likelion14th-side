import styled from "styled-components";
import lionImage from "../assets/playlist.png";
import lionHead from "../assets/lion.png";
import { useLocation } from "react-router-dom";
import Beat from "../assets/beat.jpeg";
import Calm from "../assets/janjan.jpeg";
import Exciting from "../assets/joy.jpeg";
import Heavy from "../assets/rock.jpeg";
import WhiteNoise from "../assets/white.jpeg";

const RESULT_MAP = [
  {
    min: 6,
    max: 9,
    genre: "백색소음",
    description:
      "차분한 집중력이 필요한 당신,\n주변 소음으로\n몰입도를 높여보세요.",
    playlistUrl:
      "https://youtube.com/playlist?list=PL6xGPiO7EcprRxxV05iNyEzMeq5AMZThg&si=XDz8CVTv9yJVZNSn",
    imageUrl: WhiteNoise,
  },
  {
    min: 10,
    max: 13,
    genre: "잔잔한",
    description: "평온한 마음으로\n코드를 한 줄씩 쌓아가는\n스타일이시네요.",
    playlistUrl:
      "https://youtube.com/playlist?list=PL6xGPiO7EcppsQh9eVRjfNnZytbYxiQtD&si=YcOMpT81Pal0mgCW",
    imageUrl: Calm,
  },
  {
    min: 14,
    max: 17,
    genre: "비트 있는",
    description: "적당한 리듬감이 있을 때\n코딩 효율이 극대화되는 타입입니다!",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PL6xGPiO7EcpppeALtxBSorHO_ZRFd-2SK",
    imageUrl: Beat,
  },
  {
    min: 18,
    max: 21,
    genre: "신나는",
    description: "폭발적인 텐션으로\n마감을 향해 질주하는\n당신을 위한 노래!",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PL6xGPiO7Ecpo3pYYfehwmkL2euHfbaHjB",
    imageUrl: Exciting,
  },
  {
    min: 22,
    max: 24,
    genre: "헤비메탈",
    description:
      "모든 에러를 부숴버릴 듯한\n강력한 에너지가\n필요한 시간입니다.",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PL6xGPiO7EcpoM8cC8uyKW852czPiyViX5",
    imageUrl: Heavy,
  },
];

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  right: -20px;
  top: -35px;
  image-rendering: pixelated;
`;

const TimeText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  color: #000;
`;

const ResultTitle = styled.h2`
  font-weight: 400;
  font-size: 30px;
  line-height: 130%;
  text-align: center;

  color: #000000;
  text-shadow: 2px 2px 0px #ff6000;

  white-space: pre-wrap;
`;

const ThumbnailImage = styled.img`
  width: 250px;
  height: 250px;
  border: 2px solid #000000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const ApplyButton = styled.button`
  font-weight: 400;
  font-size: 30px;
  line-height: 130%;
  text-align: center;

  background: none;
  border: none;
  cursor: pointer;
  white-space: pre-wrap;

  color: #ffffff;
  -webkit-text-stroke: 1px #ff6000;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 0.8;
  }
`;

function Result() {
  const location = useLocation();
  const answers = location.state?.answers || [];
  const totalScore = answers.reduce((a, b) => a + b, 0);

  const result =
    RESULT_MAP.find((r) => totalScore >= r.min && totalScore <= r.max) ||
    RESULT_MAP[0];

  const handleApply = () => {
    window.open(result.playlistUrl, "_blank");
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

        <ResultTitle>{result.description}</ResultTitle>

        <ThumbnailImage src={result.imageUrl} alt={result.genre} />

        <ApplyButton onClick={handleApply}>
          플리 들으면서 멋사 14기{"\n"}
          지원하러 가기 &gt;
        </ApplyButton>
      </Container>
    </Wrapper>
  );
}

export default Result;
