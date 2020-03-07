import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(days, google, facebook, yelp) {
	return { days, google, facebook, yelp };
}

const data = [
	createData('July 19', 2, 0, 1),
	createData('July 21', 3, 0, 3),
	createData('July 22', 5, 2, 4),
	createData('July 23', 7, 5, 5),
	createData('July 24', 12, 7, 7),
	createData('July 25', 19, 11, 9),
	createData('July 26', 21, 12, 12),
	createData('July 27', 28, 13, 17),
	createData('July 28', 37, 15, 23),
	createData('July 29', 40, 18, 23),
	createData('July 30', 45, 21, 24),
	createData('July 31', 46, 29, 26),
	createData('Aug 1', 50, 34, 27),
	createData('Aug 2', 58, 35, 29),
	createData('Aug 3', 59, 35, 32),
	createData('Aug 4', 63, 35, 35),
	createData('Aug 5', 69, 38, 38),
	createData('Aug 6', 72, 42, 42),
	createData('Aug 7', 88, 47, 47),
	createData('Aug 8', 93, 52, 52),
	createData('Aug 9', 102, 60, 66),
	createData('Aug 10', 105, 63, 73),
	createData('Aug 11', 111, 69, 84),
	createData('Aug 12', 117, 72, 92),
	createData('Aug 13', 121, 78, 101),
	createData('Aug 14', 130, 84, 111),
	createData('Aug 15', 134, 93, 113),
	createData('Aug 16', 138, 94, 117),
	createData('Aug 17', 144, 94, 123),
	createData('Aug 18', 153, 99, 130),
];

export default function Chart() {
	const theme = useTheme();

	return (
		<React.Fragment>
			<Title>Reviews over last 30 days</Title>
			<ResponsiveContainer>
				<LineChart
					data={data}
					margin={{
						top: 16,
						right: 16,
						bottom: 0,
						left: 24,
					}}
				>
					<XAxis dataKey="days" stroke={theme.palette.text.secondary}/>
					<YAxis stroke={theme.palette.text.secondary}/>
					<Line type="monotone" name="Google" dataKey="google" stroke="#FBBC05" dot={false}/>
					<Line type="monotone" name="Facebook" dataKey="facebook" stroke="#4267B2" dot={false} />
					<Line type="monotone" name="Yelp" dataKey="yelp" stroke="#D32323" dot={false} />
				</LineChart>
			</ResponsiveContainer>
		</React.Fragment>
	);
}