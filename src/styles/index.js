import { makeStyles } from '@material-ui/core/styles';
import spacing from './core/spacing.styles'
import text from './core/text.styles'
import width from './core/width.styles'
import links from './core/links.styles'

export const baseStyles = makeStyles({
	...links,
	...spacing,
	...text,
	...width
})