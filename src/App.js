import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Flex, CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import Nav from './components/Nav';
import Archive from './pages/Archive';
import ToDo from './pages/ToDo';
import './App.css';

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  fonts: {
    heading: "'Caveat', cursive",
    body: "'Caveat', cursive",
    monospace: "'Courier Prime', monospace",
  },
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <BrowserRouter>
        <Nav />
        <Flex 
          as="main" 
          p={3} 
          direction="column" 
          align="center"
        >
          <Route exact path="/"><ToDo /></Route>
          <Route path="/archive"><Archive /></Route>
        </Flex> 
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
