import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import About from '@/pages/about'
import Single from '@/pages/single'

Vue.use(Router)

export default new Router({
	scrollBehavior(to, from, savedPosition) {		
		return { x: 0, y: 0 }		
	},
	routes: [
		{ path: '/', name: 'home', component: Home },
		{ path: '/about', name: 'about', component: About },
		{ path: '/project', name: 'single', component: Single }
	]
})
