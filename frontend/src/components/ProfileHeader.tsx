import React from "react";
import { View, Text, Image } from "react-native";

interface ProfileHeaderProps {
	imageUrl: string;
	fullLogin: string;
	fullName: string;
	wallet: string;
	correction_points: string;
	lvl: number;
	isAlumni: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
	imageUrl,
	fullLogin,
	fullName,
	wallet,
	correction_points,
	lvl,
	isAlumni,
}) => {
	const levelProgress = (lvl % 1) * 100;
	const currentLevel = Math.floor(lvl);

	return (
		<View className="items-center py-6">
			<Image
				source={{ uri: imageUrl }}
				className="w-32 h-32 rounded-full mb-4 mt-4"
			/>
			<Text
				className={`${
					isAlumni ? "text-font-secondary" : "text-font-main"
				} text-2xl font-bold mb-1`}
			>
				{fullName}
			</Text>
			<Text className="text-font-main text-base opacity-70">
				{fullLogin}
			</Text>
			<View className="flex-row mt-4">
				<Text className="text-font-main mr-4">
					<Text className="text-accent-yellow">Wallet: </Text>
					{wallet}₳
				</Text>
				<Text className="text-font-main">
					<Text className="text-accent">Eval Points: </Text>
					{correction_points}
				</Text>
			</View>

			<View className="mt-4 w-full px-8">
				<Text className="text-font-main text-xl mb-2 text-center">
					<Text className="text-primary">Level: </Text>
					{lvl}%
				</Text>
				<View className="w-full h-2 bg-background-tertiary rounded-full overflow-hidden">
					<View
						className="h-full bg-primary rounded-full"
						style={{ width: `${levelProgress}%` }}
					/>
				</View>
			</View>
		</View>
	);
};

export default ProfileHeader;
