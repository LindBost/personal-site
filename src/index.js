import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Redux Store
import { Provider } from 'react-redux'
import {configureStore} from './store/configureStore'
import { rootReducer } from './store/rootReducer';

const store = configureStore(rootReducer);

/*
var client = contentful.createClient({
  space: 'skmmc58877rx',
  accessToken: 'umYBz9auqg6mb8Pdp-43o0D2_6ob6C-BSn2TPJvVweI' })

  client.getEntries().then(entries => {
    entries.items.forEach(entry => {
      if(entry.fields) {
        console.log(entry.fields)
      }
    })
  })
  */

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
