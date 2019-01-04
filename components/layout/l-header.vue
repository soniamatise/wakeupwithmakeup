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
						<li class="main-nav__item" @click="toggleMenu()">
							<nuxt-link to="/maggy" class="main-nav__link">
								<span class="main-nav__text">Over Maggy</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item" @click="toggleMenu()">
							<nuxt-link to="/informatie" class="main-nav__link">
								<span class="main-nav__text">Informatie</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item" @click="toggleMenu()">
							<nuxt-link to="/portfolio" class="main-nav__link">
								<span class="main-nav__text">Portfolio</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item" @click="toggleMenu()">
							<nuxt-link to="/prijslijst" class="main-nav__link">
								<span class="main-nav__text">Prijslijst</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item" @click="toggleMenu()">
							<nuxt-link to="/qa" class="main-nav__link">
								<span class="main-nav__text">Q&A</span>
							</nuxt-link>
						</li>
						<li class="main-nav__item" @click="toggleMenu()">
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
			if(window.innerWidth < 961){
				this.showMobileMenu = !this.showMobileMenu;
			}
		}
	}
};
</script>

<style lang="scss">
@import '~tools';

.header {
	padding: 5px 0;

	.main-nav {
		@media #{$medium-down} {
			background: color(Dark);
			position: fixed;
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
			padding: 1rem 0 2rem;
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
		&__text {
			font-size: 1.3rem;
			text-transform: uppercase;
			position: relative;
			color: color(Gold);
			font-family: $second-font;
			transition: color 600ms $easing;

			&::before {
				content: '';
				position: absolute;
				left: 0;
				bottom: -1px;
				height: 2px;
				width: 0%;
				background-color: color(Gold);
				transition: width 400ms $easing, background-color 600ms $easing;
			}
			&:hover {
				text-shadow: 1px 0px 20px color(Dark);
				&::before {
					width: 100%;
				}
			}
		}
		&__link {
			position: relative;
			.logo {
				width: 400px;
				height: 250px;
				background-position: center center;
				background-size: contain;
				background-repeat: no-repeat;
			}
			&.nuxt-link-active {
				.main-nav__text {
					color: color(White);
					&::before {
						width: 100%;
						background-color: color(White);
					}
				}
			}
		}
	}
	$bar-width: 40px;
	$bar-height: 5px;
	$bar-spacing: 10px;

	.menu-wrapper {
		position: fixed;
		top: 40px;
		right: 20px;
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
		background: color(Gold);
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
		background: color(Gold);
		transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
	}

	.hamburger-menu:after {
		content: "";
		position: absolute;
		left: 0;
		top: $bar-spacing;
		background: color(Gold);
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
