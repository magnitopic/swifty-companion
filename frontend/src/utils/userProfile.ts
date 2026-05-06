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

const getUserSkills = (profile: any) => {
	let skills: Array<{ name: string; level: number }> = [];
	profile.cursus_users.filter((cursus) => {
		if (cursus.cursus_id === 21) {
			skills = cursus.skills;
		}
	});

	return skills;
};

export interface Project {
	id: number;
	name: string;
	slug: string;
	finalMark: number | null;
	validated: boolean | null;
	status: string;
	markedAt: string | null;
}

const getUserProjects = (profile: any): Project[] => {
	return (profile.projects_users ?? [])
		.filter((p: any) => p.cursus_ids?.includes(21) && p.status !== "creating")
		.map((p: any) => ({
			id: p.id,
			name: p.project?.name ?? "Unknown",
			slug: p.project?.slug ?? "",
			finalMark: p.final_mark,
			validated: p["validated?"],
			status: p.status,
			markedAt: p.marked_at,
		}))
		.sort((a: Project, b: Project) => {
			const order = (p: Project) => {
				if (p.status === "in_progress") return 0;
				if (p.status === "waiting_for_correction") return 1;
				if (p.validated === false) return 2;
				if (p.validated === true) return 3;
				return 2;
			};
			const diff = order(a) - order(b);
			if (diff !== 0) return diff;
			// both passed — sort by most recent first
			if (a.validated === true && b.validated === true) {
				const dateA = a.markedAt ? new Date(a.markedAt).getTime() : 0;
				const dateB = b.markedAt ? new Date(b.markedAt).getTime() : 0;
				return dateB - dateA;
			}
			return 0;
		});
};

export { getFullUserLogin, getUserLevel, getUserSkills, getUserProjects };
