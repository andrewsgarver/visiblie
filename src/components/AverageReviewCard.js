import React from 'react';
import Title from './Title';
import Grid from '@material-ui/core/Grid'
import Stars from './Stars'

import { ReactComponent as Facebook } from './../assets/facebook.svg'
import { ReactComponent as Google } from './../assets/google.svg'
import { ReactComponent as Yelp } from './../assets/yelp.svg'

export default function Deposits() {
	return (
		<React.Fragment>
			<Title>Average Reviews</Title>
			<Grid container spacing={3} alignItems="center">
				<Grid item xs={3}>
					<Google />
				</Grid>
				<Grid item xs>
					<Stars numStars={4.9} />
				</Grid>
			</Grid>
			<Grid container spacing={3} alignItems="center">
				<Grid item xs={3}>
					<Facebook />
				</Grid>
				<Grid item xs>
					<Stars numStars={4.7} />
				</Grid>
			</Grid>
			<Grid container spacing={3} alignItems="center">
				<Grid item xs={3}>
					<Yelp />
				</Grid>
				<Grid item xs>
					<Stars numStars={4} />
				</Grid>
			</Grid>
		</React.Fragment>
	);
}