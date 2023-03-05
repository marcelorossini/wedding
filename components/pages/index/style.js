import styled from "styled-components";

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
  box-shadow: inset 0px 82px 141px -88px rgba(0,0,0,0.2);
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  z-index: 100%;
  padding: calc(50vh - 5em) var(--padding-default) var(--padding-default) var(--padding-default);
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 100%;
  //max-width: 250px;
  color: var(--color-primary);
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
  box-shadow: 0px 0px 50px -15px rgba(0,0,0,0.2);
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
