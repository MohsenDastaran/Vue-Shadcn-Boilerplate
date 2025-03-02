<template>
	<div v-for="(item, i) in menuitems" :key="i">
		<UiDropdownMenuLabel v-if="item.label" :label="item.label" />
		<UiDropdownMenuSeparator v-else-if="item.divider" />
		<UiDropdownMenuItem
			class="cursor-pointer"
			v-else-if="item.title && !item.items"
			:title="$ts(item.title)"
			:icon="item.icon"
			@click="item.onClick"
			:shortcut="item.shortcut"
			:disabled="item.disabled"
		/>
		<UiDropdownMenuSub v-else-if="item.title && item.items">
			<UiDropdownMenuSubTrigger
				:title="$ts(item.title)"
				:icon="item.icon"
				:text-value="$ts(item.title)"
			/>
			<UiDropdownMenuSubContent>
				<template v-for="(child, k) in item.items" :key="`child-${k}`">
					<UiDropdownMenuSeparator v-if="child.divider" />
					<UiDropdownMenuItem
						class="cursor-pointer"
						v-else
						:title="$ts(child.title)"
						:icon="child.icon"
						@click="child.onClick"
						:shortcut="child.shortcut"
					/>
				</template>
			</UiDropdownMenuSubContent>
		</UiDropdownMenuSub>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		menuitems: any[];
	}>();
</script>
