import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import SliderView from './pages/slider-home';
import HomeView from './pages/home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="slider" component={SliderView} hideNavBar={true}/>
          <Scene key="home" component={HomeView} title="Ciudades" left={() => null}/>
        </Scene>
      </Router>
    );
  }
}
