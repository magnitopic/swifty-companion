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

const getUserLevel = (profile: any) => {
	let userLvl;
	profile.cursus_users.filter((cursus) => {
		if (cursus.cursus_id === 21) {
			userLvl = cursus.level;
		}
	});

	if (userLvl == null) {
		userLvl = 0.0;
	}

	return userLvl;
};

export { getFullUserLogin, getUserLevel };
