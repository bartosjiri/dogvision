import type { CreateTooltipProps } from '@melt-ui/svelte';

export const HEADER_BUTTON_TOOLTIP_CONFIG: CreateTooltipProps = {
	positioning: {
		placement: 'bottom',
		gutter: 4
	},
	openDelay: 0,
	closeDelay: 0,
	closeOnPointerDown: false,
	// forceVisible: true,
	disableHoverableContent: true
};
