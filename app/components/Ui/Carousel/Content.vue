<template>
	<div ref="carouselRef" :class="styles().base({ orientation })">
		<div :class="styles().content({ orientation, class: props.class })" v-bind="$attrs">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useCarousel } from "~/components/Ui/Carousel/useCarousel";
	import type { WithClassAsProps } from "~/components/Ui/Carousel/useCarousel";

	defineOptions({ inheritAttrs: false });
	const props = defineProps<WithClassAsProps>();
	const { carouselRef, orientation } = useCarousel();

	const styles = tv({
		slots: {
			base: "overflow-hidden",
			content: "flex",
		},
		variants: {
			orientation: {
				horizontal: { content: "-ml-4" },
				vertical: { content: "-mt-4 flex-col" },
			},
		},
	});
</script>
