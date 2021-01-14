export const ADD_CART = "ADD_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = producto => {
    return {type: ADD_CART, producto: producto};
};

export const removeFromCart = idProducto => {
    return {type: REMOVE_FROM_CART, pid: idProducto};
};