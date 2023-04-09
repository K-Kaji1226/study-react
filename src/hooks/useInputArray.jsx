import { useCallback, useState } from "react";

export const useInputArray = () => {
	const [text, setText] = useState("");
	const [array, setArray] = useState([]);

	// 第２引数の中が空であれば、再生成されないのでfooの中身は1のままになる
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
	return { text, array, handleAdd, handleChange };
};
