import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import styled from '@emotion/styled'

const themeUIComponents = {
  a: styled('a')((props) => props.theme.styles.a),
}

console.log(themeUIComponents)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} components={themeUIComponents}>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
