import { Outlet } from 'react-router-dom';

import { PageHeader } from '../../components/PageHeader';

import { LayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <PageHeader />

      <Outlet />
    </LayoutContainer>
  );
}
