import { get } from 'svelte/store';

import { filterElement as filterElementStore, filterActive } from '../stores/filter.store';
import {
	cameraElement as cameraElementStore,
	cameraWidth as cameraWidthStore,
	cameraHeight as cameraHeightStore,
	cameraActive as cameraActiveStore
} from '$modules/camera';

export const startFilter = () => {
	const canvasElement = get(filterElementStore);
	if (!canvasElement) {
		throw new Error('Canvas element not found.');
	}

	const context = canvasElement.getContext('2d', { willReadFrequently: true });

	filterActive.set(true);

	const modifyFrame = () => {
		const cameraActive = get(cameraActiveStore);
		if (!cameraActive) return;

		const cameraElement = get(cameraElementStore);
		const cameraWidth = get(cameraWidthStore);
		const cameraHeight = get(cameraHeightStore);

		canvasElement.width = cameraElement?.clientWidth || 0;
		canvasElement.height = cameraElement?.clientHeight || 0;

		if (!cameraElement || !cameraWidth || !cameraHeight) {
			requestAnimationFrame(modifyFrame);
			return;
		}

		context?.drawImage(cameraElement, 0, 0, canvasElement.width, canvasElement.height);
		const imageData = context?.getImageData(0, 0, canvasElement.width, canvasElement.height);

		if (imageData) {
			const data = imageData?.data;

			for (let i = 0; i < data.length; i += 4) {
				const red = data[i];
				const green = data[i + 1];

				const desaturateGreen = (red + green) / 2;

				data[i] = desaturateGreen;
				data[i + 1] = desaturateGreen;
			}

			context?.putImageData(imageData, 0, 0);
		}

		requestAnimationFrame(modifyFrame);
	};

	modifyFrame();
};
