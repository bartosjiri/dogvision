<div class:loader={true}>
	<div class:bars={true}>
		{#each Array.from({ length: 12 }) as _}
			<div class:bar={true} />
		{/each}
	</div>
</div>

<style lang="scss">
	.loader {
		--height: 2.4rem;

		display: flex;
		justify-content: center;
		align-items: center;
		height: var(--height);
		width: var(--height);

		.bars {
			position: relative;
			height: var(--height);
			width: var(--height);
			top: 50%;
			left: 50%;

			.bar {
				position: absolute;
				height: 8%;
				width: 24%;
				top: -3.9%;
				left: -10%;
				border-radius: 5px;
				background: currentColor;
				animation: 1.2s linear infinite loaderAnimation;

				@keyframes loaderAnimation {
					from {
						opacity: 1;
					}

					to {
						opacity: 0;
					}
				}

				@for $i from 1 through 12 {
					&:nth-child(#{$i}) {
						transform: rotate($i * 30deg + 0.0001deg) translate(146%);
						animation-delay: (($i * 0.1) - 1.3s);
					}
				}
			}
		}
	}
</style>
