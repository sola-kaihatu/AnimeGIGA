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
import { LOCAL_STORAGE_KEYS } from './services/constant';

// リストの表示数を解像度に合わせて変化させる
export const ReportListContext = createContext();

// ローカルストレージKeyが存在しなかった場合、作成
if (!localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITE_LIST)) {
  localStorage.setItem(LOCAL_STORAGE_KEYS.FAVORITE_LIST, JSON.stringify([]));
}

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
