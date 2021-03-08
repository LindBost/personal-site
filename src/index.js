import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Redux Store
import { Provider } from 'react-redux'
import {configureStore} from './store/configureStore'
import { rootReducer } from './store/rootReducer';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';

const store = configureStore(rootReducer);

ReactDOM.render(
  <ApolloProvider client={client}>
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
