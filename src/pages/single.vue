<template>
	<div class="page">
		<img class="hero-cover" src="../assets/img/hero.png" alt="">
		<Menu id="foo"></Menu>
		<div class="container">
			<div class="project-info-title text-center">
				<h4 class="text-dark text-medium">Live Streaming Application</h4>
				<span class="work-done text-dark text-medium">App Architecture + Server Architecture + Web Design + PWA</span>
			</div>
			<div class="project-info-text">
				<div class="row">
					<div class="col-md-6 col-xs-12">
						<p class="text-dark">About my work on the project....Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
					</div>
					<div class="col-md-6 col-xs-12">
						<ul>
							<li><label class="inline">Client:</label>Nume Client</li>							
							<li><label class="inline">Industry:</label>Television & Entertainment</li>							
							<li><label class="inline">Services:</label>Fullstack development</li>							
							<li><label class="inline">Duration:</label>65 days</li>							
							<li><label class="inline">Website:</label>www.jobtv.com</li>							
						</ul>						
					</div>
				</div>
			</div>
		</div>
		<section>
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="design-detail">
							<img class="layers" src="../assets/svg/single/layers_2.svg" alt="">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt dolorum eius, suscipit aperiam consectetur soluta alias quo quibusdam, saepe animi facere! Nesciunt dignissimos consequatur dicta quia ex aspernatur quasi.</p>
						</div>
						<img class="device" src="../assets/img/devices.png" alt="">
					</div>
				</div>
			</div>
		</section>
		<PrevNext></PrevNext>
		<Footer></Footer>
	</div>
</template>

<script>
import Menu from '@/components/menuComponent'
import PrevNext from '@/components/prevNextComponent'
import Footer from '@/components/footerComponent'
export default {
	name: 'SingleProj',
	components: {
		Menu,
		Footer,
		PrevNext
	}
}
</script>

<style scoped>
section{
	background: #242424;
	height: 109vh;
	margin-top: 4em;
	overflow: hidden;
}
section p{
	color: #A9B6B7;
	font-size: 1.2em;
}
ul{
	list-style: none;
}
li{
	padding: 0 15px 8px 0;
    margin: 0 0 8px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
label{
	width: 30%;
	max-width: 100%;
    margin-bottom: 5px;
	font-weight: 700;
	color: #343a40;
}
.device{
	width: 100%;
	padding-top: 4em;
}
.hero-cover{
	margin: 0 auto;
	min-width: 100%;
}
.project-info-title h4{
	padding-top: 4em;
	font-size: 40px;
	line-height: 46px;
	font-weight: 300;
}
.project-info-text{
	padding-top: 4em;
	/* padding-left: 6em; */
}
.design-detail{
	padding-top: 4em;
	width: 50%;
	margin: 0 auto;
}
.layers{
	width: 20%;
	margin: 4em 0 3em 0;
}
#foo{
	position: absolute;
	width: 100%;
	top:0;
}
span{
	color: #ff214f !important;
}
span.work-done{
	border-bottom: 1px solid #ff214f;
}
</style>


