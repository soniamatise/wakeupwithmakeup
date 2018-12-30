<template>
	<div class="row center">
		<div class="column small-full medium-full large-20 image-text">
			<div class="image-text__images">
				<div class="image-text__images--mask image-text__images--mask-first">
					<div :style="`background-image: url('${ image1 }')`" class="image" />
				</div>
				<div class="image-text__images--mask image-text__images--mask-second">
					<div :style="`background-image: url('${ image2 }')`" class="image" />
				</div>
				<div class="image-text__images--mask image-text__images--mask-third">
					<div :style="`background-image: url('${ image3 }')`" class="image" />
				</div>
				<div class="image-text__images--tag"><h3>{{ tagText }}</h3></div>
			</div>
			<div class="image-text__text">
				<h2 class="image-text__title">{{ title }}</h2>
				<div class="image-text__content" v-html="content"/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['title', 'content', 'image1', 'image2', 'image3', 'tagText'],
};
</script>

<style lang="scss">
@import '~tools';

.image-text {
	height: grid(7);
	display: flex;

	// LEFT
	&__images {
		width: 50%;
		height: 100%;
		position: relative;
		z-index: 1;
		&--tag {
			position: absolute;
			top: 50%;
			transform: translate(-50%,-50%);
			left: 110%;
			background-color: color(Gold);
			white-space: nowrap;
			padding: 5px 1rem;
		}
		&--mask {
			overflow: hidden;

			.image { 
				background-position: center center;
				background-size: cover;
				background-repeat: no-repeat;
				width: 100%;
				height: 100%;
			}
			&-first {
				width: 100%;
				height: 100%;
			}
			&-second {
				width: 33%;
				height: grid(3);
				position: absolute;
				bottom: -50px;
				transform: translate(-50%);
				left: 50%;
				-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
				clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
			}
			&-third {
				width: 33%;
				height: grid(3);
				position: absolute;
				bottom: -50px;
				transform: translate(-50%);
				left: 100%;
				-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
				clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
			}
		}
	}
	//RIGHT
	&__text {
		width: 50%;
		padding: grid(0 1 0 2);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.image-text__content{
			padding: grid(0 0 0 1);
		}
	}
	&__content {
		padding: grid(0 1);
	}
}
</style>