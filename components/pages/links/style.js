import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--color-primary);

  & > div {
    max-width: var(--max-width);
    margin: 0 auto;    
    padding: var(--padding-default);

    h2 {
      color: #ffffff;
      text-align: center;
    }

    display: flex;
    flex-direction: column;
    gap: var(--padding-default);
  }
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
  margin-bottom: var(--padding-default);
  svg {
    height: 2.5em;
    color: #ffffff;
  }
  a {
    display: contents;
  }
  span {
    font-size: 0.9em;
    height: 2.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "TT Hoves" !important;
    text-transform: uppercase;
    line-height: 1.2em;
  }
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    background: #ffffff;
    color: var(--color-primary);
    border-radius: 4px;
    box-shadow: 0px 0px 50px -15px rgba(0, 0, 0, 0.2);
    svg {
      color: var(--color-primary);
    }
  }
`;
