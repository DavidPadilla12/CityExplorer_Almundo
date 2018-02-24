/**
 * @author: Jesus David Padilla
 * @description: Componente utilizado en la vista Home, se utiliza como registro del FlatList de ciudades.
 * Implementa un slider de imagenes, botones y redirecciones hacia videos en youtube y georeferencia en googlemaps browser.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Linking
} from 'react-native';
import SVGImage from 'react-native-svg-image';
import Swiper from 'react-native-swiper';
import {Actions} from 'react-native-router-flux';

class CityCard extends Component {

    render() {
        const {arPhotos, sbName, sbDescription, sbTrailer, sbUbication} = this.props.city
        return (
            <View style={styles.card}>
                <View style={styles.containerSwipper}>
                    <Swiper loop={false} dotColor={'#F5F5F5'} activeDotColor={'#E53D30'}>
                        <View style={styles.containerViewSlider}>
                            <Image
                                style={styles.img}
                                source={{
                                uri: arPhotos[0]
                            }}/>
                        </View>
                        <View style={styles.containerViewSlider}>
                            <Image
                                style={styles.img}
                                source={{
                                uri: arPhotos[1]
                            }}/>
                        </View>
                        <View style={styles.containerViewSlider}>
                            <Image
                                style={styles.img}
                                source={{
                                uri: arPhotos[2]
                            }}/>
                        </View>
                        <View style={styles.containerViewSlider}>
                            <Image
                                style={styles.img}
                                source={{
                                uri: arPhotos[3]
                            }}/>
                        </View>
                    </Swiper>
                </View>
                <View style={styles.containerFeatures}>
                    <View style={styles.featureNombre}>
                        <Text style={styles.tittle}>{sbName}</Text>
                    </View>
                    <View style={styles.featureBtn}>
                        <TouchableOpacity onPress={() => Linking.openURL(sbTrailer)}>
                            <SVGImage
                                style={styles.iconFeature}
                                source={{
                                uri: 'https://image.flaticon.com/icons/svg/174/174883.svg'
                            }}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.featureBtn}>
                        <TouchableOpacity onPress={() => Linking.openURL(sbUbication)}>
                            <SVGImage
                                style={styles.iconFeatureEnd}
                                source={{
                                uri: 'https://image.flaticon.com/icons/svg/148/148842.svg'
                            }}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.description}>{sbDescription}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Actions.cityDetail(this.props.city)}>
                    <Text style={styles.textButton}>
                        ¡Ver ciudad!
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 5
    },
    containerSwipper: {
        height: 200,
        width: '100%'
    },
    containerViewSlider: {
        height: 180,
        width: '100%'
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    containerFeatures: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    featureNombre: {
        flex: 3
    },
    featureBtn: {
        flex: 1
    },
    tittle: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },
    iconFeature: {
        height: 40,
        width: 40,
        marginHorizontal: 10
    },
    iconFeatureEnd: {
        height: 40,
        width: 40,
        marginLeft: 10
    },
    description: {
        textAlign: 'justify',
        fontSize: 14,
        color: '#9BA4AD',
        marginVertical: 15
    },
    button: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: '#E53D30',
        alignItems: 'center'
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 18
    }
});

export default CityCard;