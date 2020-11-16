import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const theme = createMuiTheme({
    palette: {
      type: "dark",
    }
  });


ReactDOM.render(
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
        <App />
    </Provider>
    </ThemeProvider>, 
    document.getElementById('root')
);