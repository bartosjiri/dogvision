import { get } from 'svelte/store';

import { cameraElement as cameraElementStore, cameraActive } from '../stores/camera.store';
import { filterActive } from '$modules/filter';

export const stopCamera = () => {
	const cameraElement = get(cameraElementStore);

	if (!cameraElement) return;

	const mediaStream = cameraElement.srcObject as MediaStream;
	mediaStream.getTracks().forEach((track) => track.stop());

	cameraElement.srcObject = null;
	cameraActive.set(false);

	filterActive.set(false);
};
