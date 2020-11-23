import React, { useState, useContext } from 'react';
import { Context } from './Context';
import styled from 'styled-components';

const FormStyles = styled.form`
	display: grid;
	grid-template-columns: 300px;
	gap: 10px;
	input,
	select,
	textarea {
		height: 30px;
		background: #bae8e8;
		border: none;
		padding: 0 1rem;
		border-radius: 5px;
	}
	input::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: #272343;
		opacity: 1; /* Firefox */
	}
`;

// control inputs
// input that is link to STATE
// value, onChange

export default function AddSong() {
	const { styles, addSong } = useContext(Context);

	const [title, setTitle] = useState('');
	const [artist, setArtist] = useState('');
	const [price, setPrice] = useState(0);
	const [style, setStyle] = useState('');
	const [lyrics, setLyrics] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		const newSong = {
			id: Date.now(),
			title,
			artist,
			price,
			style,
			lyrics,
			upvotes: 0,
			downvotes: 0,
			isFavorited: false,
		};
		console.log(newSong);
		addSong(newSong);
		// reset the form... TODO: find a more elegant way.
		setTitle('');
		setArtist('');
		setPrice(0);
		setStyle('');
		setLyrics('');
	}

	return (
		<div>
			<h1>🌚 Add a new song</h1>
			<FormStyles onSubmit={handleSubmit}>
				<input
					placeholder="Title"
					required
					value={title}
					onChange={e => setTitle(e.currentTarget.value)}
				/>
				<input
					placeholder="Artist"
					required
					value={artist}
					onChange={e => setArtist(e.currentTarget.value)}
				/>
				<input
					placeholder="Price"
					required
					value={price}
					onChange={e => setPrice(e.currentTarget.value)}
				/>
				<select required value={style} onChange={e => setStyle(e.currentTarget.value)}>
					{/* generate the styles from the context style array */}
					{styles.map(style => (
						<option key={style} value={style}>
							{style}
						</option>
					))}
				</select>
				<textarea
					required
					placeholder="Lyrics"
					value={lyrics}
					onChange={e => setLyrics(e.currentTarget.value)}
				/>
				<button>Add</button>
			</FormStyles>
		</div>
	);
}
