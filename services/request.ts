import axios from "axios";
const baseHostName =
	typeof window !== "undefined" &&
	!window.location.hostname.includes("localhost")
		? window.location.hostname
		: "uat.levants.io";
const baseURL =
	process.env.SERVER_ADDRESS || `http://api.${baseHostName}/api/v1`;
const RequestInstance = axios.create({ baseURL });
export const requestHeaderTransformer = (request) => {
	const { noAuth, ...headers } = request.headers;
	if (noAuth) {
		request.headers = headers;
	} else if (!("Authorization" in request.headers)) {
		request.headers = {
			...request.headers,
			Authorization: `123`,
		};
	}
	return request;
};
RequestInstance.interceptors.request.use(requestHeaderTransformer, (e) =>
	Promise.reject(e)
);
export { RequestInstance, baseURL };
