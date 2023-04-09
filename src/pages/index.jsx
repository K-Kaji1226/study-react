import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback } from "react";

export default function Home() {
	const foo = 1;

	// useCallbackを使うことによって、関数が再生成されなくなる
	const handleClick = useCallback((e) => {
		e.preventDefault();
		console.log(foo);
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Index Page</title>
			</Head>

			<Header />
			<a href="/about" onClick={handleClick}>
				ボタン
			</a>
			<Main page="index" />

			<Footer />
		</div>
	);
}
