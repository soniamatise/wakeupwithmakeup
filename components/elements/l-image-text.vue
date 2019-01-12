<template>
	<div class="row center">
		<div class="column small-full medium-full large-20 image-text">
			<div class="image-text__images">
				<div class="image-text__images--mask image-text__images--mask-first">
					<div :style="`background-image: url('${ image2 }')`" class="image" />
				</div>
				<div class="image-text__images--mask image-text__images--mask-second">
					<div :style="`background-image: url('${ image1 }')`" class="image" />
				</div>
				<div class="image-text__images--mask image-text__images--mask-third">
					<div :style="`background-image: url('${ image3 }')`" class="image" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['image1', 'image2', 'image3'],
};
</script>

<style lang="scss">
@import '~tools';

.image-text {
	height: grid(9);
	display: flex;
	@media #{$medium-down} {
		height: 300px;
	}

	// LEFT
	&__images {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

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
				width: 20%;
				height: 100%;
				-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
				clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
			}
			&-second {
				width: 50%;
				height: 100%;
				-webkit-clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
				clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
			}
			&-third {
				width: 20%;
				height: 100%;
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