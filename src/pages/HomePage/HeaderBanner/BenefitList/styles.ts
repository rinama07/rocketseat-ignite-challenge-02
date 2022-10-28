import styled from 'styled-components';

export const ListContainer = styled.div`
  display: grid;
  gap: 1.25rem 2.5rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4.125rem;
`;

export const BenefitItem = styled.div`
  align-items: center;
  display: flex;
  gap: 0.75rem;

  & span {
    color: ${(props) => props.theme.color.brown400};
    font-size: ${(props) => props.theme.font.text.lg};
    line-height: 1.3;
  }
`;
