import React from 'react';
import { View, Text, StyleSheet, Button, FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import Colores from '../constantes/Colores';
import CarritoItem from '../components/shop/CarritoItem';

const PantallaCarrito = props => {

    const totalCarrito = useSelector(estado => estado.carrito.importeTotal);
    const itemsCarrito = useSelector(estado => {
        const itemCarritoTransform = [];
        for (const key in estado.carrito.items) {
            itemCarritoTransform.push({
                idProducto: key,
                tituloProducto: estado.carrito.items[key].titulo,
                precioProducto: estado.carrito.items[key].precio,
                cantidad: estado.carrito.items[key].cantidad,
                total: estado.carrito.items[key].total
            });       
        }

        return itemCarritoTransform;
    });

    const renderItemCarrito = itemData => {
        return (
            <CarritoItem
                cantidad={itemData.item.cantidad}
                precio={itemData.item.total}
                titulo={itemData.item.tituloProducto}
                onBorrar={() => {}}
            />
        );
    }

    return (
        <View style={styles.screen}>
            <View style={styles.resumen}>
                <Text style={styles.textoResumen}>
                    Total: <Text style={styles.importeTotal}>$ {totalCarrito.toFixed(2)}</Text>
                </Text>
                <Button 
                    title='Comprar ahora' 
                    color={Colores.secundario} 
                    disabled={itemsCarrito.length === 0}
                />
            </View>
            <View>
                <FlatList
                    data={itemsCarrito}
                    renderItem={renderItemCarrito}
                    keyExtractor={(item, index) => item.idProducto}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        margin: 20
    }, 
    resumen: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    textoResumen: {
        fontSize: 18,
        fontWeight: 'bold'
    }, 
    importeTotal: {
        color: Colores.secundario
    }
});

export default PantallaCarrito;