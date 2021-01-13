import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Colores from '../constantes/Colores';

const CustomHeaderButton = props => {
    return (
        <HeaderButton 
            {...props} 
            IconComponent={Ionicons} 
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : Colores.primario}
        />
    );
};

export default CustomHeaderButton;