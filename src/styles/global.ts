import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props) => props.theme.color.black};
    color: ${(props) => props.theme.color.primary};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.text.md};
    font-weight: 400;
  }

  :focus,
  button:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.secondary};
    outline: transparent;
  }
  
  input[type=number] {
    -moz-appearance: textfield;
    
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`;
