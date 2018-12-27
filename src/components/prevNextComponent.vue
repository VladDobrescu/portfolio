<template>
	<div class="other-projects ontainer-fluid h80 menu-container padd-three-l-r">
		<div class="row mt-100 mb-150">
			<div class="col-md-6 col-xs-6 text-left">
				<div class="prevoius middle">
					<img src="../assets/svg/single/l_arrow.svg" alt="">
					<div class="text">
						<p>Previous Project</p>
						<p class="proj-name">Project Name</p>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-xs-6 text-right">
				<div class="next middle">
					<div class="text">
						<p>Next Project</p>
						<p class="proj-name">Project Name</p>
					</div>
					<img src="../assets/svg/single/r_arrow.svg" alt="">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'PrevNext'
}
</script>

<style scoped>

.middle > * {
  vertical-align: middle;
}
.inline-block{
	height: 100%;
	vertical-align: middle;
}
.text{
	display: inline-block;
}
p{
	color: #A9B6B7;
	text-transform: uppercase;
	font-size: .8rem;
	margin-bottom: .1em;
	margin-left: 1em;
}
.next p{
	color: #A9B6B7;
	text-transform: uppercase;
	font-size: .8rem;
	margin-bottom: .1em;
	margin-right: 1em;
}
p.proj-name{
	color: #242424;
	text-transform: none;
	font-size: 1rem;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>

