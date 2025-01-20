<template>
	<ConfigProvider :use-id="useId">
		<div>
			<NuxtLoadingIndicator />
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
			<UiNotivue />
		</div>
	</ConfigProvider>
</template>

<script setup lang="ts">
	import { ConfigProvider } from "radix-vue";

	// i18n config
	const head = useLocaleHead({
		addDirAttribute: true,
		addSeoAttributes: true,
	});

	useHead(head);
</script>
