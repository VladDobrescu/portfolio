<template>
	<div class="page">
		<Menu></Menu>
		<Hero></Hero>
		<Projects></Projects>
		<FooterComp></FooterComp>
	</div>
</template>
<script>

import Menu from '@/components/menuComponent'
import Hero from '@/components/heroComponent'
import Projects from '@/components/projectsComponent'
import FooterComp from '@/components/footerComponent'
export default {
	name: 'home',
	components: {
		Menu,
		Hero,
		Projects,
		FooterComp
	}
}
</script>
