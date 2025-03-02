<template>
	<td :class="styles({ class: props.class })" class="rtl:rtl">
		<div class="w-full">
			<UiTooltip disable-closing-trigger>
				<template #trigger>
					<UiTooltipTrigger as-child>
						<button v-if="truncated">{{ truncated }}</button>
						<slot v-else />
					</UiTooltipTrigger>
				</template>
				<template #content>
					<UiTooltipContent>
						<NuxtLink :to="text" external class="text-blue-400" v-if="isLink">{{ text }}</NuxtLink>
						<p v-else-if="text">{{ text }}</p>
						<slot v-else name="tooltipContent" />
					</UiTooltipContent>
				</template>
			</UiTooltip>
		</div>
	</td>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		class?: any;
		text?: string;
		isLink?: boolean;
	}>();
	const truncated = truncate(props.text || "", 30);

	const styles = tv({
		base: "whitespace-nowrap p-4 align-middle [&:has([role=checkbox])]:pr-0",
	});
</script>
<style scoped></style>
