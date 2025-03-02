enum APIMETHODSTYPES {
	GET = "get",
	DELETE = "delete",
	POST = "post",
	PUT = "put",
	PATCH = "patch",
}

type ApiRequestData = {
	url: string;
	method: APIMETHODSTYPES;
	body?: Record<string, unknown>;
	queryParams?: Record<string, any>;
	requiresAuth?: boolean;
};
type ApiRequestDataWithoutMethod = Omit<ApiRequestData, "method">;

const baseURL = "https://www.example.net/";

const useApi = (data: ApiRequestData, element?: HTMLElement) =>
	new Promise((resolve, reject) => {
		let url = data.url.startsWith("http") ? data.url : baseURL + data.url;

		// Add query parameters to the URL for GET requests
		if (data.queryParams) {
			const queryString = new URLSearchParams(data.queryParams).toString().replace(/%2F/g, "/"); // Fix: Preserve slashes;
			if (queryString) {
				url += `?${queryString}`;
			}
		}
		const headers = {
			token: 'test',
		};

		// Add loading effect if element is provided
		let loader: HTMLElement | null = null;
		if (element !== undefined) {
			if (element === null) element = window.document.body as HTMLElement;
			element.classList.add("loading");
			loader = document.createElement("div");
			loader.className = "loader";
			element.appendChild(loader);
		}

		$fetch(url, {
			method: data.method,
			body: data.body,
			headers,
		})
			.then((res: any) => resolve(res))
			.catch((err) => {
				// useApiErrorHandler().handleApiError(err.data?.data, err.data?.message);
				reject(err);
			})
			.finally(() => {
				// Remove loading effect
				if (element) {
					element.classList.remove("loading");
					if (loader) {
						element.removeChild(loader);
					}
				}
			});
	});

export const api = {
	get: (
		{ url, queryParams, requiresAuth = true }: ApiRequestDataWithoutMethod,
		element?: HTMLElement
	) =>
		useApi(
			{
				url,
				method: APIMETHODSTYPES.GET,
				queryParams,
				requiresAuth,
			},
			element
		),
	delete: (
		{ url, queryParams, requiresAuth = true }: ApiRequestDataWithoutMethod,
		element?: HTMLElement
	) =>
		useApi(
			{
				url,
				method: APIMETHODSTYPES.DELETE,
				queryParams,
				requiresAuth,
			},
			element
		),

	post: (
		{ url, queryParams, requiresAuth = true, body }: ApiRequestDataWithoutMethod,
		element?: HTMLElement
	) =>
		useApi(
			{
				url,
				method: APIMETHODSTYPES.POST,
				body,
				queryParams,
				requiresAuth,
			},
			element
		),
	put: (
		{ url, queryParams, requiresAuth = true, body }: ApiRequestDataWithoutMethod,
		element?: HTMLElement
	) =>
		useApi(
			{
				url,
				method: APIMETHODSTYPES.PUT,
				body,
				queryParams,
				requiresAuth,
			},
			element
		),
	patch: (
		{ url, queryParams, requiresAuth = true, body }: ApiRequestDataWithoutMethod,
		element?: HTMLElement
	) =>
		useApi(
			{
				url,
				method: APIMETHODSTYPES.PATCH,
				body,
				queryParams,
				requiresAuth,
			},
			element
		),
};
