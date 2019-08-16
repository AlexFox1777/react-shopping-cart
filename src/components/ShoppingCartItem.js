import React from 'react';
import useCart from "../hooks/useCart";

const Item = props => {
	const cart = useCart();
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => cart.removeItem(props.id)} >Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
