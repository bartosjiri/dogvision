import { writable, type Writable } from 'svelte/store';

export const cameraElement: Writable<HTMLVideoElement | null> = writable(null);
export const cameraWidth = writable(0);
export const cameraHeight = writable(0);
export const cameraLoading = writable(false);
export const cameraActive = writable(false);
