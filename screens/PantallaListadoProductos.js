import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import ProductoItem from '../components/shop/ProductoItem'

const PantallaListadoProductos = props => {

    const productos = useSelector(estado => estado.productos.productosDisponibles);

    const renderProducto = itemData => {
        return <ProductoItem 
                    titulo={itemData.item.titulo}
                    precio={itemData.item.precio}
                    imagen={itemData.item.urlImagen}
                />
    }

    return (
        <View style={styles.listado}>
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