export const ADD_CART = "ADD_CART";

export const addToCart = producto => {
    return {type: ADD_CART, producto: producto};
};