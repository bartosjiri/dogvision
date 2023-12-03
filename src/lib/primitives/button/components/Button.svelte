<script lang="ts">
	import type { ComponentType } from 'svelte';

	import { Loader } from '$lib/primitives';

	export let ref = null;
	export let size: 'small' | 'base' | 'large' = 'base';
	export let variant: 'primary' | 'secondary' | 'ghost' = 'primary';
	export let icon: ComponentType | undefined = undefined;
	export let href: string | undefined = undefined;
	export let loading = false;
	export let disabled = false;

	$: hasIconOnly = icon && !$$slots.default;
	$: buttonProps = {
		type: 'button' as HTMLButtonElement['type'],
		tabindex: 0,
		disabled: disabled === true ? true : undefined,
		href,
		...$$restProps,
		class: [
			'button',
			size === 'small' && '--size-small',
			size === 'base' && '--size-base',
			size === 'large' && '--size-large',
			variant === 'primary' && '--variant-primary',
			variant === 'secondary' && '--variant-secondary',
			variant === 'ghost' && '--variant-ghost',
			hasIconOnly && '--icon-only',
			loading && '--loading',
			disabled && '--disabled',
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
{#if href && !loading && !disabled}
	<!-- svelte-ignore a11y-missing-attribute -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<a bind:this={ref} {...buttonProps} on:click on:mouseover on:mouseenter on:mouseleave>
		{#if icon && !loading}
			<svelte:component this={icon} />
		{/if}
		{#if loading}
			<Loader />
		{/if}
		{#if $$slots.default}
			<span>
				<slot />
			</span>
		{/if}
	</a>
{:else}
	<button bind:this={ref} {...buttonProps} on:click on:mouseover on:mouseenter on:mouseleave>
		{#if icon && !loading}
			<svelte:component this={icon} />
		{/if}
		{#if loading}
			<Loader />
		{/if}
		{#if $$slots.default}
			<span>
				<slot />
			</span>
		{/if}
	</button>
{/if}

<style lang="scss">
	button.button,
	a.button {
		--color-foreground: var(--color-background-01);
		--color-background: var(--color-foreground-01);
		--color-border: var(--color-foreground-01);
		--color-foreground-hover: var(--color-background-01);
		--color-background-hover: var(--color-accent-06);
		--color-border-hover: var(--color-accent-06);

		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: max-content;
		color: var(--color-foreground);
		background: var(--color-background);
		border: 1px solid var(--color-border);
		border-radius: 0.8rem;
		transition-property: color, background, border-color;
		transition-duration: var(--transition-duration-01);
		transition-timing-function: var(--transition-function-01);
		cursor: pointer;
		box-shadow: none;
		outline: none;

		@media (hover: hover) {
			&:hover {
				color: var(--color-foreground-hover);
				background: var(--color-background-hover);
				border-color: var(--color-border-hover);
			}
		}

		:global(span) {
			margin-left: 0.8rem;
		}

		:global(svg) {
			width: auto;
			stroke-width: 1.5;
		}

		span {
			display: inline-block;
			font-weight: 500;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}

		&.--size-small {
			height: 3.2rem;
			font-size: 1.4rem;
			line-height: 2rem;
			padding: 0 1.2rem;

			:global(svg),
			:global(.loader) {
				height: 1.6rem;
				--height: 1.6rem;
			}
		}

		&.--size-base {
			height: 4rem;
			font-size: 1.6rem;
			line-height: 2rem;
			padding: 0 1.2rem;

			:global(svg),
			:global(.loader) {
				height: 2.2rem;
				--height: 2.2rem;
			}
		}

		&.--size-large {
			height: 4.8rem;
			font-size: 1.6rem;
			line-height: 2.4rem;
			padding: 0 1.2rem;

			:global(svg),
			:global(.loader) {
				height: 2.4rem;
				--heigth: 2.4rem;
			}
		}

		&.--icon-only {
			padding: 0;

			&.--size-small {
				width: 3.2rem;
			}

			&.--size-base {
				width: 4rem;
			}

			&.--size-large {
				width: 4.8rem;
			}
		}

		&.--variant-ghost {
			--color-foreground: var(--color-foreground-01);
			--color-background: transparent;
			--color-border: transparent;
			--color-foreground-hover: var(--color-foreground-01);
			--color-background-hover: var(--color-accent-02);
			--color-border-hover: var(--color-accent-02);
		}

		&.--loading,
		&.--disabled {
			--color-foreground: var(--color-accent-03);
			--color-background: var(--color-accent-01);
			--color-border: var(--color-accent-02);
			--color-foreground-hover: var(--color-accent-03);
			--color-background-hover: var(--color-accent-01);
			--color-border-hover: var(--color-accent-02);
			cursor: not-allowed;
		}
	}
</style>
