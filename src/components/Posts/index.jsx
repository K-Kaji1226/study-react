// import { useEffect, useCallback, useReducer } from "react";
import Link from "next/link";
import { usePosts } from "src/hooks/usePosts";

export const Posts = () => {
	const { data, isLoading, error, isEmpty } = usePosts();

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	if (isEmpty) {
		return <div>データは空です</div>;
	}

	return (
		<ol>
			{data.map((post) => (
				<li key={post.id}>
					<Link href={`/posts/${post.id}`}>{post.title}</Link>
				</li>
			))}
		</ol>
	);
};
