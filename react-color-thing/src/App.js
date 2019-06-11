import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ColorInput from './components/colorInput';
import ColorOutput from './components/colorOutput';
import MeaningOutput from './components/meaningOutput';
import store from './store.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ColorInput clickHandler={this.getColors} newColor={store.getState().newColor} data={store.getState().data} />
          <ColorOutput data={store.getState().data} mode={store.getState().mode} />
          <div id="vr">&nbsp;</div>
          <MeaningOutput meaning={store.getState().baseColor} />
        </div>
      </Provider>
    );
  }
}

export default App;
