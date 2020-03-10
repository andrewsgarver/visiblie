import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
  } from "react-router-dom";
import Login from './../views/Login'
import Logout from './../components/Logout'
import Dashboard from './../views/Dashboard'

export default function() {
	return (
		<Router>

			<Switch>
				<Redirect exact from="/" to="/login" />
				
				<Route path="/logout">
					<Logout />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
			</Switch>
		</Router>
	)
}