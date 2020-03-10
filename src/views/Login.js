import React from 'react'
import { baseStyles } from './../styles'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'

export default function(props) {
	const bs = baseStyles()
	const cs = componentStyles()
	const history = useHistory()

	function login() {
		console.log('Logging in: ')
		history.push('/dashboard')
	}

	return (
		<div className={clsx(bs.fullPage, cs.backgroundGradient)}>
			<Card className={clsx(bs.width4, bs.absoluteCenter)}>
				<CardContent>
					<h1 className={bs.textCenter}>Visiblie</h1>
					<Grid container spacing={2} justify="center">
						<Grid item xs={12}>
							<TextField label="Email" type="email" className={bs.widthFull} />
						</Grid>
						<Grid item xs={12}>
							<TextField label="Password" type="password" className={bs.widthFull} />
						</Grid>
						<Grid item xs={6}>
							<Button variant="contained" color="primary" className={bs.widthFull} onClick={login}>Login</Button>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</div>
	)
}

const componentStyles = makeStyles({
	backgroundGradient: {
		background: 'linear-gradient(145deg, rgba(2,0,36,1) 0%, rgba(11,111,191,1) 55%, rgba(0,212,255,1) 100%)'
	}
})