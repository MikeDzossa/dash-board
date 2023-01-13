const routes = [
	{
		path: '/Profile',
		icon: 'person',
		component: 'Profile'
	},
	{
		path: '/Schedule',
		icon: 'date_range',
		component: 'Schedule'
	},
	{
		path: '/Overview',
		icon: 'poll',
		component: 'Overview'
	},
	{
		path: '/Chat',
		icon: 'chat',
		component: 'Chat'
	},
	{
		path: '/Settings',
		icon: 'settings',
		component: 'Settings'
	}
];

 const schedule_items = [
	{
		icon: 'palette',
		name: 'Illustration Templates',
		time: '9:00 AM - 4:00 PM',
		people: 'groups'
	},
	{
		icon: 'balance',
		name: 'UI Design',
		time: '4:00 PM - 5:00 PM',
		people: 'people'
	},
	{
		icon: 'table_rows',
		name: 'UX Design',
		time: '5:00 PM - 6:00 PM',
		people: 'groups'
	}
 ];

 const file_items = [
	{
		icon: 'deblur',
		name: 'User flow.fig',
		date: 'Aug 5, 2021 at 9:50 AM',
		size: '0.6 KB'
	},
	{
		icon: 'deblur',
		name: 'Design system.fig',
		date: 'Aug 5, 2021 at 9:20 AM',
		size: '0.8 KB'
	},
	{
		icon: 'description',
		name: 'UX Design',
		date: 'Aug 5, 2021 at 9:05 AM',
		size: '18 KB'
	}
 ];

 const meeting_items = [
	{
		wDay: 'Mon',
		dDay: '3',
		time1: '9:00 AM',
		time2: '2:00 PM',
		time3: '4:00 PM'
	},
	{
		wDay: 'Tue',
		dDay: '4',
		time1: '10:30 AM',
		time2: '1:00 PM',
		time3: '____'
	},
	{
		wDay: 'Wed',
		dDay: '5',
		time1: '9:00 AM',
		time2: '3:00 PM',
		time3: '6:00 PM'
	},
	{
		wDay: 'Thu',
		dDay: '6',
		time1: '11:00 AM',
		time2: '____',
		time3: '3:50 PM'
	},
	{
		wDay: 'Fri',
		dDay: '7',
		time1: '9:20 AM',
		time2: '1:15 PM',
		time3: '5:45 PM'
	}
 ];

export { routes, schedule_items, file_items, meeting_items }