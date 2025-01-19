export const useUserStore = defineStore("User", () => {
	const users = ref<any[]>([]);

	const fetchUsers = async () => {
		const res = await $fetch<{ results: Array<any>; info: Record<string, string | number> }>(
			"https://randomuser.me/api/?results=100"
		);
		users.value = res.results;
		return res;
	};
	return {
		users,
		fetchUsers,
	};
});
