import styled from 'styled-components';

export const SectionContainer = styled.section`
  flex: 1;
  margin-top: 8.75rem;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2.125rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
