<script lang="ts">
	import { createTooltip, melt } from '@melt-ui/svelte';
	import { SwitchCamera } from 'lucide-svelte';

	import { Button, Tooltip } from '$lib/primitives';

	import { cameraActive } from '$modules/camera';

	import { HEADER_BUTTON_TOOLTIP_CONFIG } from '$lib/layout/header';

	const {
		elements: { trigger, content },
		states: { open }
	} = createTooltip(HEADER_BUTTON_TOOLTIP_CONFIG);

	$: if (!$cameraActive) $open = false;
</script>

<div
	use:melt={$trigger}
	on:m-pointerenter={(e) => {
		if (!$cameraActive) e.preventDefault();
	}}
>
	<Button icon={SwitchCamera} size="large" variant="ghost" disabled={!$cameraActive} />
</div>

{#if $open && $cameraActive}
	<div use:melt={$content}>
		<Tooltip>
			<span>Switch camera</span>
		</Tooltip>
	</div>
{/if}
