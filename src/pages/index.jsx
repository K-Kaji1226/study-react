import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
	const [foo, setFoo] = useState(1);
	const [text, setText] = useState("");
	const [isShow, setIsShow] = useState(true);
	const [array, setArray] = useState([]);

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

	const handleDisplay = useCallback(() => {
		setIsShow((prev) => !prev);
	}, []);

	const handleChange = useCallback((e) => {
		if (e.target.value.length > 5) {
			alert("5文字以内にしてください。");
			return;
		}
		setText(e.target.value.trim());
	}, []);

	const handleAdd = useCallback(() => {
		setArray((prev) => {
			if (prev.some((item) => item === text)) {
				alert("同じ要素がすでに存在します。");
				setText("");
				return prev;
			}
			return [...prev, text];
		});
	}, [text]);

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
			{isShow ? <h1>{foo}</h1> : null}
			<button onClick={handleClick}>ボタン</button>
			<button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
			<input type="text" value={text} onChange={handleChange} />
			<button onClick={handleAdd}>追加</button>
			<ul>
				{array.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<Main page="index" />

			<Footer />
		</div>
	);
}
