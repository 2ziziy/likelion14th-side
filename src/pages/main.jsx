import React from 'react';
import styled from 'styled-components';
import playlistImage from '../assets/playlist.png';

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

const Playlist = styled.img`
  width: 200px;
`;

const Title = styled.h1`
  color: white;
  font-size: 4rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7); 
`;

function Main() {
  return (
    <Wrapper>
      <Playlist src={playlistImage} alt="Playlist" />
    </Wrapper>
  );
}

export default Main;