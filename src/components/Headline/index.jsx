import styles from "src/components/Headline/Headline.module.css";

export const Headline = (props) => {
	return (
		<div>
			<h1 className={styles.title}>{props.page} Page</h1>
			<p className={styles.description}>
				アイテムの数は {props.children}個です。
			</p>
		</div>
	);
};
