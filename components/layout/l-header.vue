<template>
	<header id="header" class="header">
		<div class="row center small-full medium-full large-14">
			<div class="column">
				<nav class="main-nav">
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
							<nuxt-link to="/" class="main-nav__link">
								<!-- <span class="main-nav__text"><div :style="`background-image: url(${logo})`" class="logo"/></span> -->
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
export default {};
</script>

<style lang="scss">
@import '~tools';

.header {
	padding: 2rem 0;
	// Header styles
	.main-nav {
		&__list {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
		}
		&__item {
			&:hover {
				.main-nav__text {
					&::before {
						opacity: 1;
					}
				}
				
			}

		}
		&__link {
			position: relative;
		}
		&__text {
			text-transform: uppercase;
			&::before {
				content: '-';	
				opacity: 0;	
			}
		}
	}
}
</style>
