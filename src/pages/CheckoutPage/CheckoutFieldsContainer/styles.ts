import styled from 'styled-components';

export const FieldsSection = styled.section`
  background-color: ${(props) => props.theme.color.gray200};
  border-radius: ${(props) => props.theme.border.radius.md};
  margin-top: 1rem;
  padding: 2.5rem;
`;

export const FieldsSectionHeader = styled.header`
  align-items: flex-start;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  & h5 {
    color: ${(props) => props.theme.color.brown500};
    font-size: ${(props) => props.theme.font.text.lg};
    line-height: 1.3;
    font-weight: 400;
  }

  & span {
    color: ${(props) => props.theme.color.brown400};
    font-size: ${(props) => props.theme.font.text.md};
    line-height: 1.3;
  }
`;
