import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const PantallaDetalleProducto = props => {

    const idProducto = props.navigation.getParam('idProducto');
    const productoSeleccionado = useSelector(estado => estado.productos.productosDisponibles.find(producto => producto.id === idProducto));

    return (
        <View>
            <Text>El detalle del producto {productoSeleccionado.titulo}</Text>
        </View>
    );
};

PantallaDetalleProducto.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('tituloProducto')
    };
}

const styles = StyleSheet.create({

});

export default PantallaDetalleProducto;