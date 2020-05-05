import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
  } from "react-router-dom";
import Login from './../views/Login'
import Register from './../views/Register'
import Logout from './../components/Logout'
import Dashboard from './../views/Dashboard'
import Customers from './../views/Customers'
import Statistics from './../views/Statistics'
import AccountSettings from './../views/AccountSettings'
import NotificationSettings from './../views/NotificationSettings'

export default function() {
	return (
		<Router>

			<Switch>
				<Redirect exact from="/" to="/login" />
				
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/customers">
					<Customers />
				</Route>
				<Route path="/statistics">
					<Statistics />
				</Route>
				<Route path="/account-settings">
					<AccountSettings />
				</Route>
				<Route path="/notification-settings">
					<NotificationSettings />
				</Route>
				<Route path="/logout">
					<Logout />
				</Route>
			</Switch>
		</Router>
	)
}