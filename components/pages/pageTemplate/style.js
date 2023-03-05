import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  z-index: 100;
  padding: var(--padding-default) calc(var(--padding-default) * 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--padding-default);
  background: url("./assets/texture.jpg") no-repeat;
  background-size: cover;
  background-position: top center;
`;

export const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  svg {
    width: 20px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  //max-width: 250px;
  color: var(--color-primary);
`;

export const Header = styled.div`
  font-size: 1.5em;
  display: flex;
  color: var(--color-primary);
  text-align: center;
  span {
    font-family: "TT Hoves" !important;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--padding-default);

  p {
    font-family: "TT Hoves";
    text-align: center;
  }
  .mapouter {
    height: 30vh;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0px 0px 50px -15px rgba(0,0,0,0.2);
  }
  a {
    width: 100%;
  }
  button {
    width: 100%;
    background: var(--color-primary);
    padding: 10px;
    font-size: 1.2em;
    color: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 0px 50px -15px rgba(0,0,0,0.2);
  }
`;
