import { connect } from "react-redux";
import { removeCartItem, emptyCart } from "../actions";
import Cart from "../components/Cart";

export default connect((state) => ({cartItems: state.cartItems}), {emptyCart, removeCartItem})(Cart)