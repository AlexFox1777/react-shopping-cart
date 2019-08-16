import React, {useContext} from 'react'
import {CartContext} from "../contexts/CartContext";

const useCart = () => {
    const [cart, setCard] = useContext(CartContext);

    function getCartTotal() {
        return cart.reduce((acc, value) => {
            return acc + value.price;
        }, 0).toFixed(2);
    }

    function removeItem(value) {
        const newCart = [...cart];
        const item = newCart.find(item => item.id === value);
        const currentIndex = newCart.indexOf(item);
        newCart.splice(currentIndex, 1);
        setCard(newCart);
    }

    return {
        getCartTotal,
        productList: cart,
        removeItem,
    };
};

export default useCart;