/**
 * @author: Jesus David Padilla
 * @description: Componente para la vista de detalle de ciudad.
 * Se basa en una vista con la imagen de la ciudad junto con alguna información básica sobre ella.
 */
import React, {Component} from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';

class CityImageDetail extends Component {
    render() {
        const {arPhotos, sbName, sbCountryFlag, sbFlag} = this.props.obImageDetail;
        return (
            <View>
                <ImageBackground
                    style={styles.img}
                    source={{
                    uri: arPhotos[0]
                }}>
                    <View style={styles.containerAlpha}>
                        <View>
                            <Text style={styles.txt}>{sbName}</Text>
                        </View>
                        <View style={styles.containerFlags}>
                            <Image
                                style={styles.imgFlag}
                                source={{
                                uri: sbCountryFlag
                            }}/>
                            <Image
                                style={styles.imgFlag}
                                source={{
                                uri: sbFlag
                            }}/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        height: 100
    },
    containerAlpha: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    containerFlags: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45
    },
    txt: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    imgFlag: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 20
    }
});

export default CityImageDetail;