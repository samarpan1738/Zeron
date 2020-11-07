import { useState, useEffect } from "react";

export default function useFetch(url, method = "GET", body = {}) {
	const [state, setState] = useState({ data: null, loading: false });

	useEffect(() => {
		setState((prev) => ({ data: prev.data, loading: true }));
		let reqData = {
			method,

			headers: {
				"Content-Type": "application/json",
			},
		};
		if (body) reqData.body = JSON.stringify(body);
		fetch(url, reqData)
			.then((res) => res.json())
			.then((data) => setState({ data, loading: false }))
			.catch((err) => {
				console.log(err);
			});
	}, [url]);

	useEffect(() => {
		if (state.post) {
		}
	}, [state]);

	return state;
}
