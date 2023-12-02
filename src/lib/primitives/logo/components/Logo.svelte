<script lang="ts">
	import Logo from '../assets/logo.svg?raw';
	import LogoEye from '../assets/logo-eye.svg?raw';
	import LogoVisor from '../assets/logo-visor.svg?raw';

	import { visorActive } from '..';
</script>

<div class:logo={true} class:--visor-active={$visorActive} {...$$restProps}>
	{@html LogoVisor}
	{@html LogoEye}
	{@html Logo}
</div>

<style lang="scss">
	.logo {
		--height: 4.8rem;

		position: relative;
		display: flex;

		:global(.logo-base) {
			display: flex;
			height: var(--height);
			width: auto;
			color: currentColor;
			fill: currentColor;
		}

		:global(.logo-eye) {
			position: absolute;
			top: 45%;
			left: 35%;
			height: 6% !important;
			width: 6%;
			animation: logoEyeBlinkAnimation 5s infinite;
			animation-timing-function: ease-in-out;
			z-index: 1;
			pointer-events: none;
		}

		:global(.logo-visor) {
			position: absolute;
			top: -30%;
			height: 100% !important;
			left: 12.5%;
			width: 75%;
			transform: scale3d(1, 0.66, 1);
			transition-property: all;
			transition-duration: 0.125s;
			transition-timing-function: ease-in-out;
			z-index: 2;
			pointer-events: none;
		}

		&.--visor-active,
		&.--filter-active {
			:global(.logo-visor) {
				top: -4%;
				transform: scale3d(1, 1, 1);
			}
		}

		@keyframes logoEyeBlinkAnimation {
			87.5% {
				transform: scale(1);
			}

			90% {
				transform: scale(1, 0);
			}

			92.5% {
				transform: scale(1);
			}

			95% {
				transform: scale(1);
			}

			97.5% {
				transform: scale(1, 0);
			}

			100% {
				transform: scale(1);
			}
		}
	}
</style>
