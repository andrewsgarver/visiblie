import React, { useState, useEffect } from 'react'
import { baseStyles } from './../styles'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'
import http from '@/http'
import queryString from 'query-string'

export default function(props) {
	const bs = baseStyles()
	const cs = componentStyles()
	const history = useHistory()

	const [accountCreated, setAccountCreated] = useState('')
	const [error, setError] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		const queryParams = queryString.parse(window.location.search)

		setAccountCreated(queryParams.accountCreated)
	}, [])

	const login = async (e) => {
		e.preventDefault()

		const response = await http.auth.login({
			email,
			password
		})

		if (response.status === 200) {
			history.push('/dashboard')
		} else {
			setError(response.data.error)
		}
	}

	return (
		<div className={clsx(bs.fullPage, cs.backgroundGradient)}>
			<form onSubmit={login} >
				<div className={bs.absoluteCenter}>
					{
						accountCreated &&
						<div className={clsx(bs.textWhite, bs.textCenter)}>
							<h2 className={bs.marginBottomSmall}>Account Created!</h2>
							<h4 className={bs.marginTopSmall}>You may now login using your email and password</h4>
						</div>
					}
					<Card className={bs.width4}>
						<CardContent>
							<h1 className={bs.textCenter}>Visiblie</h1>
							<Grid container spacing={2} justify="center">
								<Grid item xs={12}>
									<TextField 
										label="Email" 
										type="email" 
										className={bs.widthFull} 
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField 
										label="Password" 
										type="password" 
										className={bs.widthFull} 
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
								</Grid>
								<Grid item xs={6}>
									<Button 
									type="submit" 
									variant="contained" 
									color="primary" 
									className={bs.widthFull
								}>Login</Button>
								</Grid>
								{
									error &&
									<Grid item xs={12}>
										<p className={clsx(bs.textDanger, bs.textCenter, bs.marginNone)}>{error}</p>
									</Grid>
								}
							</Grid>
						</CardContent>
					</Card>
				</div>
			</form>
		</div>
	)
}

const componentStyles = makeStyles({
	backgroundGradient: {
		background: 'linear-gradient(145deg, rgba(2,0,36,1) 0%, rgba(11,111,191,1) 55%, rgba(0,212,255,1) 100%)'
	}
})