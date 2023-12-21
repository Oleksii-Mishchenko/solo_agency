import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store.ts';
import { Root } from './Root.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  // </Provider>,
);
