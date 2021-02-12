import { connect } from "react-redux";
import { downvoteSong, upvoteSong, favoriteSong, addToCart, removeCartItem } from "../actions";
import SongItem from "../components/SongItem";

const mapDispatchToProps = {
    upvoteSong, 
    downvoteSong, 
    favoriteSong,
    addToCart, 
    removeCartItem
}

export default connect((state) => ({cartItems: state.cartItems}), mapDispatchToProps)(SongItem)