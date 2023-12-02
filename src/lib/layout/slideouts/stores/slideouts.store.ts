import { writable, get, type Writable } from 'svelte/store';

import { Toaster } from '$lib/primitives';

import type { SlideoutT } from '../types/slideouts.types';

const defaultSlideouts: SlideoutT[] = [
	{
		id: 'toaster',
		component: Toaster
	}
];

export const slideouts: Writable<SlideoutT[]> = writable([...defaultSlideouts]);

export const addSlideout = (slideout: SlideoutT) => {
	if (get(slideouts).some((s) => s.id === slideout.id)) return;

	slideouts.update((slideouts) => [...slideouts, slideout]);
};

export const removeSlideout = (id: SlideoutT['id']) => {
	slideouts.update((slideouts) => slideouts.filter((s) => s.id !== id));
};
