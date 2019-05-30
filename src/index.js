import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './App';
import muiTheme from './services/muiTheme';
import '@babel/polyfill';
import 'normalize.css';
import './services/defaultStyle.css';

// export const PageContext = createContext();
export const FullScreenDialogContext = createContext();

ReactDOM.render(
  <>
    <CssBaseline />
    <MuiThemeProvider theme={muiTheme}>
      <HashRouter>
        <App />
      </HashRouter>
    </MuiThemeProvider>
  </>,
  document.getElementById('root')
);
