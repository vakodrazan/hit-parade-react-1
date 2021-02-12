import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
	favoriteSong,
	upvoteSong,
	downvoteSong,
} from '../actions/songsActions';

import { addToCart, removeCartItem } from '../actions/cartItemsActions';

import {
	AiOutlineHeart,
	AiFillHeart,
	AiOutlineArrowUp,
	AiOutlineArrowDown,
	AiOutlineShopping,
	AiTwotoneShopping,
	AiOutlineEllipsis,
} from 'react-icons/ai';

const SongItemStyle = styled.div`
	display: flex;
	gap: 20px;
	color: white;
	background: #272343;
	padding: 2rem;
	justify-content: space-between;
	align-items: center;
	border-radius: 5px;
	.song-title {
		font-size: 1.8rem;
	}
	svg {
		font-size: 1.5rem;
		cursor: pointer;
	}
	.heart-icon {
		color: #ffd803;
	}
	.votes,
	a {
		color: #bae8e8;
	}
	svg:hover {
		color: #ffd803;
	}
`;

export default function SongItem({ song }) {
	const cartItems = useSelector((state) => state.cartItems);
	const dispatch = useDispatch();

	function showCartIcon() {
		const isAlreadyInCart = cartItems.some((item) => item.id === song.id);
		if (isAlreadyInCart) {
			return (
				<AiTwotoneShopping onClick={() => dispatch(removeCartItem(song.id))} />
			);
		}
		return <AiOutlineShopping onClick={() => dispatch(addToCart(song))} />;
	}

	function showFavoriteIcon() {
		return song.isFavorited ? <AiFillHeart /> : <AiOutlineHeart />;
	}

	return (
		<SongItemStyle>
			<div
				className="heart-icon"
				onClick={() => dispatch(favoriteSong(song.id))}
			>
				{showFavoriteIcon()}
			</div>
			<div>
				<div className="song-title">{song.title}</div>
				<div>{song.artist}</div>
			</div>
			<div className="votes">
				{song.upvotes}{' '}
				<AiOutlineArrowUp onClick={() => dispatch(upvoteSong(song.id))} />
			</div>
			<div className="votes">
				{song.downvotes}{' '}
				<AiOutlineArrowDown onClick={() => dispatch(downvoteSong(song.id))} />
			</div>
			{showCartIcon()}
			<div>
				<Link to={`/song/${song.id}`}>
					<AiOutlineEllipsis />
				</Link>
			</div>
		</SongItemStyle>
	);
}
