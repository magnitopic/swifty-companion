const getFullUserLogin = (profile: any) => {
	let title_id = profile.titles_users.filter(
		(title) => title.selected === true
	)[0]?.title_id;

	let fullUserLogin = title_id
		? profile.titles.find((title) => title.id === title_id)?.name
		: null;

	if (fullUserLogin != null) {
		fullUserLogin = fullUserLogin.replace("%login", profile.login);
	} else fullUserLogin = profile.login;

	return fullUserLogin;
};

export { getFullUserLogin };
