import React from 'react';
import StarIcon from '@material-ui/icons/Star';

export default function Stars({ numStars }) {
	let stars = []
	let i = 0

	while (i < numStars) {
		stars.push(
			<StarIcon 
				key={i}
				htmlColor="gold" 
			/>
		)

		i++
	}

	return (
		<span>{stars}</span>
	)
}