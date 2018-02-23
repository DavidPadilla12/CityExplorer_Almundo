import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

class CityCard extends Component {

    render() {
        const {
            arPhotos,
            sbName,
            sbDescription,
            sbCountryFlag,
            sbFlag,
            sbPopulation
        } = this.props.city
        // const src = '../../assets/images/hotels/' const data = this.props.hotel.image
        // const img = src.concat(data)
        return (
            <View style={styles.card}>
                <ImageBackground
                    style={styles.img}
                    source={{
                    uri: arPhotos[0]
                }}>
                    <View style={styles.containerPhoto}>
                        <Text style={styles.tittle}>{sbName}</Text>

                        <View style={styles.containerFlags}><Image
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
                <Text style={styles.description}>{sbDescription}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>
                        Ver ciudad!
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
    img: {
        borderRadius: 50,
        width: '100%',
        height: 225,
        marginBottom: 10,
        resizeMode: 'cover',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerPhoto: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerFlags: {
        flex: 1,
        flexDirection: 'row'
    },
    imgFlag: {
        height: 50,
        width: 50,
        marginHorizontal: 20,
        borderRadius: 25
    },
    tittle: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        width: '100%',
        marginTop: 60,
        marginBottom: 20
    },
    description: {
        textAlign: 'justify',
        fontSize: 14,
        fontStyle: 'italic',
        color: '#9BA4AD',
        marginHorizontal: 20,
        marginVertical: 15
    },
    button: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor : '#E53D30',
        alignItems: 'center'
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 18
    }
});

export default CityCard;