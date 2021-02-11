import { connect } from "react-redux";
import Song from "../components/Song";

export default connect((state) => ({songs: state.songs}))(Song)