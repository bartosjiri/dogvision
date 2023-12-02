<script lang="ts">
	import { PageMeta } from '$util/meta';
	import { FathomAnalytics } from '$util/fathom-analytics';

	import { Header } from '$lib/layout/header';

	import { AboutToggle } from '$modules/about';
	import { FilterToggle } from '$modules/filter';
	import { CameraSwitch, CameraStop } from '$modules/camera';

	import '../styles/_global.scss';
</script>

<PageMeta />
<FathomAnalytics />

<main>
	<slot />
</main>
<Header>
	<AboutToggle />
	<div class:divider={true} />
	<FilterToggle />
	<CameraSwitch />
	<CameraStop />
</Header>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		margin: 0 auto;
	}
</style>
