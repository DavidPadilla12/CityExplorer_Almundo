/**
 * @author: Jesus David Padilla
 * @description: Componente FlatList con cada uno de los registros de sitios de interés por ciudad.
 * Este componente implementa el componente SitiesCard
 */

import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import SitiesCard from './card-sities';

class CitySitiesDetail extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#E8E8E8'}}>
                <FlatList
                    data={this.props.arSities}
                    renderItem={({item}) => <SitiesCard arSities={item} key={item.id}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default CitySitiesDetail;