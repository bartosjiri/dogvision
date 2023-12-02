import { get } from 'svelte/store';

import { startFilter } from '$modules/filter';
import { addToast } from '$lib/primitives';

import {
	cameraElement as cameraElementStore,
	cameraLoading,
	cameraActive
} from '../stores/camera.store';

export const startCamera = async () => {
	try {
		cameraLoading.set(true);

		const cameraElement = get(cameraElementStore);
		if (!cameraElement) {
			throw new Error('Camera element not found.');
		}

		const mediaStream = await navigator.mediaDevices.getUserMedia({
			audio: false,
			video: {
				width: { ideal: 1920 }
			}
		});

		cameraElement.srcObject = mediaStream;
		cameraElement.play();

		cameraActive.set(true);
		cameraLoading.set(false);

		startFilter();
	} catch (err) {
		if (import.meta.env.DEV) {
			console.error('[@DEBUG] Error accessing the camera:', err);
		}

		cameraLoading.set(false);
		cameraActive.set(false);

		addToast({
			data: {
				text: "Couldn't access the camera.",
				variant: 'error'
			}
		});
	}
};
