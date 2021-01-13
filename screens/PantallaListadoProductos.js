import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as AccionCarrito from '../store/actions/carrito'

import ProductoItem from '../components/shop/ProductoItem'

const PantallaListadoProductos = props => {

    const productos = useSelector(estado => estado.productos.productosDisponibles);
    const dispatch = useDispatch();

    const renderProducto = itemData => {
        return <ProductoItem 
                    titulo={itemData.item.titulo}
                    precio={itemData.item.precio}
                    imagen={itemData.item.urlImagen}
                    verDetalle={() => {
                        props.navigation.navigate('DetalleProducto', {
                            idProducto: itemData.item.id,
                            tituloProducto: itemData.item.titulo
                        })
                    }}
                    agregarCarrito={() => {
                        dispatch(AccionCarrito.addToCart(itemData.item));
                    }}
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