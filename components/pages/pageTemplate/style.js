import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  z-index: 100;
  padding: var(--padding-default) calc(var(--padding-default) * 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--padding-default);
`;

export const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    height: 40vh;
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
  }
`;
