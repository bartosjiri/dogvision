<script lang="ts">
	import { PageMeta } from '$util/meta';
	import { UmamiAnalytics } from '$util/umami-analytics';

	import { Header } from '$lib/layout/header';

	import { AboutToggle } from '$modules/about';
	import { FilterToggle } from '$modules/filter';
	import { CameraSwitch, CameraStop } from '$modules/camera';

	import '../styles/_global.scss';
</script>

<PageMeta />
<UmamiAnalytics />

<slot />
<Header>
	<AboutToggle />
	<div class:divider={true} />
	<FilterToggle />
	<CameraSwitch />
	<CameraStop />
</Header>

<style lang="scss">
	:global(main) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		margin: 0 auto;
	}
</style>
