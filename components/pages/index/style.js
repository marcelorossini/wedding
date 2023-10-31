import styled, { keyframes } from "styled-components";

export const fadeOut = keyframes`
  0% {
      opacity: 1;
  }
  50% {
      opacity: 1;
  }  
  100% {
    opacity: 0;
    display: none;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100vh;

  & > img {
    width: 100%;
  }
  background: linear-gradient(
      0deg,
      rgba(253, 251, 249, 1) 50%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    url("./assets/background.jpg") no-repeat;
  background-size: cover;
  background-position: top center;
  box-shadow: inset 0px 82px 141px -88px rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  min-height: 100%;
  z-index: 100%;
  padding: calc(50vh - 5em) var(--padding-default) var(--padding-default)
    var(--padding-default);
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    padding: calc(30vh - 5em) var(--padding-default) var(--padding-default)
      var(--padding-default);
  }
`;

export const Logo = styled.div`
  width: 100%;
  //max-width: 250px;
  color: var(--color-primary);
`;

export const LoadingStyled = styled.div`
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  background: url("./assets/texture.jpg") no-repeat;
  background-size: cover;
  background-position: top center;
  animation: ${fadeOut} 3s forwards;

  img {
    width: 200%;
    object-fit: cover;
  }
  @media (min-width: 600px) {
    img {
      width: initial;
      height: 100%;
    }
  }
`;

export const CountdownBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "title title title title" "day hour minute second";
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 0px 50px -15px rgba(0, 0, 0, 0.2);
  height: 120px;
`;

export const CountdownItem = styled.div`
  grid-area: ${({ type }) => type};
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;

  ${({ type }) => {
    if (type == "title")
      return `
            background: var(--color-primary-80);
            font-size: 1.4em;
            flex-direction: row;
            gap: 10px;

            div {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            svg {
              width: 30px;
              color: #ffffff;
            }
        `;
    else if (type == "day")
      return `
            background: var(--color-primary-70);
            font-size: 1.2em;
        `;
    else if (type == "hour")
      return `
            background: var(--color-primary-60);
            font-size: 1.2em;
        `;
    else if (type == "minute")
      return `
            background: var(--color-primary-50);
            font-size: 1.2em;
        `;
    else if (type == "second")
      return `
            background: var(--color-primary-40);
            font-size: 1.2em;
        `;
  }}
`;

export const CountdownLabel = styled.div`
  font-size: 0.8em;
`;

export const Button = styled.button`
  width: 100%;
  background: var(--color-primary);
  color: #ffffff;
  padding: 20px;
  margin: 30px auto auto auto;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (min-width: 600px) {
    width: fit-content;
  }

  svg {
    height: 1.2em;
    width: fit-content;
    color: #ffffff;
  }
`;

export const IframeGoogle = styled.iframe`
  border: none;
  overflow: hidden;
  display: ${({ show }) => (!!show ? "block" : "none")};
  height: 100vh;
  @media (min-width: 600px) {
    height: 550px;
  }
`;
