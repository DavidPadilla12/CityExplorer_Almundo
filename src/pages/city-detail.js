/**
 * @author: Jesus David Padilla
 * @description: Vista con el detalle de una ciudad seleccionada.
 * Muestra alguna información general de la ciudad implementando los componentes : [CityImageDetail, CityPlaceDetail]
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    Modal,
    Button,
    TextInput
} from 'react-native';
import CityImageDetail from '../components/city-image-detail';
import CityPlaceDetail from '../components/city-places-detail';

class CityDetail extends Component {
    state = {
        modalVisible: false,
        text: 'Nota de ciudad'
    };

    openModal() {
        this.setState({modalVisible: true});
    }

    closeModal() {
        this.setState({modalVisible: false});
    }
    render() {
        const obImageDetail = {
            arPhotos,
            sbName,
            sbCountryFlag,
            sbFlag
        } = this.props;
        const {dtFoundation, sbPopulation} = this.props;
        const arSities = this.props.arPlacesInterest

        return (
            <View style={{
                backgroundColor: '#FFFFFF'
            }}>
                <CityImageDetail obImageDetail={obImageDetail}/>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Fundación:
                    </Text>
                    <Text style={styles.value}>{dtFoundation}</Text>
                </View>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Población:
                    </Text>
                    <Text style={styles.value}>{sbPopulation}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => this.openModal()}>
                    <Text style={styles.textButton}>
                        ¡Guardar en favoritos!
                    </Text>
                </TouchableOpacity>
                <CityPlaceDetail arSities={arSities}/>

                <Modal
                    transparent={true}
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    onRequestClose={() => this.closeModal()}>
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <Text style={styles.titleModal}>Archivar</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}/>
                            <View style={styles.containerButtons}>
                                <TouchableOpacity style={styles.btnModal} onPress={() => this.closeModal()}>
                                    <Text style={styles.textButton}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.btnModal, styles.btnModalRight]}
                                    onPress={() => this.closeModal()}>
                                    <Text style={styles.textButton}>Guardar</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20
    },
    label: {
        flex: 1,
        fontWeight: 'bold'
    },
    value: {
        flex: 3
    },
    button: {
        width: '100%',
        paddingVertical: 10,
        backgroundColor: '#E53D30',
        alignItems: 'center'
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 18
    },
    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    innerContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        height: 200,
        width: '90%',
        shadowColor: "#000000",
        shadowOpacity: 0.4,
        shadowRadius: 4,
        shadowOffset: {
            height: 2,
            width: 0
        },
        overflow: 'hidden'
    },
    titleModal: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        fontWeight: 'bold',
        fontSize: 18,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#F7F7F7',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1
    },
    containerButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    textInput: {
        marginTop: 30,
        marginHorizontal: 20,
        height: 30,
        fontSize: 16,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        color: '#CCCCCC'
    },
    btnModal: {
        width: '50%',
        paddingVertical: 10,
        backgroundColor: '#E53D30',
        alignItems: 'center'
    },
    btnModalRight: {
        borderLeftColor: '#F5F5F5',
        borderLeftWidth: 1
    }
});

export default CityDetail;