import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuLayout from './../layouts/MenuLayout'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RecentReviewChart from './../components/RecentReviewChart';
import AverageReviewCard from './../components/AverageReviewCard';
import Reviews from './../components/Reviews';

export default function() {
	const cs = componentStyles();
	const fixedHeightPaper = clsx(cs.paper, cs.fixedHeight);

	return (
		<MenuLayout 
			pageTitle="Dashboard"
			main={
				<Grid container spacing={3}>
					{/* RecentReviewChart */}
					<Grid item xs={12} md={8} lg={9}>
						<Paper className={fixedHeightPaper}>
							<RecentReviewChart />
						</Paper>
					</Grid>
					{/* Recent AverageReviewCard */}
					<Grid item xs={12} md={4} lg={3}>
						<Paper className={fixedHeightPaper}>
							<AverageReviewCard />
						</Paper>
					</Grid>
					{/* Recent Reviews */}
					<Grid item xs={12}>
						<Paper className={cs.paper}>
							<Reviews />
						</Paper>
					</Grid>
				</Grid>
			} 
		/>
	)
}

const componentStyles = makeStyles(theme => ({
	fixedHeight: {
		height: 240,
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
}));