import { Outlet } from 'react-router-dom';

import { Header, LayoutContainer, Main } from './styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header>Pages header</Header>

      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
}
