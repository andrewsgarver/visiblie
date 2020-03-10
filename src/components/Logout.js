import React from 'react'
import { Redirect } from 'react-router-dom'


export default function() {
	console.log('Handle Logout')

	return (
		<Redirect to="/login" />
	)
}