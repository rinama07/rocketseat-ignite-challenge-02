import styled from 'styled-components';

export const HomeContainer = styled.main`
  background-color: ${(props) => props.theme.color.gray100};
  margin: 0 auto;
  max-width: calc(100vw - 20rem);
  padding: 5.875rem 0;
  width: 100%;
`;
