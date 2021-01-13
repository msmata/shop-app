import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Colores from '../constantes/Colores';

const PantallaDetalleProducto = props => {

    const idProducto = props.navigation.getParam('idProducto');
    const productoSeleccionado = useSelector(estado => estado.productos.productosDisponibles.find(producto => producto.id === idProducto));

    return (
        <ScrollView>
            <Image style={styles.imagen} source={{uri: productoSeleccionado.urlImagen}} />
            <View style={styles.botonera}>
                <Button color={Colores.primario} style={styles.btnAgregarCarrito} title='Añadir al carrito' />
            </View>
            <Text style={styles.precio}>$ {productoSeleccionado.precio.toFixed(2)}</Text>
            <Text style={styles.descripcion}>{productoSeleccionado.descripcion}</Text>
        </ScrollView>
    );
};

PantallaDetalleProducto.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('tituloProducto')
    };
}

const styles = StyleSheet.create({
    imagen: {
        width: '100%',
        height: 300
    },
    botonera: {
        marginVertical: 10,
        alignItems: 'center'
    },
    btnAgregarCarrito: {

    },
    precio: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    descripcion: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    }
});

export default PantallaDetalleProducto;