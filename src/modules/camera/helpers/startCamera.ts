import { get } from 'svelte/store';

import { startFilter } from '$modules/filter';
import { addToast } from '$lib/primitives';

import {
	cameraElement as cameraElementStore,
	cameraFacingMode,
	cameraLoading,
	cameraActive
} from '../stores/camera.store';

export const startCamera = async ({ initFilter = true }) => {
	try {
		cameraLoading.set(true);

		const cameraElement = get(cameraElementStore);
		if (!cameraElement) {
			throw new Error('Camera element not found.');
		}

		const mediaStream = await navigator.mediaDevices.getUserMedia({
			audio: false,
			video: {
				// @NOTE: Ideally, this should set some width and height relevant to the device's screen size (mind resizing and browser compatibility)
				facingMode: get(cameraFacingMode)
			}
		});

		cameraElement.srcObject = mediaStream;
		cameraElement.play();

		cameraActive.set(true);
		cameraLoading.set(false);

		if (initFilter) startFilter();
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
