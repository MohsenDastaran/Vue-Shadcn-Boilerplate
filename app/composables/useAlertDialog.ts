import AlertDialog from "@/components/Ui/AlertDialog/AlertDialogInstance.vue";
import { createApp, defineComponent, h, ref } from "vue";
import type { VNode } from "vue";

interface IntDialog {
	title?: string;
	description?: string;
	content?: VNode | Element | string;
	onConfirm: Function;
	onReject?: Function | boolean;
	confirmText?: string;
}
export const useAlertDialog = (info: IntDialog) => {
	const isOpen = ref(true); // Manage the open/close state of the dialog

	const dialogComponent = defineComponent({
		setup() {
			return () =>
				h(
					AlertDialog as any,
					{
						...info,
						t: useI18n().$ts,
						modelValue: isOpen.value, // Bind v-model to the open state
						"onUpdate:modelValue": (value: boolean) => {
							isOpen.value = value; // Update the state when the dialog is closed
						},
					},
					() => info.content
				);
		},
	});

	const instance = createApp(dialogComponent).mount(document.createElement("div"));

	document.body.appendChild(instance.$el);

	return {
		close: () => {
			isOpen.value = false; // Programmatically close the dialog
		},
	};
};

// export const removeDialog = () => {
// 	const element: HTMLElement | null = document.querySelector(".modal");
// 	if (element) element.parentElement?.removeChild(element);
// 	document.body.style.overflow = "auto";
// 	document.body.classList.remove("modal-open");
// };
