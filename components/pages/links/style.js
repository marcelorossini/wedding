import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--color-primary);
  padding: var(--padding-default);

  h2 {
    color: #ffffff;
    text-align: center;
  }

  display: flex;
  flex-direction: column;
  gap: var(--padding-default);
`;

export const ButtonList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  padding: 5px;
  color: #ffffff;
  svg {
    height: 2.5em;
    color: #ffffff;
  }
  span {
    font-size: 1em;
    height: 2.2em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    border: 1px solid red;
    display: contents;
  }
  cursor: pointer;
`;
