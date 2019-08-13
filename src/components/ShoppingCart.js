import React, {useContext} from 'react';

import useCart from '../hooks/useCart'
// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {

	const cart = useCart();
	return (
		<div className="shopping-cart">
			{cart.productList.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${cart.getCartTotal()}</p>
				<button >Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
