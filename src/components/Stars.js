import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

export default function Stars({ numStars }) {
	let stars = []
	let i = 0

	while (i < Math.floor(numStars)) {
		stars.push(
			<StarIcon 
				key={i}
				htmlColor="gold" 
			/>
		)

		i++
	}

	if (numStars % 1 >= .5) {
		stars.push(
			<StarHalfIcon 
				key="halfStar"
				htmlColor="gold" 
			/>
		)
	}

	return (
		<span>{stars}</span>
	)
}