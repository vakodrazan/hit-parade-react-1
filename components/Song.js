import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Context } from './Context';
import { SongPreview } from './Style';
import { AiOutlineArrowLeft } from 'react-icons/Ai';

export default function Song() {
	const { songId } = useParams();
	const { songs } = useContext(Context);
	const history = useHistory();

	const song = songs.find(song => song.id === songId);

	return (
		<div>
			<h1>
				<AiOutlineArrowLeft onClick={() => history.goBack()} />
				{song?.artist} - {song?.title}
			</h1>
			<SongPreview>
				<h3>Lyrics</h3>
				{song?.lyrics}
			</SongPreview>
		</div>
	);
}
