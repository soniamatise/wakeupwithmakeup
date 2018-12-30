<template>
	<div class="socials">
		<ul class="social-icons">
			<li><a target="_blank" href="https://www.facebook.com/soniaanubisnusselder/" class="social-icon"> <i class="fa fa-facebook"/></a></li>
			<li><a target="_blank" href="http://instagram.com/soniaanubis/" class="social-icon"> <i class="fa fa-instagram"/></a></li>
			<li><a target="_blank" href="https://www.youtube.com/soniaanubis?sub_confirmation=1" class="social-icon"> <i class="fa fa-youtube"/></a></li>
		</ul>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss">
@import '~tools';
ul {
	padding:0;
	list-style: none;
}
.socials {
	width: 350px;
	display:block;
	margin: 0 auto;
	font-size: 30px !important;
	@media #{$small-only} {
		width: 100%;
	}
}
.social-icon {
	color: color(White) !important;
	opacity: 1;
	transition: color 250ms ease;
	&:hover {
		color: color(White) !important;
	}
	&:before {
			content: "\F16D";
		}
}
ul.social-icons {
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	li {
		vertical-align: top;
		display: inline;
		height: 100px;
	}
	a {
		text-decoration: none;
	}
}
</style>
