import { connect } from "react-redux";
import { getSongs } from "../actions";
import PopularSongs from "../components/PopularSongs";

export default connect((state) => ({songs: state.songs}), {getSongs})(PopularSongs)