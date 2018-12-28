<template>
	<div class="container-fluid full-page">
		 <p id="black">:)</p>
		 <header>
			<nav>
				<div class="container-fluid h100 menu-container padd-three-l-r">
					<div class="row">						
						<div class="col text-left">
							<div class="logo">
								<a href="/"><img src="../assets/svg/logo.svg" alt="facebook"></a>						
							</div>
						</div>				
						<div class="col text-right">
							<router-link to="/"><div class="btn menu-container">
								<img id="close" src="../assets/svg/about/close.svg" alt="">								
							</div></router-link>
						</div>					
					</div>
				</div>
			</nav>
		</header>
		<div class="row call-card-content">
			<div class="col-md-6 col-xs-6 text-right">
				<img class="me" src="../assets/svg/about/me.svg" alt="Meee">
			</div>
			<div class="info col-md-6 col-xs-6 text-left align-middle">
				<div class="call-card">
					<h5 class="text-red">Vlad Dobrescu</h5>
					<p>Bucharest - Romania</p>
					<p>Call: +40 721 153 905</p>
					<p>Email: <span>vlad.s.dobrescu@gmail.com</span></p>
					<hr class="red">
					<div class="social">
						<a href="#"><img src="../assets/svg/about/fb.svg" alt="facebook"></a>
						<a href="#"><img src="../assets/svg/about/tw.svg" alt="twitter"></a>
						<a href="#"><img src="../assets/svg/about/in.svg" alt="linked in"></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Menu from '@/components/menuComponent'
export default {
	name: 'About',
}
</script>

<style scoped>
hr{
	border-top: 2px solid #ff214f;
	max-width: 40%;
	margin-left: 0;
}
.padd{
	padding-top: 5em;
}
.social a img:first-child{
	margin-left: 0;
}
.full-page{
	background-color: #000;
	margin: 0 auto;
	min-height: 100vh;
}
.call-card{
	padding-top: 14.5em;
	padding-left: 4em;
}
.call-card p{
	color: #949494;
	font-weight: 300;
}
p > span{
	color: #fff;
}
#black{
	color:#000;
	font-size: 1px;
	margin: 0;
	line-height: 0;
}
#close{
	max-width: 70%;
}
.text-red{
	color: #ff214f;
}
</style>
