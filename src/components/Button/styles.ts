import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.border.radius.md};
  border: 0;
  cursor: pointer;
  display: flex;
  gap: 0.25rem;
  padding: 0 0.5rem;
`;

export const IconButton = styled.button`
  border-radius: ${(props) => props.theme.border.radius.md};
  border: 0;
  cursor: pointer;
  line-height: 0;
  padding: 0.625rem 0.5rem;
`;
