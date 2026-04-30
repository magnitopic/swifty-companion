import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { getUser } from "../services/api";
import {
	getFullUserLogin,
	getUserLevel,
	getUserSkills,
} from "../utils/userProfile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileSkills from "../components/ProfileSkills";
import NavHeader from "../components/NavHeader";

interface ProfileScreenProps {
	login: string;
	onBack: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ login, onBack }) => {
	const [profile, setProfile] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				setLoading(true);
				const data = await getUser(login);

				if (!data || data === undefined || data.error)
					throw new Error(data?.error || "Error fetching user data");

				setProfile(data);
				setError(null);
			} catch (error) {
				setError("Failed to load profile ❌");
			} finally {
				setLoading(false);
			}
		};
		fetchUserProfile();
	}, [login]);

	if (loading) {
		return (
			<View className="flex-1 bg-background-main items-center justify-center">
				<ActivityIndicator size="large" color="#ffffff" />
			</View>
		);
	}

	if (error || !profile) {
		return (
			<View className="flex-1 bg-background-main">
				<NavHeader title={login} onBack={onBack} />
				<View className="flex-1 items-center justify-center">
					<Text className="text-font-main text-2xl">
						{error || "No profile found"}
					</Text>
				</View>
			</View>
		);
	}

	return (
		<ScrollView className="flex-1 bg-background-main">
			<NavHeader title={login} onBack={onBack} />
			<ProfileHeader
				imageUrl={profile.image?.link || ""}
				fullLogin={getFullUserLogin(profile)}
				fullName={profile.usual_full_name}
				wallet={profile.wallet}
				correction_points={profile.correction_point}
				lvl={getUserLevel(profile)}
				isAlumni={profile["alumni?"]}
			/>
			<ProfileSkills skills={getUserSkills(profile)} />
		</ScrollView>
	);
};

export default ProfileScreen;
