import React, { useState } from 'react';
import './App.css';
import { IUserInput } from './common/interface'
import { createMuiTheme, Box, MuiThemeProvider, CssBaseline, Typography } from '@material-ui/core';

//components
import SearchBar from './components/SearchBar/SearchBar'
import CardGrid from './components/CardGrid/CardGrid'
import AppTitleBar from './components/AppTitleBar/AppTitleBar'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#91c12f',
    },
    secondary: {
      main: '#fcd734',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

function App() {

  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: null,
  });

  function SetUserInput(a: IUserInput) {
    setUserInput(a);
  }

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <AppTitleBar />
        <Box mt={6} mb={5}>
          <Typography>Enter an ingredient to explore recipes:</Typography>
        </Box>
        <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)} />
        <CardGrid SearchQuery={UserInput.SearchQuery} />
        <CssBaseline />
      </MuiThemeProvider>

    </div>
  );
}

export default App;
