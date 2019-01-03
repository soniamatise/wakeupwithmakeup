<template>
	<footer id="footer" class="footer">
		<div class="socials">
			<ul class="social-icons">
				<li><a target="_blank" href="https://www.facebook.com/makeubymaggy/" class="social-icon"> <i class="fa fa-facebook"/></a></li>
				<li><a target="_blank" href="http://instagram.com/wakeupwithmakeup_amsterdam/" class="social-icon"> <i class="fa fa-instagram"/></a></li>
				<li><a target="_blank" href="mailto:maggy@wakeupwithmakeup.nl" class="social-icon"> <i class="fa fa-envelope"/></a></li>
			</ul>
		</div>
		<h5 class="sub">
			© 2018 Copyright - Wake Up With Make Up - All Rights Reserved.
		</h5>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '~tools';
.footer {
	position: relative;
	z-index: 2;
	padding: 2rem;
	text-align: center;

	ul {
		padding:0;
		list-style: none;
	}
	.socials {
		width: 350px;
		display:block;
		margin: 2rem auto 0;
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
			color: color(Gold) !important;
		}
	}
	ul.social-icons {
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		li {
			font-size: 2rem;
			vertical-align: top;
			display: inline;
		}
		a {
			text-decoration: none;
		}
	}
	
}
</style>
