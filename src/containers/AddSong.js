import { connect } from "react-redux";
import AddSong from "../components/AddSong";
import { addSong } from "../actions"


export default connect((state) => ({styles: state.styles}), {addSong})(AddSong);