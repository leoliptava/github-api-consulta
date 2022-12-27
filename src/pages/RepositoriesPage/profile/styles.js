import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.subtitle};
  font-weight: normal;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Inner = styled.div`
  padding: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;

  svg {
    margin-right: 10px;
  }
`;

export const ArrowTop = styled.div`
  background-color: #666;
  height: 5px;
  left: -6px;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: rotate(45deg);
  transform-origin: bottom right;

  transform: rotate(45deg);
  transform-origin: bottom right;

  &:after {
    background-color: #f5f5fa;
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    transition: all 0.15s;
    left: 100%;
    right: 0;
    transition-delay: 0s;
  }
`;
export const ArrowBottom = styled.div`
  background-color: #666;
  height: 5px;
  left: -6px;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: rotate(-45deg);
  transform-origin: top right;

  &:after {
    background-color: #f5f5fa;
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    transition: all 0.15s;
    left: 0;
    right: 100%;
    transition-delay: 0.15s;
  }
`;

export const Arrow = styled.a`
  cursor: pointer;
  transform: translateX(-50%) translateY(-50%) rotate(180deg);
  transition: transform 0.1s;
  width: 20px;
  &:hover {
    ${ArrowTop}::after {
      left: 0;
      transition-delay: 0.15s;
    }

    ${ArrowBottom}::after {
      right: 0;
      transition-delay: 0s;
    }
  }
`;
