import { ADD_CART, REMOVE_FROM_CART } from "../actions/carrito";
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
            case REMOVE_FROM_CART:
                const itemSeleccionado = estado.items[action.pid];
                const cantidadActual = itemSeleccionado.cantidad;

                let itemsActualizados;

                if (cantidadActual > 1) {
                    const itemActualizado = new ItemCarrito(
                            cantidadActual - 1,
                            itemSeleccionado.titulo,
                            itemSeleccionado.precio,
                            itemSeleccionado.total - itemSeleccionado.precio
                        );
                    itemsActualizados = {...estado.items, [action.pid]: itemActualizado};

                } else {
                    itemsActualizados = {...estado.items};
                    delete itemsActualizados[action.pid];
                }

                const resultado = {
                    ...estado,
                    items: itemsActualizados,
                    importeTotal: estado.importeTotal - itemSeleccionado.precio
                };

                return resultado;

            default:
                return estado;
    }
};