<template>
	<footer id="footer" class="footer">
		<div class="socials">
			<ul class="social-icons">
				<li><a target="_blank" href="https://www.facebook.com/makeubymaggy/" class="social-icon"> <i class="fa fa-facebook"/></a></li>
				<li><a target="_blank" href="http://instagram.com/wakeupwithmakeup_amsterdam/" class="social-icon"> <i class="fa fa-instagram"/></a></li>
				<li><a href="mailto:maggy@wakeupwithmakeup.nl" class="social-icon"> <i class="fa fa-envelope"/></a></li>
				<li><a href="tel:0623100230" class="social-icon"> <i class="fa fa-phone"/></a></li>
			</ul>
		</div>
		<h5 class="sub">
			© 2019 Copyright - Wake Up With Make Up - All Rights Reserved.
		</h5>
		<!-- <h6 class="credit">Website build by Sonia Nusselder with ♥</h6> -->
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
	padding: 2rem 2rem 10px;
	text-align: center;

	h5 {
		color: color(Gold);
	}
	h5.credit {
		padding-top: 2rem;
		font-size: 14px;
	}

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
		color: color(Gold) !important;
		opacity: 1;
		transition: color 250ms ease;
		&:hover {
			color: color(White) !important;
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
