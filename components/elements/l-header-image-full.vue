<template>
	<div class="row center small-full medium-full large-20">
		<section :style="`background-image: url('${ imageBg }')`" class="section column header-image-full"/>
	</div>
</template>

<script>
export default {
	props: ['imageBg']
};
</script>

<style lang="scss">
@import '~tools';

.header-image-full {
	background-color: black;
	background-position: center top;
	background-size: cover;
	height: grid(9);
	max-width: 1010px;
	@media #{$medium-down} {
		height: 300px;
		background-position: center center;
	}
}
</style>