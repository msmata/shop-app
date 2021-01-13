import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CarritoItem = props => {
    return (
        <View style={styles.itemCarrito}>
            <View style={styles.datosItem}>
                <Text style={styles.cantidad}>{props.cantidad}</Text>
                <Text style={styles.textoPrincipal}>{props.titulo}</Text>
            </View>
            <View style={styles.datosItem}>
                <Text style={styles.textoPrincipal}>$ {props.precio.toFixed(2)}</Text>
                <TouchableNativeFeedback onPress={props.onBorrar}>
                    <Ionicons name='md-trash' size={23} color='red' />
                </TouchableNativeFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemCarrito: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    datosItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cantidad: {
        color: '#888',
        fontSize: 16, 
        paddingHorizontal: 10
    },
    textoPrincipal: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10
    }
});

export default CarritoItem;