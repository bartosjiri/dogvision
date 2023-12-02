<script lang="ts" context="module">
	import type { ToastT } from '../types/toast.types';

	const {
		elements: { content, title, description, close },
		helpers,
		states: { toasts }
	} = createToaster<ToastT>();

	export const addToast = helpers.addToast;
	export const elements = { content, title, description, close };
</script>

<script lang="ts">
	import { createToaster, melt } from '@melt-ui/svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import { X, XCircle } from 'lucide-svelte';

	import { Button } from '$lib/primitives';
</script>

<div
	class:toaster={true}
	in:fly={{ duration: 150, y: '4rem' }}
	out:fly={{ duration: 150, y: '4rem' }}
>
	{#each $toasts as { id, data } (id)}
		<div
			use:melt={$content(id)}
			class:toast={true}
			animate:flip={{ duration: 500 }}
			in:fly={{ duration: 150, y: '4rem' }}
			out:fly={{ duration: 150, y: '4rem' }}
		>
			<div class:content={true}>
				<div class:icon={true} class={`--variant-${data.variant}`}>
					<svelte:component this={(data.variant === 'error' && XCircle) || X} />
				</div>
				<span use:melt={$description(id)}>
					{data.text}
				</span>
			</div>
			<div class:actions={true}>
				<Button icon={X} size="small" variant="ghost" on:click={() => helpers.removeToast(id)} />
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.toaster {
		position: relative;

		.toast {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0.8rem;
			padding-left: 1.6rem;
			margin-top: 0.8rem;
			background: var(--color-background-01);
			border-radius: 1.2rem;
			box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 1px 0px,
				rgba(0, 0, 0, 0.04) 0px 4px 8px -4px, rgba(0, 0, 0, 0.06) 0px 16px 24px -8px;
			z-index: 1002;
			pointer-events: all;

			.content {
				display: flex;
				align-items: center;

				.icon {
					display: flex;
					margin-right: 0.8rem;

					:global(svg) {
						height: 2rem;
					}

					&.--variant-error {
						color: var(--color-error-01);
					}
				}

				span {
					font-weight: 500;
				}
			}

			.actions {
				margin-left: 1.6rem;
			}
		}
	}
</style>
