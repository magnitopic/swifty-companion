const API_BASE_URL = process.env.API__URL;

export const searchUser = async (login: string) => {
	const response = await fetch(
		`${API_BASE_URL}?endpoint=users&search[login]=${login}`
	);
	return response.json();
};
