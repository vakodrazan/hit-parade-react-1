import { connect } from "react-redux";
import PopularSongs from "../components/PopularSongs";

export default connect((state) => ({songs: state.songs}), null)(PopularSongs)