import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { useSelector } from 'react-redux';
import Colores from '../constantes/Colores';

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
                <Text>PRODUCTOS</Text>
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