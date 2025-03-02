<template>
	<UiDialog v-model:open="open">
		<UiDialogContent class="md:max-w-[50dvw]" :title :description>
			<template #content>
				<slot />
			</template>
			<template #footer>
				<UiDialogFooter v-if="onReject || onConfirm">
					<UiButton
						v-if="onReject"
						variant="outline"
						class="mt-2 sm:mt-0"
						@click="
							() =>
								onReject === true
									? closeDialog()
									: typeof onReject == 'function'
										? onReject()
										: undefined
						"
					>
						{{ t("Cancel") }}
					</UiButton>
					<UiButton v-if="onConfirm" @click="onConfirm()">{{ confirmText || t("Yes") }}</UiButton>
				</UiDialogFooter>
			</template>
		</UiDialogContent>
	</UiDialog>
</template>

<script lang="ts" setup>
	import type { ModelRef } from "vue";

	const open: ModelRef<boolean | undefined> = defineModel();
	interface IntDialog {
		title: string;
		description?: string;
		// content: VNode;
		onConfirm?: Function;
		onReject?: Function | boolean;
		t: Function;
		confirmText?: string;
	}

	defineProps<IntDialog>();
	const closeDialog = () => {
		open.value = false;
	};
</script>
