import { combineReducers } from 'redux';

import cartItems from './cartItemsReducer';
import songs from './songsReducer';
import styles from './stylesReducer';

export default combineReducers({ cartItems, songs, styles });
