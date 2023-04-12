import styles from "src/components/Header/Header.module.css";
import Link from "next/link";

const NAV_ITEMS = [
	{ href: "/posts", label: "Posts" },
	{ href: "/about", label: "About" },
];

export const Header = () => {
	return (
		<header className={styles.header}>
			{NAV_ITEMS.map((item) => (
				<Link key={item.href} href={item.href} className={styles.anchor}>
					{item.label}
				</Link>
			))}
		</header>
	);
};
