import React from 'react';
import './App.sass';
import { Provider } from 'react-redux';
import store from './store/Store';
import MainPageContainer from './pages/mainPage/mainPageContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainPageContainer />
      </div>
    </Provider>
  );
}

export default App;
