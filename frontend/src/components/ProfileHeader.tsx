import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface ProfileHeaderProps {
	imageUrl: string;
	fullLogin: string;
	fullName: string;
	wallet: string;
	correction_points: string;
	lvl: number;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
	imageUrl,
	fullLogin,
	fullName,
	wallet,
	correction_points,
	lvl,
}) => {
	return (
		<View className="items-center py-6">
			<Image
				source={{ uri: imageUrl }}
				className="w-32 h-32 rounded-full mb-4 mt-4"
			/>
			<Text className="text-font-main text-2xl font-bold mb-1">
				{fullName}
			</Text>
			<Text className="text-font-main text-base opacity-70">
				{fullLogin}
			</Text>
			<View className="flex-row mt-4">
				<Text className="text-font-main mr-4">Wallet: {wallet}₳</Text>
				<Text className="text-font-main">
					Eval Points: {correction_points}
				</Text>
			</View>
			<Text className="text-font-main mt-2 text-xl">Level: {lvl}%</Text>
		</View>
	);
};
