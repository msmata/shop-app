import React from 'react';
import { View, Text, StyleSheet, Image, Button, Platform } from 'react-native';
import Colores from '../../constantes/Colores';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';

const ProductoItem = props => {

    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21){
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <TouchableComponent onPress={props.verDetalle}>
            <View style={styles.producto}>
                <View style={styles.contenedorImagen}>
                    <Image style={styles.imagen} source={{uri: props.imagen}} />
                </View>
                <View style={styles.detalle}>
                    <Text style={styles.titulo}>{props.titulo}</Text>
                    <Text style={styles.precio}>$ {props.precio.toFixed(2)}</Text>
                </View>
                <View style={styles.botonera}>
                    <Button color={Colores.primario} title="Ver detalle" onPress={props.verDetalle} />
                    <Button color={Colores.primario} title="Añadir al carrito" />
                </View>
            </View>
        </TouchableComponent>
    );
};

const styles = StyleSheet.create({
    producto: {
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    contenedorImagen: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    imagen: {
        width: '100%',
        height: '100%'
    },
    titulo: {
        fontSize: 18,
        marginVertical: 4
    },
    precio: {
        fontSize: 14,
        color: '#888'
    },
    botonera: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    },
    detalle: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    }
});

export default ProductoItem;