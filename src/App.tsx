import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PurchaseContextProvider } from './contexts/purchaseContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PurchaseContextProvider>
          <Router />
        </PurchaseContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
