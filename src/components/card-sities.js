/**
 * @author: Jesus David Padilla
 * @description: Componente utilizado en el FlatList de los sitios de interés en el detalle de las ciudades.
 * Muestra una imagen, nombre y descripción de los sitios de interés.
 */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class SitiesCard extends Component {

    render() {
        const {PhotoPlace, sbNamePlace, sbDescription} = this.props.arSities;
        return (
            <View style={styles.containerCardSities}>
                <View style={styles.containerPhoto}>
                    <Image
                        style={styles.img}
                        source={{
                        uri: PhotoPlace
                    }}/></View>
                <View style={styles.containerInfo}>
                    <View style={styles.containerText}>
                        <Text style={styles.textPlaceName}>{sbNamePlace}</Text>
                    </View>
                    <View style={styles.containerText}>
                        <Text style={styles.textPlaceDescription}>{sbDescription}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerCardSities: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#F8F8F8',
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    containerPhoto: {
        flex: 1,
    },
    img: {
        width: '100%',
        height: '100%'
    },
    containerInfo: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    containerText: {
        marginVertical: 8,
        marginHorizontal: 8
    },
    textPlaceName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textPlaceDescription: {
        fontSize: 12,
        textAlign: 'justify',
        color: '#9BA4AD'
    }
});

export default SitiesCard;