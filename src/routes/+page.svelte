<script lang="ts">
	import { Camera } from '$modules/camera';
	import { Filter } from '$modules/filter';
</script>

<div class:video-container={true}>
	<Camera />
	<Filter />
</div>

<style lang="scss">
	.video-container {
		position: relative;
		display: flex;
	}
</style>
