import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;  
  z-index: 100;
  padding: var(--padding-default) calc(var(--padding-default) * 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--padding-default);
  background: url("./assets/texture.jpg") no-repeat;
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
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
  max-width: 768px;
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
  max-width: var(--max-width);
  margin: o auto;  
  padding-bottom: 100px;

  p {
    font-family: "TT Hoves";
    text-align: center;
  }
  h1, h2, h3, h4, h5, h6 { 
    color: var(--color-primary);
    font-family: "TT Hoves";
    text-transform: uppercase;
  }
  .fullWidth {
    width: 100%;
  }
  .mapouter {
    width: 100%;
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
  img {
    width: 100%;
  }
`;
