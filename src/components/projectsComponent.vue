<template>
	<div class="container-fluid padd-three-l-r">
		<div class="row pb-100">
			<div class="col-md-12 text-center">
				<span class="text-dark text-medium">
					PROJECTS
				</span><br>
				<img class="down pulse" src="../assets/svg/projects/d_arrow.svg" alt="">
			</div>
		</div>
		<div class="row pb-100 mt-150">		
			<div class="porject col-md-4 col-xs-12 mtb-2">
				<router-link to="/project">
				<img class="card-img-top" src="http://placehold.it/900x900" alt="Card image cap">
				</router-link>			
				<div class="card-img-overlay text-center">
					<div class="center">
						<img class="icon" src="../assets/svg/plus.svg" alt="">
						<span class="text-extra-large other-font text-dark block">Full Stack Implementation</span>
						<p class="no-letter-spacing text-small no-margin-bottom text-medium-gray">Client and server</p>
					</div>
				</div>				
			</div>
			<div class="porject col-md-4 col-xs-12 mtb-2">
				<router-link to="/project">
				<img class="card-img-top" src="http://placehold.it/900x900" alt="Card image cap">
				</router-link>			
				<div class="card-img-overlay text-center">
					<div class="center">
						<img class="icon" src="../assets/svg/plus.svg" alt="">
						<span class="text-extra-large other-font text-dark block">Full Stack Implementation</span>
						<p class="no-letter-spacing text-small no-margin-bottom text-medium-gray">Client and server</p>
					</div>
				</div>	
			</div>
			<div class="porject col-md-4 col-xs-12 mtb-2">
				<router-link to="/project">
				<img class="card-img-top" src="http://placehold.it/900x900" alt="Card image cap">
				</router-link>			
				<div class="card-img-overlay text-center">
					<div class="center">
						<div class="items">
							<img class="icon" src="../assets/svg/plus.svg" alt="">
							<span class="text-extra-large other-font text-dark block">Full Stack Implementation</span>
							<p class="no-letter-spacing text-small no-margin-bottom text-medium-gray">Client and server</p>
						</div>
					</div>
				</div>	
			</div>	
			<div class="porject col-md-4 col-xs-12 mtb-2">
				<router-link to="/project">
				<img class="card-img-top" src="http://placehold.it/900x900" alt="Card image cap">
				</router-link>			
				<div class="card-img-overlay text-center">
					<div class="center">
						<img class="icon" src="../assets/svg/plus.svg" alt="">
						<span class="text-extra-large other-font text-dark block">Full Stack Implementation</span>
						<p class="no-letter-spacing text-small no-margin-bottom text-medium-gray">Client and server</p>
					</div>
				</div>				
			</div>
			<div class="porject col-md-4 col-xs-12 mtb-2">
				<router-link to="/project">
				<img class="card-img-top" src="http://placehold.it/900x900" alt="Card image cap">
				</router-link>			
				<div class="card-img-overlay text-center">
					<div class="center">
						<img class="icon" src="../assets/svg/plus.svg" alt="">
						<span class="text-extra-large other-font text-dark block">Full Stack Implementation</span>
						<p class="no-letter-spacing text-small no-margin-bottom text-medium-gray">Client and server</p>
					</div>
				</div>	
			</div>
			<div class="porject col-md-4 col-xs-12 mtb-2">
				<router-link to="/project">
				<img class="card-img-top" src="http://placehold.it/900x900" alt="Card image cap">
				</router-link>			
				<div class="card-img-overlay text-center">
					<div class="center">
						<div class="items">
							<img class="icon" src="../assets/svg/plus.svg" alt="">
							<span class="text-extra-large other-font text-dark block">Full Stack Implementation</span>
							<p class="no-letter-spacing text-small no-margin-bottom text-medium-gray">Client and server</p>
						</div>
					</div>
				</div>	
			</div>					
		</div>
	</div>
</template>
<script>
import db from '../assets/db.json'
export default {
	name: 'projectsComp',
	mounted(){
		this.populateProjects()
	},
	methods: {
		populateProjects: ()=>{
			console.log(db)
		}
	}
}
</script>

<style scoped>
.center{
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
}
.card-img-top{
	cursor: pointer;
}
.card-img-overlay{
	background: #f5f5f5;
	margin: 0px 15px;
	z-index: -1;
}
.card-img-top:hover{
	-webkit-transition: all .2s ease-in-out;
	-moz-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
	transition: all .2s ease-in-out;
	/* display: block; */
	opacity: 0;
}
.icon{
	margin: 0em 0 2em 0;
}
.down{
	padding-top: 2rem;
}

@keyframes pulse_animation {
    0% { transform: scale(1); }
    30% { transform: scale(1); }
    40% { transform: scale(1.5); }
    50% { transform: scale(1); }
    60% { transform: scale(1); }
    70% { transform: scale(1.3); }
    80% { transform: scale(1); }
    100% { transform: scale(1); }
}
.pulse {
    animation-name: pulse_animation;
    animation-duration: 5000ms;
    transform-origin:70% 70%;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
</style>
