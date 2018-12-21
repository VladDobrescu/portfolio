<template>
	<header>
		<nav>
			<div class="container-fluid h80 menu-container padd-three-l-r">
				<div class="row">
					<div class="col text-left">
						<div class="social">
							<a href="#"><img src="../assets/svg/social/facebook.svg" alt="facebook"></a>
							<a href="#"><img src="../assets/svg/social/twitter.svg" alt="twitter"></a>
							<a href="#"><img src="../assets/svg/social/linkedin.svg" alt="linked in"></a>
						</div>
					</div>
					<div class="col text-center">
						<div class="logo">
							<a href="/"><img src="../assets/svg/logo.svg" alt="facebook"></a>						
						</div>
					</div>				
					<div class="col text-right">
						<router-link to="/about"><div class="btn menu-container">
							<div class="bar1"></div>
							<div class="bar2"></div>
							<div class="bar3"></div>
						</div></router-link>
					</div>					
				</div>
			</div>
		</nav>
	</header>
</template>
<script>
export default {
	name: 'menuComponent',
	methods: {

	}
}
</script>
<style>
header{
	z-index: 2;
}
</style>


