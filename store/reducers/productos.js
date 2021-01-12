import PRODUCTOS from "../../data/dummy";

const estadoInicial = {
    productosDisponibles: PRODUCTOS,
    productosUsuario: PRODUCTOS.filter(producto => producto.ownerId === 'u1')
};

export default (estado = estadoInicial, action) => {
    return estado;
};