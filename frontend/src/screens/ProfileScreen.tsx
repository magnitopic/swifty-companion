import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { getUser } from "../services/api";
import { getFullUserLogin, getUserLevel } from "../utils/userProfile";
import { ProfileHeader } from "../components/ProfileHeader";

const ProfileScreen: React.FC = () => {
	const [profile, setProfile] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				setLoading(true);
				const data = await getUser("alaparic");
				if (!data || data === undefined) {
					throw new Error("Error fetching user data");
				}
				setProfile(data);
			} catch (error) {
				console.error("Failed to fetch user profile:", error);
				setError("Failed to load profile");
			} finally {
				setLoading(false);
			}
		};
		fetchUserProfile();
	}, []);

	if (loading) {
		return (
			<View className="flex-1 bg-background-main items-center justify-center">
				<ActivityIndicator size="large" color="#ffffff" />
			</View>
		);
	}

	if (error || !profile) {
		return (
			<View className="flex-1 bg-background-main items-center justify-center">
				<Text className="text-font-main">
					{error || "No profile found"}
				</Text>
			</View>
		);
	}

	return (
		<View className="flex-1 bg-background-main">
			<ProfileHeader
				imageUrl={profile.image?.link || ""}
				fullLogin={getFullUserLogin(profile)}
				fullName={profile.usual_full_name}
				wallet={profile.wallet}
				correction_points={profile.correction_point}
				lvl={getUserLevel(profile)}
			/>
		</View>
	);
};

export default ProfileScreen;
