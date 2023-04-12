export const fetcher = async (url) => {
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error("エラーが発生したため、データが取得できません。");
	}
	const json = await res.json();
	return json;
};
