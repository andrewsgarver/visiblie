import React from 'react';
import Router from './router/Router'
import { ThemeProvider } from '@material-ui/core/styles';
import coreTheme from './themes/core.theme'

export default function App() {
	return (
		<ThemeProvider theme={coreTheme}>
			<Router />
		</ThemeProvider>
	)
}