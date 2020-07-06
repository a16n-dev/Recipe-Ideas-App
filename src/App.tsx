import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { IUserInput } from './common/interface'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

//components
import SearchBar from './components/SearchBar/SearchBar'
//import CardGrid from './components/CardGrid/CardGrid'

const theme = createMuiTheme({
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
    SearchQuery: '',
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);
  }

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <div className='headerText'>Enter an ingredient...</div>
        <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)} />
        {/*<CardGrid SearchQuery={UserInput.SearchQuery} />*/}
      </MuiThemeProvider>
    </div>
  );
}

export default App;
