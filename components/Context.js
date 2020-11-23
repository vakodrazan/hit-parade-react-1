import React, { useState, useEffect } from 'react';
import songData from '../songsData.json';

const Context = React.createContext();

function ContextProvider({ children }) {
	const [songs, setSongs] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [styles, setStyles] = useState(['Pop', 'Salegy', 'Reggae', 'Rock', 'Folk', 'Rap']);

	useEffect(() => {
		// if there's something inside ls with an id of "songs", then use that.
		const lsSongs = JSON.parse(localStorage.getItem('songs'));
		// otherwise, get the json
		lsSongs ? setSongs(lsSongs) : setSongs(songData);

		const lsCartItems = JSON.parse(localStorage.getItem('cartItems'));
		lsCartItems && setCartItems(lsCartItems);
	}, []);

	useEffect(() => {
		localStorage.setItem('songs', JSON.stringify(songs));
	}, [songs]);

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

	// everytime there's something changing on the songs state, update that to ls.

	function favoriteSong(songId) {
		// how should I modify the state here?
		// recreate a WHOLE new state array
		// we want to update the state in an IMMUTABLE WAY
		const updatedSongs = songs.map(song => {
			if (song.id === songId) {
				return {
					...song,
					isFavorited: !song.isFavorited,
				};
			}
			return song;
		});
		// set it into our state!
		setSongs(updatedSongs);
	}

	function upvoteSong(songId) {
		const updatedSongs = songs.map(song => {
			if (song.id === songId) {
				return {
					...song,
					upvotes: song.upvotes + 1,
				};
			}
			return song;
		});
		setSongs(updatedSongs);
	}

	function downvoteSong(songId) {
		const updatedSongs = songs.map(song => {
			if (song.id === songId) {
				return {
					...song,
					downvotes: song.downvotes + 1,
				};
			}
			return song;
		});
		setSongs(updatedSongs);
	}

	function addToCart(song) {
		// push in an immutable way
		setCartItems(prevItems => [...prevItems, song]);
	}

	function addSong(song) {
		setSongs(prevSongs => [...prevSongs, song]);
	}

	function removeCartItem(songId) {
		const filteredCartItems = cartItems.filter(cartItem => cartItem.id !== songId);
		setCartItems(filteredCartItems);
	}

	function emptyCart() {
		setCartItems([]);
	}

	return (
		<Context.Provider
			value={{
				songs,
				styles,
				favoriteSong,
				upvoteSong,
				downvoteSong,
				addToCart,
				cartItems,
				addSong,
				removeCartItem,
				emptyCart,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
