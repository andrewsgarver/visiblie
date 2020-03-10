import { makeStyles } from '@material-ui/core/styles';
import spacing from './core/spacing.styles'
import text from './core/text.styles'
import width from './core/width.styles'

export const baseStyles = makeStyles({
	...spacing,
	...text,
	...width
})