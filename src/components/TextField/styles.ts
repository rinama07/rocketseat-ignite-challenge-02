import styled from 'styled-components';

interface TextFieldContainerProps {
  width?: string | number;
}

export const TextFieldContainer = styled.div<TextFieldContainerProps>`
  ${(props) => (props.width ? `width: ${props.width}%` : 'flex: 1')};
  align-items: center;
  background-color: ${(props) => props.theme.color.gray300};
  border-radius: ${(props) => props.theme.border.radius.sm};
  border: 1px solid ${(props) => props.theme.color.gray400};
  color: ${(props) => props.theme.color.brown400};
  display: flex;
  gap: 0.25rem;
  justify-content: space-between;
  padding: 0 0.75rem;

  &:focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.yellow700};
  }

  & input {
    background: transparent;
    border: 0;
    flex: 1;
    font-size: ${(props) => props.theme.font.text.md};
    line-height: 1.3;
    max-width: 100%;
    padding: 0.75rem 0;

    &::placeholder {
      color: ${(props) => props.theme.color.brown300};
    }
  }

  & span {
    font-style: italic;
    font-size: ${(props) => props.theme.font.text.sm};
    line-height: 1.3;
  }
`;
