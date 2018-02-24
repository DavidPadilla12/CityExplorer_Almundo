/**
 * @author: Jesus David Padilla
 * @description: Vista principal de la aplicación.
 * Se encarga de realizar la consulta a la Api que contiene los datos de las ciudades que se mostrarán
 * Crea y muestra el componente ListCities con la información por cada ciudad.
 */

import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import ListCities from '../components/list-cities';
import {getCities} from '../conections/api-data';

class Home extends Component {

  state = {
    cities: null
  }

  componentWillMount() {
    getCities().then(cities => this.setState({cities}))
  }

  render() {
    return (
      <View style={styles.loading}>
        {!this.state.cities && <ActivityIndicator size="large" color="#c3c3c3"/>}
        {this.state.cities && <ListCities cities={this.state.cities}/>}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home;