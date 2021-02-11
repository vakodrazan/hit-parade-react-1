import { connect } from "react-redux";
import StylesList from "../components/StylesList";

export default connect((state) => ({styles: state.styles}), null)(StylesList)