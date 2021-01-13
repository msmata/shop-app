import { createAppContainer } from 'react-navigation';
import Colores from '../constantes/Colores';
import { createStackNavigator } from 'react-navigation-stack';
import PantallaListadoProductos from '../screens/PantallaListadoProductos';
import PantallaDetalleProducto from '../screens/PantallaDetalleProducto';
import PantallaCarrito from '../screens/PantallaCarrito';

const ShopNavigator = createStackNavigator({
    ListadoProductos: PantallaListadoProductos,
    DetalleProducto: PantallaDetalleProducto,
    Carrito: PantallaCarrito
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colores.primario
        },
        headerTintColor: 'white'
    }
});

export default createAppContainer(ShopNavigator);