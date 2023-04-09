import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
	const [foo, setFoo] = useState(1);

	// useCallbackを使うことによって、関数が再生成されなくなる
	// const handleClick = useCallback((e) => {
	// 	e.preventDefault();
	// 	alert(123);
	// }, []);

	// 第２引数の中が空であれば、再生成されないのでfooの中身は1のままになる
	const handleClick = useCallback(() => {
		if (foo < 10) {
			setFoo((foo) => foo + 1);
		}
	}, [foo]);

	useEffect(() => {
		document.body.style.backgroundColor = "lightblue";
		return () => {
			document.body.style.backgroundColor = "";
		};
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Index Page</title>
			</Head>

			<Header />
			<h1>{foo}</h1>
			<button onClick={handleClick}>ボタン</button>
			<Main page="index" />

			<Footer />
		</div>
	);
}
