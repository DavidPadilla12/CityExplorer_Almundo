/**
 * @author: Jesus David Padilla
 * @description: Componente FlatList con cada uno de los registros de ciudades.
 * Este componente implementa el componente CityCard
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import CityCard from './city-card';

class ListCities extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: '#E8E8E8'
            }}>
                <FlatList
                    data={this.props.cities}
                    renderItem={({item}) => <CityCard city={item} key={item.id}/>}
                    keyExtractor={(item, index) => index.toString()}/>
            </View>
        )
    }
}

export default ListCities;