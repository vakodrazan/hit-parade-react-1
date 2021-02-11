import {createStore} from 'redux';
import reducers from "./reducers";
import state from './state';
console.log(state);

let store = createStore(reducers, state);
export default store;