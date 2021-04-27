import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz';
import { StoreProvider}  from "./mobx";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Quiz />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

