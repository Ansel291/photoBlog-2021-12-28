import React from 'react';
import { ThemeProvider } from 'styled-components'  
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import content from './content'

const theme = {
  colors: {
    header: '-webkit-linear-gradient(360deg,#949494 10%,#efefef 360%); linear-gradient(360deg,#949494 10%,#efefef 360%);',
    body: '#fff',
    footer:  '#003333',
  }, 
  tablet: '769px',
  desktop: '1000px',
}

function App() {
  return (
    <ThemeProvider theme = {theme} >
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item}/>
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;



