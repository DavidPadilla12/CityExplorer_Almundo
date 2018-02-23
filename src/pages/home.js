import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, ActivityIndicator} from 'react-native';
import ListCities from '../components/list-cities';
import {getCities} from '../api-data';

class Home extends Component {

  state = {
    cities: null
  }

  componentWillMount() {
    getCities().then(cities => this.setState({cities}))
  }

  render() {
    return (
      <View>
        {!this.state.cities && <ActivityIndicator size="large"/>}
        {this.state.cities && <ListCities cities={this.state.cities}/>}
      </View>

    );
  }
}

export default Home;