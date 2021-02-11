import { connect } from "react-redux";
import { downvoteSong, upvoteSong, favoriteSong } from "../actions";
import SongItem from "../components/SongItem";

export default connect(null, {upvoteSong, downvoteSong, favoriteSong})(SongItem)