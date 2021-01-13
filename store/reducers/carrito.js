import { ADD_CART } from "../actions/carrito";
import ItemCarrito from "../../models/itemCarrito";

const estadoInicial = {
    items: {},
    importeTotal: 0
};

export default (estado = estadoInicial, action) => {
    switch(action.type) {
        case ADD_CART:
            const productoAgregado = action.producto;
            const tituloProducto = productoAgregado.titulo;
            const precioProducto = productoAgregado.precio;

            let carrito;
            
            if (estado.items[productoAgregado.id]) {

                carrito = new ItemCarrito(
                    estado.items[productoAgregado.id].cantidad + 1,
                    tituloProducto,
                    precioProducto,
                    estado.items[productoAgregado.id].total + precioProducto 
                );

            } else {
                carrito = new ItemCarrito(1, tituloProducto, precioProducto, precioProducto);
            }

            return {
                ...estado,
                items: {
                    ...estado.items, [productoAgregado.id]: carrito,
                },
                importeTotal: estado.importeTotal + precioProducto
            };
            default:
                return estado;
    }
};