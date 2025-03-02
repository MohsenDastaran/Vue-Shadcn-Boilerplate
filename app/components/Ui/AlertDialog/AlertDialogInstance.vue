<template>
	<div class="flex justify-center">
		<UiAlertDialog :open="open" :title :description>
			<UiAlertDialogContent>
				<div class="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
					<div
						class="flex size-9 shrink-0 items-center justify-center rounded-full border border-border"
						aria-hidden="true"
					>
						<Icon name="lucide:circle-alert" class="size-4 opacity-80" />
					</div>
					<UiAlertDialogHeader>
						<UiAlertDialogTitle>{{ t(title || "Are you sure?") }}</UiAlertDialogTitle>
						<UiAlertDialogDescription
							>{{ t(description || "This action cannot be undone.") }}
						</UiAlertDialogDescription>
					</UiAlertDialogHeader>
				</div>
				<UiAlertDialogFooter>
					<UiAlertDialogCancel @click="closeDialog">{{ t("Cancel") }}</UiAlertDialogCancel>
					<UiAlertDialogAction v-if="onConfirm" @click="onConfirm()">{{
						t("Confirm")
					}}</UiAlertDialogAction>
				</UiAlertDialogFooter>
			</UiAlertDialogContent>
		</UiAlertDialog>
	</div>
</template>

<script lang="ts" setup>
	import type { ModelRef } from "vue";

	useNuxtApp().$defineI18nRoute({
		locales: {
			en: {
				"Are you sure?": "Are you sure?",
				"This action cannot be undone.": "This action cannot be undone.",
				Cancel: "Cancel",
				Confirm: "Confirm",
			},
			fa: {
				"Are you sure?": "آیا از انجام این عملیات اطمینان دارید؟",
				"This action cannot be undone.": "این عملیات قابل بازگشت نیست.",
				Cancel: "انصراف",
				Confirm: "تایید",
			},
		},
	});
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
