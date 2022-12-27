import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60px;
  transform: rotate(-45deg);
  margin: auto;
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  animation: scale-x 1s ease forwards;
  animation-delay: 2.3s;
  @keyframes scale-x {
    to {
      transform: scale(50);
      opacity: 0;
    }
  }
`;

export const Tile1 = styled.span`
  flex-basis: 50%;
  aspect-ratio: 1/1;
  display: block;
  transition: opacity 0.7s ease;
  background-color: #f8f8ff;
  transform-origin: 100% 100%;
  animation: flip-1 0.5s linear forwards;
  border: none;
  opacity: 0;
  transition: opacity 0.7s ease;

  @keyframes flip-1 {
    to {
      transform: rotateY(180deg);
      opacity: 1;
    }
  }
`;
export const Tile2 = styled.span`
  flex-basis: 50%;
  aspect-ratio: 1/1;
  display: block;
  transition: opacity 0.7s ease;
  background-color: #f8f8ff;
  transform-origin: 50% 100%;
  animation: flip-2 0.5s linear forwards;
  animation-delay: 0.5s;
  opacity: 0;
  @keyframes flip-2 {
    to {
      transform: rotateX(180deg);
      opacity: 1;
    }
  }
`;
export const Tile3 = styled.span`
  flex-basis: 50%;
  aspect-ratio: 1/1;
  display: block;
  transition: opacity 0.7s ease;
  background-color: #f8f8ff;
  transform-origin: 50% 0%;
  animation: flip-4 0.5s linear forwards;
  animation-delay: 1.5s;
  opacity: 0;
  @keyframes flip-4 {
    to {
      transform: rotateX(-180deg);
      opacity: 1;
    }
  }
`;
export const Tile4 = styled.span`
  flex-basis: 50%;
  aspect-ratio: 1/1;
  display: block;
  transition: opacity 0.7s ease;
  background-color: #f8f8ff;
  transform-origin: 0% 50%;
  animation: flip-3 0.5s linear forwards;
  animation-delay: 1s;
  opacity: 0;
  @keyframes flip-3 {
    to {
      transform: rotateY(-180deg);
      opacity: 1;
    }
  }
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.background};
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: #000;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff3;
    border-radius: 20px;
    border: 3px solid #fff3;
  }
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 40px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #000;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff3;
    border-radius: 20px;
    border: 6px solid #fff3;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;

export const New = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 20px;
  min-width: 200px;
  height: 50px;
  border-radius: 10px;
  gap: 10px;

  text-decoration: none;

  align-items: center;
  background: #f5f5fa;
  border: 0;
  border-radius: 8px;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  justify-content: center;
  line-height: 1.5rem;
  padding: 15px;
  text-align: left;
  transition: 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: pre;
  word-break: normal;
  word-spacing: normal;

  &:hover {
    background: #f8f8ff;
  }
`;
