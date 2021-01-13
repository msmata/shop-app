import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import * as AccionCarrito from '../store/actions/carrito'

import ProductoItem from '../components/shop/ProductoItem'
import CustomHeaderButton from '../components/CustomHeaderButton';

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

PantallaListadoProductos.navigationOptions = navData => {
    return {
        headerTitle: 'Todos los productos',
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Carrito'
                iconName='md-cart'
                onPress={() => {
                    navData.navigation.navigate('Carrito')
                }}
            />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    listado: {
        flex: 1
    }
});

export default PantallaListadoProductos;