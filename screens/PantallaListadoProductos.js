import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const PantallaListadoProductos = props => {

    const productos = useSelector(estado => estado.productos.productosDisponibles);

    const renderProducto = itemData => {
        return <Text>{itemData.item.titulo}</Text>
    }

    return (
        <View style={styles.listado}>
            <Text>Productos: {productos.length}</Text>
            <FlatList data={productos} renderItem={renderProducto} />
        </View>
    );
};

const styles = StyleSheet.create({
    listado: {
        flex: 1
    }
});

export default PantallaListadoProductos;