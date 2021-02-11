import { connect } from "react-redux";
import Style from "../components/Style";

export default connect((state) => ({songs: state.songs}))(Style)