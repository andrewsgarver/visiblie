import React from 'react';
import Dashboard from './views/Dashboard'
import { ThemeProvider } from '@material-ui/core/styles';
import coreTheme from './themes/core.theme'

export default function App() {
	return (
		<ThemeProvider theme={coreTheme}>
			<Dashboard />
		</ThemeProvider>
	)
}