import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from "redux"
import { Provider } from "react-redux"

const globalState = {
  data: [12, 4, 21, 6, 9, 17],
  label: ['Merah', 'Biru', 'Kuning', 'Hijau', 'Ungu', 'Orens']
}

const rootReducer = ( state = globalState, action) => {
  return state
}

const globalStore = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
