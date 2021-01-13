import { createAppContainer } from 'react-navigation';
import Colores from '../constantes/Colores';
import { createStackNavigator } from 'react-navigation-stack';
import PantallaListadoProductos from '../screens/PantallaListadoProductos';
import PantallaDetalleProducto from '../screens/PantallaDetalleProducto';

const ShopNavigator = createStackNavigator({
    ListadoProductos: PantallaListadoProductos,
    DetalleProducto: PantallaDetalleProducto
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colores.primario
        },
        headerTintColor: 'white'
    }
});

export default createAppContainer(ShopNavigator);