<template>
	<div>
		<InspireAuroraBackground class="top-[-4rem]">
			<div
				v-motion
				:initial="{ opacity: 0, y: 40 }"
				:visible="{
					opacity: 1,
					y: 0,
					transition: {
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					},
				}"
				class="relative flex flex-col items-center justify-center gap-4 px-4"
			>
				<div class="text-center text-3xl font-bold dark:text-white md:text-7xl">
					{{ $t("Title") }}
				</div>
				<div class="py-4 text-base font-extralight dark:text-neutral-200 md:text-4xl">
					{{ $t("subTitle") }}
				</div>
				<InspireInteractiveButton />
			</div>
		</InspireAuroraBackground>
		<UiContainer>
			<NotivuePage />
			<UiGradientDivider class="container my-7" />
		</UiContainer>
		<div class="container mx-auto p-8">
			<h1 class="mb-8 text-3xl font-bold">{{ $t("inspireExamples") }}:</h1>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<!-- Basic usage -->
				<InspireDirectionAwareHover
					image-url="https://images.unsplash.com/photo-1728755833852-2c138c84cfb1?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					class="shadow-lg"
				>
					<h2 class="text-xl font-semibold">Beautiful Landscape</h2>
					<p class="mt-2">Discover nature's wonders</p>
				</InspireDirectionAwareHover>

				<!-- Custom styling -->
				<InspireDirectionAwareHover
					image-url="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
					class="border-4 border-primary"
					image-class="scale-100 hover:scale-110"
					children-class="bg-black bg-opacity-50 p-4 rounded"
				>
					<h2 class="text-xl font-semibold">Urban Adventure</h2>
					<p class="mt-2">Explore the city lights</p>
				</InspireDirectionAwareHover>

				<!-- With button -->
				<InspireDirectionAwareHover
					image-url="https://images.unsplash.com/photo-1664710476481-1213c456c56c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					class="overflow-hidden rounded-xl shadow-xl"
				>
					<h2 class="text-xl font-semibold">Culinary Delights</h2>
					<p class="mt-2">Savor exquisite flavors</p>
					<button class="mt-4 rounded bg-white px-4 py-2 text-black">View Recipe</button>
				</InspireDirectionAwareHover>
			</div>
		</div>
		<div class="flex h-[40rem] flex-col items-center justify-center px-4">
			<h2 class="mb-10 text-center text-xl text-black dark:text-white sm:mb-20 sm:text-5xl">
				{{ $t("AskAnythingSilly") }}
			</h2>
			<InspireVanishingInput v-model="text" :placeholders="placeholders" />
		</div>
		<UiGradientDivider class="container my-7" />

		<UiContainer class="mb-60 mt-20">
			<h1 class="mb-8 text-3xl font-bold">{{ $t("UIThingExamples") }}:</h1>

			<UiContextMenu>
				<UiContextMenuTrigger
					as="div"
					class="mx-auto flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
				>
					{{ $t("RightClickText") }}
				</UiContextMenuTrigger>
				<UiContextMenuContent loop class="w-64">
					<UiContextMenuItem title="Back" inset shortcut="⌘[" />
					<UiContextMenuItem title="Forward" disabled inset shortcut="⌘]" />
					<UiContextMenuItem title="Reload" inset shortcut="⌘R" />
					<UiContextMenuSub>
						<UiContextMenuSubTrigger title="More Tools" inset />
						<UiContextMenuSubContent class="w-52">
							<UiContextMenuItem title="New window..." />
							<UiContextMenuItem title="Create shortcut..." />
							<UiContextMenuItem title="Save page as..." shortcut="⌘S" />
							<UiContextMenuItem title="Clear data" shortcut="⌘⇧⌫" />
							<UiContextMenuSeparator />
							<UiContextMenuItem title="Developer tools" shortcut="⌥⌘I" />
						</UiContextMenuSubContent>
					</UiContextMenuSub>
					<UiContextMenuSeparator />
					<UiContextMenuCheckboxItem
						v-model:checked="showBookmark"
						title="Show Bookmarks Bar"
						inset
						shortcut="⌘⇧B"
						@select="(e) => e.preventDefault()"
					/>
					<UiContextMenuCheckboxItem
						v-model:checked="showFullUrls"
						title="Show full URLs"
						inset
						shortcut="⌘⇧U"
						@select="(e) => e.preventDefault()"
					/>
					<UiContextMenuSeparator />
					<UiContextMenuLabel inset label="Choose a person" />
					<UiContextMenuSeparator />
					<UiContextMenuRadioGroup v-model="person">
						<UiContextMenuRadioItem
							title="Paul Rafael"
							inset
							value="1"
							@select="(e) => e.preventDefault()"
						/>
						<UiContextMenuRadioItem
							title="Sarah Lindsey"
							inset
							value="2"
							@select="(e) => e.preventDefault()"
						/>
					</UiContextMenuRadioGroup>
				</UiContextMenuContent>
			</UiContextMenu>
		</UiContainer>
	</div>
</template>

<script lang="ts" setup>
	const placeholders = [
		"Why is my code always broken?",
		"What does 'undefined' even mean?",
		"How to center a div (for real this time)",
		"Am I smarter than a compiler?",
		"Do loops ever get dizzy?",
	];
	const text = ref("");
	const showBookmark = ref(true);
	const showFullUrls = ref(false);
	const person = ref("1");
</script>
