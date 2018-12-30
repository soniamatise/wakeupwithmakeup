<template>
	<header id="header" class="header">
		<div class="menu-wrapper" @click="toggleMenu()">
			<div :class="['hamburger-menu', { 'animate': showMobileMenu }]" />	  
		</div>
		<div class="row center small-full medium-full large-14">
			<div class="column">
				<li class="main-nav__item logo-link">
					<nuxt-link to="/" class="main-nav__link">
						<div :style="`background-image: url(${logo})`" class="logo"/>
					</nuxt-link>
				</li>
				<nav :class="['main-nav', { 'animate': showMobileMenu }]">
					<ul class="main-nav__list">
						<li class="main-nav__item">
							<nuxt-link to="/maggy" class="main-nav__link">
								<span class="main-nav__text">Over Maggy</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item">
							<nuxt-link to="/informatie" class="main-nav__link">
								<span class="main-nav__text">Informatie</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item">
							<nuxt-link to="/portfolio" class="main-nav__link">
								<span class="main-nav__text">Portfolio</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item">
							<nuxt-link to="/prijslijst" class="main-nav__link">
								<span class="main-nav__text">Prijslijst</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item">
							<nuxt-link to="/qa" class="main-nav__link">
								<span class="main-nav__text">Q&A</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item">
							<nuxt-link to="/contact" class="main-nav__link">
								<span class="main-nav__text">Contact</span>
							</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>	
	</header>
</template>

<script>
export default {
	data() {
		return {
			logo: require('~/static/images/logo/logo.png'),
			showMobileMenu: false,
		};
	},
	methods: {
		toggleMenu: function () {
			this.showMobileMenu = !this.showMobileMenu;
			console.log(this.showMobileMenu);
			
		}
	}
};
</script>

<style lang="scss">
@import '~tools';

.header {
	padding: 5px 0;
	// position: relative;
	// Header styles
	.main-nav {
		@media #{$medium-down} {
			background: red;
			position: absolute;
			width: 0%;
			height: 100vh;
			z-index: 2;
			top: 0;
			left: 0;
			overflow: hidden;
			transition: width 300ms cubic-bezier(0.23, 1, 0.32, 1);
			&.animate {
				width: 100%;
			}
		}
		&__list {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			@media #{$medium-down} {
				flex-direction: column;
				height: 100%;
				padding: 100px;
			}
		}
		&__item {
			&:hover {
				.main-nav__text {
					&::before {
						opacity: 1;
					}
				}
				
			}
			&.logo-link {
				display: flex;
				justify-content: center;
			}
		}
		&__link {
			position: relative;
			.logo {
				width: 300px;
				height: 150px;
				background-position: center center;
				background-size: contain;
				background-repeat: no-repeat;
			}
		}
		&__text {
			font-size: 1rem;
			text-transform: uppercase;
			&::before {
				content: '-';	
				opacity: 0;	
			}
		}
	}
	$bar-width: 100px;
	$bar-height: 10px;
	$bar-spacing: 25px;

	.menu-wrapper {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 3;
		width: $bar-width;
		height: $bar-height + $bar-spacing*2;
		cursor: pointer;
		display: none;
		@media #{$medium-down} {
			display: block;
		}
	}

	.hamburger-menu,
	.hamburger-menu:after,
	.hamburger-menu:before {
		width: $bar-width;
		height: $bar-height;
	}

	.hamburger-menu {
		position: relative;
		transform: translateY($bar-spacing);
		background: rgba(255, 255, 255, 1);
		transition: all 0ms 300ms;
		
		&.animate {
			background: rgba(255, 255, 255, 0); 
		}
	}

	.hamburger-menu:before {
		content: "";
		position: absolute;
		left: 0;
		bottom: $bar-spacing;
		background: rgba(255, 255, 255, 1);
		transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
	}

	.hamburger-menu:after {
		content: "";
		position: absolute;
		left: 0;
		top: $bar-spacing;
		background: rgba(255, 255, 255, 1);
		transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
	}

	.hamburger-menu.animate:after {
		top: 0;
		transform: rotate(45deg);
		transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);;
	}

	.hamburger-menu.animate:before {
		bottom: 0;
		transform: rotate(-45deg);
		transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);;
	}
}
</style>
