import styled from "styled-components";

export const Wrapper = styled.div`
  padding: var(--padding-default);
  text-align: center;
  font-family: "TT Hoves";
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-50);
  gap: var(--padding-default);
  max-width: calc(var(--max-width) / 2);
  margin: 0 auto;    
`;

export const Social = styled.div`
  display: flex;
  gap: var(--padding-default);
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    height: ${({ size }) => size};
  }
`;

export const Logo = styled.div`
  width: 100%;
  //max-width: 250px;
  color: var(--color-primary);
`;
