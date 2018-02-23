import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import CityCard from './city-card';

class ListCities extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#E8E8E8'}}>
                <FlatList
                    data={this.props.cities}
                    renderItem={({item}) => <CityCard city={item}/>}
                />
            </View>
        )
    }
}

export default ListCities;