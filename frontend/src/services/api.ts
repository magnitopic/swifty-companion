const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const searchUser = async (login: string) => {
	const response = await fetch(
		`${API_BASE_URL}?endpoint=users&search[login]=${login}`
	);
	return response.json();
};

export const getUser = async (login: string) => {
	const response = await fetch(`${API_BASE_URL}?endpoint=users/${login}`);
	return response.json();
};
