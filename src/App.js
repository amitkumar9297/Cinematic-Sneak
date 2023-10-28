import React, { useEffect, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Help from './pages/Help';

function App() {

  // <<<<<<<<<<<<<------- BELOW WE CALCULATE SCREEN WIDTH AND ADJUST HOME ------->>>>>>>>>>>>>

  const [screenWidth, setScreenWidth] = useState({
    winWidth: window.screen.width,
  });

  const detectScreenWidth = () => {
    setScreenWidth(
      {
        winWidth: window.screen.width,
      }
    )
  }
  useEffect(() => {
    window.addEventListener('resize', detectScreenWidth);
    return () => {
      window.removeEventListener('resize', detectScreenWidth);
    }
  }, [screenWidth]);

  // <<<<<<<<<<<<<------- ABOVE WE CALCULATE SCREEN WIDTH AND ADJUST HOME ------->>>>>>>>>>>>>

  return (
    <>
      <ChakraProvider theme={theme}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Router>
          <Header screenWidth={screenWidth.winWidth} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<About />} />
            <Route path='/help' element={<Help />} />
          </Routes>
        </Router>
        <Footer />
      </ChakraProvider >
    </>
  );
}

export default App;
