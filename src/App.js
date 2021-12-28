import React from 'react';
import { ThemeProvider } from 'styled-components'  
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';
import GlobalStyles from './components/styles/Global';

const theme = {
  colors: {
    header: '-webkit-linear-gradient(360deg,#949494 10%,#efefef 360%); linear-gradient(360deg,#949494 10%,#efefef 360%);',
    body: '#fff',
    footer:  '#000',
  }, 
  mobile: '481px',
  tablet: '769px',
  desktop: '1000px',
}

function App() {
  return (
    <ThemeProvider theme = {theme} >
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;