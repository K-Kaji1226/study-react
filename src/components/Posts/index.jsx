import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useEffect, useState, useCallback } from "react";

export const Posts = (props) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const getPosts = useCallback(async () => {
		try {
			const res = await fetch("https://jsonplaceholder.typicode.com/posts");
			if (!res.ok) {
				throw new Error("エラーが発生したため、データの取得に失敗しました。");
			}
			const json = await res.json();
			setPosts(json);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	}, []);

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		<div>{error.message}</div>;
	}
	if (posts.length === 0) {
		<div>データは空です</div>;
	}
	return (
		<ol>
			{posts.map((post) => (
				<li key={post.id}>{post.title}</li>
			))}
		</ol>
	);
};
