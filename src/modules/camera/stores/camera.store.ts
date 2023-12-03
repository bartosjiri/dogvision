import { writable, type Writable } from 'svelte/store';

export const cameraElement: Writable<HTMLVideoElement | null> = writable(null);
export const cameraFacingMode: Writable<'user' | 'environment'> = writable('environment');
export const cameraLoading = writable(false);
export const cameraActive = writable(false);
