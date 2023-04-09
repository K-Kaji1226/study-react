import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
	const [foo, setFoo] = useState(1);
	const [isShow, setIsShow] = useState(true);

	const doubleCount = useMemo(() => {
		return foo * 2;
	}, [foo]);

	const handleClick = useCallback(() => {
		if (foo < 10) {
			setFoo((foo) => foo + 1);
		}
	}, [foo]);

	const handleDisplay = useCallback(() => {
		setIsShow((prev) => !prev);
	}, []);

	return { foo, isShow, doubleCount, handleClick, handleDisplay };
};
