import styled from "styled-components";

export const StyledLoader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50%;
  top: 50%;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid black;
    border-color: black transparent black transparent;
    animation: lds-dual-ring 1.2s linear infinite;

    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
