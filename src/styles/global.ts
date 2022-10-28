import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props) => props.theme.color.gray100};
    color: ${(props) => props.theme.color.brown400};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.font.text.md};
    font-weight: 400;
  }

  :focus,
  button:focus {
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
