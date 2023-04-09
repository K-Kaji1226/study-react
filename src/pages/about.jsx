import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const About = (props) => {
	const {
		isShow,
		doubleCount,
		handleClick,
		handleDisplay,
		text,
		array,
		handleAdd,
		handleChange,
	} = props;

	return (
		<div className={styles.container}>
			<Head>
				<title>About Page</title>
			</Head>

			<Header />
			{isShow ? <h1>{doubleCount}</h1> : null}
			<button onClick={handleClick}>ボタン</button>
			<button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

			<input type="text" value={text} onChange={handleChange} />
			<button onClick={handleAdd}>追加</button>
			<ul>
				{array.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<Main page="about" />

			<Footer />
		</div>
	);
};

export default About;
