import React from "react";
import styled from "styled-components";
import playlistImage from "../assets/playlist.png";
import headphoneIcon from "../assets/icon_headphone.png";
import musicIcon from "../assets/icon_music.png";
import { useNavigate } from "react-router-dom";

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

const TitleWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin-bottom: 50px;
`;

const DecoIcon = styled.img`
  position: absolute;
  width: 40px;
  image-rendering: pixelated;
`;

const Headphone = styled(DecoIcon)`
  top: -15px;
  left: -50px;
`;

const Note = styled(DecoIcon)`
  bottom: 30px;
  right: -50px;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 30px;
  line-height: 130%;
  text-align: center;

  color: #000000;
  text-shadow: 2px 2px 0px #ff6000;

  white-space: pre-wrap;
  margin: 0;
`;

const Playlist = styled.img`
  width: 200px;
`;

const StartButton = styled.button`
  font-weight: 400;
  font-size: 30px;
  line-height: 130%;
  text-align: center;

  color: #ffffff;
  -webkit-text-stroke: 1px #ff6000;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.5);

  background: none;
  border: none;
  cursor: pointer;
  margin-top: 50px;

  &:hover {
    opacity: 0.8;
  }
`;

function Main() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/test");
  };

  return (
    <Wrapper>
      <Container>
        <TitleWrapper>
          <Headphone src={headphoneIcon} alt="headphone" />
          <Title>사자가 말아주는{"\n"}개발 플레이리스트</Title>
          <Note src={musicIcon} alt="note" />
        </TitleWrapper>

        <Playlist src={playlistImage} alt="Playlist" />

        <StartButton onClick={handleStart}>들으러 가기</StartButton>
      </Container>
    </Wrapper>
  );
}

export default Main;
