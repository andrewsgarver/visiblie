import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Stars from './Stars';
import SocialMediaIcon from './SocialMediaIcon'

// Generate Order Data
function createData(id, date, name, email, phone, platform, rating) {
	return { id, date, name, email, phone, platform, rating };
}

const rows = [
	createData(0, '16 Mar, 2019', 'Elvis Presley', 'elvis@gmail.com', '555-555-5555', 'Google', 5),
	createData(1, '16 Mar, 2019', 'Paul McCartney', 'paul@gmail.com', '555-555-5555', 'Google', 4),
	createData(2, '16 Mar, 2019', 'Tom Scholz', 'tom@gmail.com', '555-555-5555', 'Facebook', 4),
	createData(3, '16 Mar, 2019', 'Michael Jackson', 'michael@gmail.com', '555-555-5555', 'Yelp', 3),
	createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'bruce@gmail.com', '555-555-5555', 'Google', 5),
];

function preventDefault(event) {
	event.preventDefault();
}


export default function Orders() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Title>Recent Reviews</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Date</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Platform</TableCell>
						<TableCell align="right">Rating</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.id}>
							<TableCell>{row.date}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>
								<SocialMediaIcon height="32px" width="32px" platform={row.platform}/>
							</TableCell>
							<TableCell align="right">
								<Stars numStars={row.rating} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className={classes.seeMore}>
				<Link color="primary" href="#" onClick={preventDefault}>
					See more ratings
        </Link>
			</div>
		</React.Fragment>
	);
}

const useStyles = makeStyles(theme => ({
	seeMore: {
		marginTop: theme.spacing(3),
	},
}));