export function emptyCart() {
	return {
		type: 'EMPTY_CART',
	};
}

export function removeCartItem(songId) {
	return {
		type: 'REMOVE_CART_ITEM',
		payload: songId,
	};
}

export function addToCart(song) {
	return {
		type: 'ADD_TO_CART',
		payload: song,
	};
}
