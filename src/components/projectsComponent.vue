<template>
	<div class="container-fluid padd-three-l-r">
		<div class="row pb-100">
			<div class="col-md-12 text-center">
				<span class="text-dark text-medium">
					PROJECTS
				</span>
			</div>
		</div>
		<div class="row pb-100 mt-150">
			<div class="col-md-12">
				<div class="card-columns">
					<div class="card">
						<img class="card-img-top" src="../assets/svg/projects/tv_2.jpg" alt="Card image cap">
						<div class="card-img-overlay text-center">
							<div class="align-middle">
								<img class="icon" src="../assets/svg/plus.svg" alt="">
								<span class="text-extra-large other-font text-dark block">Full Stack Implementation</span>
								<p class="no-letter-spacing text-small no-margin-bottom text-medium-gray">Client and server</p>
							</div>
						</div>
					</div>					
					<div class="card">
						<img class="card-img-top" src="../assets/svg/projects/shop_2.jpg" alt="Card image cap">
						<div class="card-img-overlay text-center">
							<div class="align-items-center">
								<img class="icon" src="../assets/svg/plus.svg" alt="">
								<span class="text-extra-large other-font text-dark block">Full Stack Implementation</span>
								<p class="no-letter-spacing text-small no-margin-bottom text-medium-gray">Client and server</p>								
							</div>
						</div>
					</div>					
					<div class="card">
						<img class="card-img-top" src="../assets/svg/projects/law_2.jpg" alt="Card image cap">
						<div class="card-img-overlay text-center">
							<div class="align-items-center">
								<img class="icon" src="../assets/svg/plus.svg" alt="">
								<span class="text-extra-large other-font text-dark block">Full Stack Implementation</span>
								<p class="no-letter-spacing text-small no-margin-bottom text-medium-gray">Client and server</p>
							</div>
						</div>
					</div>					
					<div class="card">
						<img class="card-img-top" src="../assets/svg/projects/strat_2.jpg" alt="Card image cap">
						<div class="card-img-overlay text-center">
							<div class="align-items-center">
								<img class="icon" src="../assets/svg/plus.svg" alt="">
								<span class="text-extra-large other-font text-dark block">Full Stack Implementation</span>
								<p class="no-letter-spacing text-small no-margin-bottom text-medium-gray">Client and server</p>
							</div>
						</div>
					</div>					
					<div class="card">
						<img class="card-img-top" src="../assets/svg/projects/adam_2.jpg" alt="Card image cap">
						<div class="card-img-overlay text-center">
							<div class="align-items-center">
								<img class="icon" src="../assets/svg/plus.svg" alt="">
								<span class="text-extra-large other-font text-dark block">Full Stack Implementation</span>
								<p class="no-letter-spacing text-small no-margin-bottom text-medium-gray">Client and server</p>
							</div>
						</div>
					</div>					
					<div class="card">
						<img class="card-img-top" src="../assets/svg/projects/tour_2.jpg" alt="Card image cap">
						<div class="card-img-overlay text-center">
							<div class="align-items-center">
								<img class="icon" src="../assets/svg/plus.svg" alt="">
								<span class="text-extra-large other-font text-dark block">Full Stack Implementation</span>
								<p class="no-letter-spacing text-small no-margin-bottom text-medium-gray">Client and server</p>
							</div>
						</div>
					</div>					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'projectsComp',
}
</script>

<style scoped>
.card-columns .card{
	margin-bottom: 0px;
	border: none;
}
.card-columns{
	column-gap: 0.65rem !important;
	column-count: 3;
}
.card{
	border: none;
	margin-top: .65rem;
	cursor: pointer;
}
.card-img-overlay{
	/* display: none; */
	opacity: 0;
	background: #ffff;
	margin: 20px;
}
.card:hover > .card-img-overlay{
	-webkit-transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;
	/* display: block; */
	opacity: 1;
}
.icon{
	margin: 20px 0 20px 0;
}
</style>
