/**
 * @author: Jesus David Padilla
 * @description: Clase que define el esrutamiento de las páginas con las que cuenta la aplicación.
 */

import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import SliderView from './pages/slider-home';
import HomeView from './pages/home';
import CityDetailView from './pages/city-detail';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="slider" component={SliderView} hideNavBar={true}/>
           {/* Se elimina la parte izquierda del topbar de la vista Home para que no aparezca el botón atrás. */}
          <Scene key="home" component={HomeView} title="Ciudades" left={() => null}/>
          <Scene key="cityDetail" component={CityDetailView} title="Detalle"/>
        </Scene>
      </Router>
    );
  }
}