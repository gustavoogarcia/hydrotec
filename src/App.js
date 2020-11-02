import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './helpers/scrollToTop';
import Routes from './Routes';
import { GlobalStyle, hydrotecTheme } from './styles/global';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import * as S from './App.style';

export default function App() {
  return (
    <BrowserRouter>
			<ThemeProvider theme={hydrotecTheme}>
				<ScrollToTop>
          <S.App>
            <Header />
            <Routes />
          </S.App>
					<GlobalStyle />
				</ScrollToTop>
			</ThemeProvider>
	</BrowserRouter>
  );
}
