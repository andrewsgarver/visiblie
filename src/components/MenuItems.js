import React from 'react';
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
import { Link } from 'react-router-dom'

export const mainListItems = (
	<div>
		<ListSubheader inset>Features</ListSubheader>
		<ListItem button>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="Customers" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary="Reports" />
		</ListItem>
	</div>
);

export const secondaryListItems = (
	<div>
		<ListSubheader inset>Settings</ListSubheader>
		<ListItem button>
			<ListItemIcon>
				<SettingsIcon />
			</ListItemIcon>
			<ListItemText primary="Account Settings" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<MessageIcon />
			</ListItemIcon>
			<ListItemText primary="Notification Settings" />
		</ListItem>
	</div>
);

export const bottomListItems = (
	<div>
		<Link to="/logout">
			<ListItem button>
				<ListItemIcon>
					<ExitToAppIcon />
				</ListItemIcon>
					<ListItemText primary="Logout" />
			</ListItem>
		</Link>
	</div>
);