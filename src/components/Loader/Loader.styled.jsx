import styled from "styled-components";

export const StyledLoader = styled.span`
    display: flex;
    justify-content: center;
    position: relative;
    width: 64px;
    height: 64px;
    background-color: transparent;
    transform: rotate(45deg);
    overflow: hidden;
    margin: 0 auto;

  &:after{
    content: '';
    position: absolute;
    inset: 8px;
    margin: auto;
    background: #222b32;
  }
  &:before{
    content: '';
    position: absolute;
    inset: -15px;
    margin: auto;
    background: #de3500;
    animation: diamondLoader 2s linear infinite;
  }
  @keyframes diamondLoader {
    0%  ,10% {
      transform: translate(-64px , -64px) rotate(-45deg)
    }
    90% , 100% {
      transform: translate(0px , 0px) rotate(-45deg)
    }
  }
`;