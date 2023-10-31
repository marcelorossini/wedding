import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;
  z-index: 100;
  padding: var(--padding-default) calc(var(--padding-default) * 2);
`;

export const WelcomeStyled = styled.div`
  text-align: center;
  color: var(--color-primary);
  
  h2 {
    padding: var(--padding-default);
    text-align: center;
  }

  p {
    font-family: 'TT Hoves'; 
  }
`;
