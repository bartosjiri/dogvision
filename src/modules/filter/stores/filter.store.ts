import { writable, type Writable } from 'svelte/store';

import { visorActive } from '$lib/primitives/logo';

export const filterElement: Writable<HTMLCanvasElement | null> = writable(null);
export const filterActive = writable(false);

filterActive.subscribe((active) => {
	visorActive.set(active);
});
