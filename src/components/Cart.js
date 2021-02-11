import React, { useContext, useState, useEffect } from 'react';
import { Context } from './Context';
import { AiOutlineDelete } from 'react-icons/ai';
import styled from 'styled-components';

const CartItemsContainer = styled.div`
	display: grid;
	gap: 20px;
`;

const CartItemStyles = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem;
	background: #272343;
	color: white;
	.price {
		color: #ffd803;
	}
	svg {
		color: #bae8e8;
		cursor: pointer;
	}
	svg:hover {
		color: #ffd803;
	}
`;

export default function Cart() {
	const { cartItems, removeCartItem, emptyCart } = useContext(Context);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const newTotal = cartItems.reduce((total, song) => {
			total += song.price;
			return total;
		}, 0);
		setTotal(newTotal);
	}, [cartItems]);

	function completeOrder() {
		// show the price somewhere (alert or console)
		alert(`THANK YOU FOR YOUR ORDER. PLEASE PAY : ${total}`);
		// empty the cart
		emptyCart();
	}

	return (
		<div>
			<h1>Cart</h1>
			<CartItemsContainer>
				{cartItems.map(song => (
					<CartItemStyles key={song.id}>
						<AiOutlineDelete onClick={() => removeCartItem(song.id)} />
						<div>
							<div>{song.title}</div>
							<div>{song.artist}</div>
						</div>
						<div className="price">{song.price} Ar</div>
					</CartItemStyles>
				))}
			</CartItemsContainer>
			{cartItems.length !== 0 ? <p>Total: {total} Ar</p> : 'Empty Cart.'}
			{total !== 0 && <button onClick={completeOrder}>Buy</button>}
		</div>
	);
}
