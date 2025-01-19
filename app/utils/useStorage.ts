import { clientError } from "@common/utils/clientError.js";
import Cookies from "js-cookie";

export const enum enuStorages {
	local = "local",
	cookie = "cookie",
	session = "session",
}
export const enum enuStorageKey {
	accessToken = "accessToken",
	refreshToken = "refreshToken",
	user = "user",
}

interface intfStorageKey {
	[key: string]: {
		where: enuStorages;
		key: enuStorageKey | string;
	};
}

export const StorageKeys: intfStorageKey = {
	accessToken: { where: enuStorages.cookie, key: enuStorageKey.accessToken },
	refreshToken: {
		where: enuStorages.cookie,
		key: enuStorageKey.refreshToken,
	},
	user: {
		where: enuStorages.local,
		key: enuStorageKey.user,
	},
};

export const storage = {
	set(data: { value: any; key: enuStorageKey }) {
		if (typeof data.value !== "string") data.value = JSON.stringify(data.value);
		try {
			switch (StorageKeys[data.key].where) {
				case enuStorages.local:
					window.localStorage.setItem(StorageKeys[data.key].key, data.value);
					break;
				case enuStorages.cookie:
					Cookies.set(data.key, data.value);
					break;
				case enuStorages.session:
					window.sessionStorage.setItem(data.key, data.value);
					break;
			}
		} catch (error) {
			clientError.badRequest(`define ${data.key} in StorageKeys`);
		}
	},
	get(key: enuStorageKey) {
		try {
			let value: any = null;
			switch (StorageKeys[key].where) {
				case enuStorages.local:
					value = window.localStorage.getItem(StorageKeys[key].key);
					break;
				case enuStorages.cookie:
					value = Cookies.get(StorageKeys[key].key);
					break;
				case enuStorages.session:
					value = window.sessionStorage.getItem(StorageKeys[key].key);
					break;
			}
			return value;
		} catch (error) {
			clientError.badRequest(`define ${key} in StorageKeys`);
		}
	},
	remove(key: enuStorageKey) {
		try {
			switch (StorageKeys[key].where) {
				case enuStorages.local:
					return window.localStorage.removeItem(StorageKeys[key].key);
				case enuStorages.cookie:
					return Cookies.remove(StorageKeys[key].key);
				case enuStorages.session:
					return window.sessionStorage.removeItem(StorageKeys[key].key);
			}
		} catch (error) {
			clientError.badRequest(`define ${key} in StorageKeys`);
		}
	},
	removeAll(storage: enuStorages) {
		switch (storage) {
			case enuStorages.local:
				return window.localStorage.clear();
			case enuStorages.cookie:
				return Object.keys(StorageKeys).forEach(
					(key) =>
						StorageKeys[key].where == enuStorages.cookie && Cookies.remove(StorageKeys[key].key)
				);
			case enuStorages.session:
				return window.sessionStorage.clear();
		}
	},
};
