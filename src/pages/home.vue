<template>
	<div class="page">
		<Menu></Menu>
		<Hero></Hero>
		<Projects></Projects>
	</div>
</template>
<script>

import Menu from '@/components/menuComponent'
import Hero from '@/components/heroComponent'
import Projects from '@/components/projectsComponent'
export default {
	name: 'home',
	components: {
		Menu,
		Hero,
		Projects
	}
}
</script>
