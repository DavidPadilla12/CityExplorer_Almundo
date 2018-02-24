/**
 * @author: Jesus David Padilla
 * @description: Vista inicial de la aplicación.
 * Se muestra un slider (react-native-swiper) con 3 views en donde la última posee un botón para redirigir al home
 * de la aplicación.
 */

import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {Actions} from 'react-native-router-flux';

class SliderHome extends Component {
    render() {
        return (
            <Swiper loop={false} activeDotColor={'#E53D30'}>
                <View style={[styles.slide, styles.slide_1]}>
                    <Image
                        style={styles.img}
                        source={require('../assets/images/Slide.png')}
                        alt="Imagen CityExplorer"/>
                    <Text style={styles.tittle}>City Explorer</Text>
                    <Text style={styles.body}>¡Aquí podrás conocer algunos datos básicos de ciudades!</Text>
                </View>
                <View style={[styles.slide, styles.slide_2]}>
                    <Image
                        style={styles.img}
                        source={require('../assets/images/Slide2.png')}
                        alt="Imagen punto de interés"/>
                    <Text style={styles.tittle}>Puntos de interés</Text>
                    <Text style={styles.body}>Los rincones infaltables por conocer...</Text>
                </View>
                <View style={[styles.slide, styles.slide_3]}>
                    <Image
                        style={styles.img}
                        source={require('../assets/images/Slide3.png')}
                        alt="Imagen logotipo Almundo"/>
                    <Text style={styles.tittle}>Demostración</Text>
                    <Text style={styles.body}>Una prueba para Almundo - Medellín</Text>
                    <Text style={styles.body}>Realizada por Jesús David Padilla</Text>
                    <TouchableOpacity style={styles.button} onPress={() => Actions.home()}>
                        <Text style={styles.textButton}>
                            ¡Empezar!
                        </Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    slide_1: {
        backgroundColor: '#61B5B1'
    },
    slide_2: {
        backgroundColor: '#A6BA35'
    },
    slide_3: {
        backgroundColor: '#ff9800'
    },
    img: {
        borderRadius: 125,
        width: 250,
        height: 250,
        marginBottom: 10
    },
    tittle: {
        color: '#494E5A',
        fontSize: 30,
        fontWeight: 'bold'
    },
    body: {
        color: '#f5f5f5',
        fontSize: 14
    },
    button: {
        marginTop: 40,
        paddingVertical: 15,
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#C66106',
        alignItems: 'center'
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 20
    }
})

export default SliderHome;