import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {Actions} from 'react-native-router-flux';

class SliderHome extends Component {
    render() {
        return (
            <Swiper>
                <View style={styles.slide_1}>
                    <Image style={styles.img} source={require('../assets/images/Slide.png')}/>
                    <Text style={styles.tittle}>City Explorer</Text>
                    <Text style={styles.body}>¡Aquí podrás conocer algunos datos básicos de ciudades!</Text>
                </View>
                <View style={styles.slide_2}>
                    <Image style={styles.img} source={require('../assets/images/Slide2.png')}/>
                    <Text style={styles.tittle}>Puntos de interés</Text>
                    <Text style={styles.body}>Los rincones infaltables por conocer...</Text>
                </View>
                <View style={styles.slide_3}>
                    <Image
                        style={styles.img}
                        source={require('../assets/images/DavidPadilla.jpg')}/>
                    <Text style={styles.tittle}>Demostración</Text>
                    <Text style={styles.body}>Y la propuesta de David Padilla para la prueba de semillero Almundo - Medellín.</Text>
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
    slide_1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#61B5B1',
        paddingHorizontal: 30
    },
    slide_2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A6BA35',
        paddingHorizontal: 30
    },
    slide_3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7931E',
        paddingHorizontal: 30
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
        height: 30,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#C66106',
        alignItems: 'center'
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 20
    }
})

export default SliderHome;