import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'
import Chat from  '../views/Chat.vue'
import Overview from '../views/Overview.vue'
import Settings from '../views/Settings.vue'
import Schedule from '../views/Schedule.vue'
import HelloWorld from '../components/HelloWorld.vue'

const router = new VueRouter({
	mode : 'history',
	routes: [
		{
			path: '/',
			component: HelloWorld
		},
		{
			path: '/Profile',
			component: Profile
		},
		{
			path: '/Schedule',
			component: Schedule
		},
		{
			path: '/Overview',
			component: Overview
		},
		{
			path: '/Chat',
			component: Chat
		},
		{
			path: '/Settings',
			component: Settings
		},
	],
})

export default router