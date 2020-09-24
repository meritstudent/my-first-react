import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import Nav from './components/Nav';
import Home from './pages/Home';
import ToDo from './pages/ToDo';
import './App.css';

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
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
        <Route exact path="/"><Home /></Route>
        <Route path="/todo"><ToDo /></Route>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
