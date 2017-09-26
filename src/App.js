import React, { Component } from 'react';
import './App.css';
import MyButton from './components/myButton/myButton';
import MyStyleSheetButton from './components/myStyleSheetButton/myStyleSheetButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyTextField from './components/myTextField/myTextField';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <MyButton></MyButton>
          <MyStyleSheetButton></MyStyleSheetButton>
          <MyTextField />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
