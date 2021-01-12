import { createAppContainer } from 'react-navigation';
import PantallaListadoProductos from '../screens/PantallaListadoProductos';
import Colores from '../constantes/Colores';
import { createStackNavigator } from 'react-navigation-stack';

const ShopNavigator = createStackNavigator({
    ListadoProductos: PantallaListadoProductos
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colores.primario
        },
        headerTintColor: 'white'
    }
});

export default createAppContainer(ShopNavigator);