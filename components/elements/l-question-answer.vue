<template>
	<div class="qa-section">
		<div :class="['question', { 'question--active': showAnswer }]" @click="toggleAnswer()">
			<h3>Q&A - {{ question }}</h3>
			<i class="fa fa-angle-down"/>
		</div>
		<div :class="['answer', { 'answer--active': showAnswer }]">
			<div class="answer__content"><p>{{ answer }}</p></div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['question', 'answer'],
	data() {
		return {
			showAnswer: false,
		};
	},
	methods: {
		toggleAnswer: function () {
			this.showAnswer = !this.showAnswer;
			console.log(this.showAnswer);			
		}
	}
};
</script>

<style lang="scss">
@import '~tools';

.qa-inner {
	.qa-section {
		background-color: color(White);

		.question {
			padding: 2rem 1rem;
			border-bottom: 2px color(Dark) solid;
			cursor: pointer;
			display: flex;
			justify-content: space-between;
			align-items: center;

			h3, i {
				color: color(Dark);
			}
			i {font-size: 26px;}
			&--active {
				i {
					transform: rotate(-180deg);
				}
			}
		}

		.answer {
			height: 0;
			overflow: hidden;
			p{
				color: color(Dark);
			}
			&__content {
				padding: 2rem 1rem;
				background-color: color(Dark);
				border-bottom: 2px color(Dark) solid;
				p {
					color: color(White);
				}
			}
			&--active {
				height: auto;
			}
		}
	}	
}

</style>
