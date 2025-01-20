<template>
	<div>
		<UiNavbar sticky>
			<UiContainer class="flex h-14 items-center justify-between">
				<I18nLink class="text-lg font-semibold !text-primary" to="/">{{ SITE_NAME }}</I18nLink>
				<div class="flex items-center gap-2">
					<ThemePopover />
					<UiButton
						external
						to="https://github.com/MohsenDastaran/Vue-Shadcn-Boilerplate"
						target="_blank"
						variant="ghost"
						size="icon-sm"
						title="View on Github"
					>
						<span class="sr-only">View on github</span>
						<Icon name="lucide:github" class="size-4" />
					</UiButton>

					<UiDropdownMenu>
						<UiDropdownMenuTrigger as-child>
							<UiButton class="h-9 w-9" variant="ghost" size="icon" title="Locale switcher">
								<span class="sr-only">Locale switcher</span>
								<ClientOnly>
									<Icon name="lucide:languages" class="h-[18px] w-[18px]" />
								</ClientOnly>
							</UiButton>
						</UiDropdownMenuTrigger>
						<UiDropdownMenuContent align="end" :side-offset="5">
							<UiDropdownMenuItem
								class="cursor-pointer"
								v-for="(m, i) in modes"
								:key="i"
								:icon="m.icon"
								:title="m.title"
								@click="$switchLocale(m.value)"
							/>
						</UiDropdownMenuContent>
					</UiDropdownMenu>
				</div>
			</UiContainer>
		</UiNavbar>
		<slot />
	</div>
</template>

<script lang="ts" setup>
	import ThemePopover from "./ThemePopover.vue";

	const modes = [
		{ icon: "lucide:languages", title: "English", value: "en" },
		{ icon: "lucide:languages", title: "فارسی", value: "fa" },
		{ icon: "lucide:languages", title: "العربية", value: "ar" },
		{ icon: "lucide:languages", title: "中国人", value: "zh" },
		{ icon: "lucide:languages", title: "Español", value: "es" },
	];
</script>
