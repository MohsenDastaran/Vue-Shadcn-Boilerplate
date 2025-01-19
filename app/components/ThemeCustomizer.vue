<template>
	<div class="p-4">
		<div class="grid space-y-1">
			<h1 class="text-md font-semibold text-foreground">Customize</h1>
			<p class="text-xs text-muted-foreground">Pick a style and color for your components.</p>
		</div>
		<div class="space-y-1.5 pt-6">
			<UiLabel for="color" class="text-xs"> Color </UiLabel>
			<div class="grid grid-cols-3 gap-2 py-1.5">
				<UiButton
					v-for="(color, index) in allColors"
					:key="index"
					variant="outline"
					class="h-8 justify-start px-3"
					:class="color === theme ? 'border-2 border-foreground' : ''"
					@click="setTheme(color)"
				>
					<span
						class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
						:style="{ backgroundColor: colors[color][7]?.rgb }"
					>
						<Icon v-if="color === theme" name="lucide:check" class="h-3 w-3 text-white" />
					</span>
					<span class="ml-2 text-xs capitalize">
						{{ color }}
					</span>
				</UiButton>
			</div>
		</div>
		<div class="space-y-1.5 pt-6">
			<UiLabel for="radius" class="text-xs"> Radius </UiLabel>
			<div class="grid grid-cols-5 gap-2 py-1.5">
				<UiButton
					v-for="(r, index) in RADII"
					:key="index"
					variant="outline"
					class="h-8 justify-center px-3"
					:class="r === radius ? 'border-2 border-foreground' : ''"
					@click="setRadius(r)"
				>
					<span class="text-xs">
						{{ r }}
					</span>
				</UiButton>
			</div>
		</div>
		<div class="space-y-1.5 pt-6">
			<UiLabel for="theme" class="text-xs"> Theme </UiLabel>

			<div class="flex space-x-2 py-1.5">
				<UiButton
					class="h-8"
					v-for="(m, i) in modes"
					:key="i"
					variant="outline"
					:class="{ 'border-2 border-foreground': colorMode.value === m.value }"
					@click="setColorMode(m.value)"
				>
					<Icon :name="m.icon" class="mr-2 h-4 w-4" />
					<span class="text-xs">{{ m.title }}</span>
				</UiButton>
				<!-- <UiButton
					class="h-8"
					variant="outline"
					:class="{ 'border-2 border-foreground': isDark }"
					@click="setColorMode"
				>
					<Icon name="lucide:moon" class="mr-2 h-4 w-4" />
					<span class="text-xs">Dark</span>
				</UiButton>
				<UiButton
					class="h-8"
					variant="outline"
					:class="{ 'border-2 border-foreground': isDark }"
					@click="setColorMode"
				>
					<Icon name="lucide:system" class="mr-2 h-4 w-4" />
					<span class="text-xs">Dark</span>
				</UiButton> -->
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	defineProps<{
		allColors: Color[];
	}>();

	const { theme, radius, setRadius, setTheme } = useConfigStore();
	const colorMode = useColorMode();

	const modes = [
		{ icon: "lucide:sun", title: "Light", value: "light" },
		{ icon: "lucide:moon", title: "Dark", value: "dark" },
		// { icon: "lucide:laptop", title: "System", value: "system" },
	];
	const setColorMode = (val: string) => {
		colorMode.preference = val;
	};
</script>
