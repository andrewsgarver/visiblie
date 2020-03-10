import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { baseStyles } from './../styles'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import MessageIcon from '@material-ui/icons/Message';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MaterialLink from '@material-ui/core/Link'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Logo from './../assets/logo.png'

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<MaterialLink color="inherit" href="https://visiblie.com/" target="_blank">
				Visiblie
      		</MaterialLink>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default function(props) {
	const cs = componentStyles();
	const bs = baseStyles();
	const [open, setOpen] = React.useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={cs.root}>
			<CssBaseline />
			<AppBar position="absolute" className={clsx(cs.appBar, open && cs.appBarShift)}>
				<Toolbar className={cs.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(cs.menuButton, open && cs.menuButtonHidden)}
					>
						<MenuIcon />
					</IconButton>
					<Typography component="h1" variant="h6" color="inherit" noWrap className={cs.title}>
						{props.pageTitle}
          			</Typography>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(cs.drawerPaper, !open && cs.drawerPaperClose),
				}}
				open={open}
			>
				<div className={cs.toolbarIcon}>
					<Typography component="h1" variant="h5" color="inherit" noWrap className={cs.drawerTitle}>
						<em>Visiblie</em>
          			</Typography>
					<img src={Logo} height="40px" width="auto" alt="logo" className={cs.drawerLogo}/>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<Grid container direction="column" justify="space-between" className={cs.gHeightFull}>
					<Grid item>
						<List>
							<ListSubheader inset>Features</ListSubheader>
							<Link className={bs.linkPlain} to="/dashboard">
								<ListItem button>
									<ListItemIcon>
										<DashboardIcon />
									</ListItemIcon>
									<ListItemText primary="Dashboard" />
								</ListItem>
							</Link>
							<Link className={bs.linkPlain} to="/customers">
								<ListItem button>
									<ListItemIcon>
										<PeopleIcon />
									</ListItemIcon>
									<ListItemText primary="Customers" />
								</ListItem>
							</Link>
							<Link className={bs.linkPlain} to="/statistics">
								<ListItem button>
									<ListItemIcon>
										<BarChartIcon />
									</ListItemIcon>
									<ListItemText primary="Statistics" />
								</ListItem>
							</Link>
						</List>
						<Divider />
						<List className={cs.marginTop}>
							<ListSubheader inset>Settings</ListSubheader>
							<Link className={bs.linkPlain} to="/account-settings">
								<ListItem button>
									<ListItemIcon>
										<SettingsIcon />
									</ListItemIcon>
									<ListItemText primary="Account Settings" />
								</ListItem>
							</Link>
							<Link className={bs.linkPlain} to="/notification-settings">
								<ListItem button>
									<ListItemIcon>
										<MessageIcon />
									</ListItemIcon>
									<ListItemText primary="Notification Settings" />
								</ListItem>
							</Link>
						</List>
					</Grid>
					<Grid>
						<List className={cs.bottomItems}>
							<Link className={bs.linkPlain} to="/logout">
								<ListItem button>
									<ListItemIcon>
										<ExitToAppIcon />
									</ListItemIcon>
										<ListItemText primary="Logout" />
								</ListItem>
							</Link>
						</List>
					</Grid>
				</Grid>
			</Drawer>
			<main className={cs.content}>
				<div className={cs.appBarSpacer} />
				<Container maxWidth="lg" className={cs.container}>
					{props.main}
					<Box pt={4}>
						<Copyright />
					</Box>
				</Container>
			</main>
		</div>
	);
}

const drawerWidth = 240;

const componentStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
		marginLeft: 10
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	marginTop: {
		marginTop: 10
	},
	drawerTitle: {
		flexGrow: 1,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	drawerLogo: {
		position: 'relative',
		right: 20,
		bottom: 2
	},
	gHeightFull: {
		height: '100%'
	}
}));