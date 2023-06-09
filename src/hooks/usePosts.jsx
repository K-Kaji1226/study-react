import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePosts = () => {
	const { data, isLoading, error } = useSWR(
		"https://jsonplaceholder.typicode.com/posts",
		fetcher
	);

	return {
		data,
		error,
		isLoading,
		isEmpty: data && data.length === 0,
	};
};
