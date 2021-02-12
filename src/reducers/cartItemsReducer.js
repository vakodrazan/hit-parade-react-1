export default function cartItems(state = [], action) {
	switch (action.type) {
		case 'ADD_TO_CART': {
			return [...state, action.payload];
		}
		case 'REMOVE_CART_ITEM':
			const newCartWithoutSpecificItem = state.filter(
				(item) => item.id !== action.payload
			);
			return [...newCartWithoutSpecificItem];
		case 'EMPTY_CART':
			return [];
		default:
			return state;
	}
}
