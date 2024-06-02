import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <Provider store={store}>
      <Chat />
    </Provider>
  );
}

export default App;
