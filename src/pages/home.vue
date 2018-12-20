<template>
	<div class="page">
		<Menu></Menu>
		<Hero></Hero>
	</div>
</template>
<script>

import Menu from '@/components/menuComponent'
import Hero from '@/components/heroComponent'
export default {
	name: 'home',
	components: {
		Menu,
		Hero
	}
}
</script>
