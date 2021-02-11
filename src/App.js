import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Menu from './components/Menu';

import PopularSongs from './containers/PopularSongs';
import StylesList from './components/StylesList';
import Style from './components/Style';
import Song from './containers/Song';
import AddSong from './components/AddSong';
import Cart from './components/Cart';

export default function App() {
	return (
		<div>
			<Link to="/">
				<h1>Hit Parade</h1>
			</Link>
			<Menu />
			<Switch>
				<Route exact path="/">
					<PopularSongs />
				</Route>
				{/* <Route exact path="/styles">
					<StylesList />
				</Route>
				<Route exact path="/styles/:styleName">
					<Style />
				</Route> */}
				<Route exact path="/song/:songId">
					<Song />
				</Route>
				{/* <Route exact path="/add">
					<AddSong />
				</Route>
				<Route exact path="/cart">
					<Cart />
				</Route> */}
			</Switch>
		</div>
	);
}
