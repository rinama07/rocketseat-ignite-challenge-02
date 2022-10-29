import styled from 'styled-components';

export const FieldContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.color.gray400};
  border-radius: ${(props) => props.theme.border.radius.md};
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem;
  width: 4.5rem;

  &:focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.gray500};
  }

  & svg {
    color: ${(props) => props.theme.color.purple500};
    cursor: pointer;
  }
`;

export const ControlButton = styled.button`
  background-color: transparent;
  border: 0;
  line-height: 0;

  &:disabled {
    opacity: 0.4;
  }
`;

export const FieldInput = styled.input`
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.color.brown700};
  line-height: 1.3;
  text-align: center;
  width: 60%;
`;
