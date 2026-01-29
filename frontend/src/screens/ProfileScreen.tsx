import React, { useState } from "react";
import { View, Text } from "react-native";
import { useEffect } from "react";
import { getUser } from "../services/api";

const ProfileScreen: React.FC = () => {
	const [userId, setUserId] = useState<string>("NULL");
	const [userName, setUserName] = useState<string>("NULL");
	const [loginTitle, setLoginTitle] = useState<string>("NULL");

	useEffect(() => {
		// Use api service to fetch user profile data
		const fetchUserProfile = async () => {
			try {
				const profile = await getUser("fdiaz-gu");

				let title_id = profile.titles_users.filter(
					(title) => title.selected === true
				)[0]?.title_id;

				let fullUserLogin = title_id
					? profile.titles.find((title) => title.id === title_id)
							?.name
					: null;

				if (fullUserLogin != null) {
					fullUserLogin = fullUserLogin.replace(
						"%login",
						profile.login
					);
				} else fullUserLogin = profile.login;

				setUserId(profile.id);
				setUserName(profile.login);
				setLoginTitle(fullUserLogin);
			} catch (error) {
				console.error("Failed to fetch user profile:", error);
			}
		};
		fetchUserProfile();
	}, []);

	return (
		<View className="flex-1 bg-background-main">
			<Text className="text-white">Profile Screen</Text>
			<Text className="text-white">Profile Screen</Text>
			<Text className="text-white">Profile Screen</Text>
			<Text className="text-white">Profile Screen</Text>
			<Text className="text-font-main">{userId}</Text>
			<Text className="text-font-main">{userName}</Text>
			<Text className="text-font-main">{loginTitle}</Text>
		</View>
	);
};

export default ProfileScreen;
