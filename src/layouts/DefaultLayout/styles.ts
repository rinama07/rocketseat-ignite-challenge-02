import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.header`
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  padding: 1rem 2.5rem;
`;

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;
