import { get } from 'svelte/store';

import { addToast } from '$lib/primitives';

import { cameraElement as cameraElementStore, cameraFacingMode } from '../stores/camera.store';

import { startCamera } from './startCamera';

export const switchCamera = async () => {
	try {
		const cameraElement = get(cameraElementStore);

		if (!cameraElement) return;

		const mediaStream = cameraElement.srcObject as MediaStream;
		mediaStream.getTracks().forEach((track) => track.stop());

		const facingMode = get(cameraFacingMode) === 'environment' ? 'user' : 'environment';
		cameraFacingMode.set(facingMode);

		await startCamera({ initFilter: false });
	} catch (err) {
		addToast({
			data: {
				text: "Couldn't access the camera.",
				variant: 'error'
			}
		});
	}
};
