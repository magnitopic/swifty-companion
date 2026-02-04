import React from "react";
import { View, Text } from "react-native";

interface ProfileSkillsProps {
	skills: Array<{ name: string; level: number }>;
}

const ProfileSkills: React.FC<ProfileSkillsProps> = ({ skills }) => {
	const getSkillColor = (level: number) => {
		if (level >= 8) return "text-accent";
		if (level >= 5) return "text-primary";
		return "text-secondary-light";
	};

	const getSkillBorderColor = (level: number) => {
		if (level >= 8) return "border-accent";
		if (level >= 5) return "border-primary";
		return "border-secondary-light";
	};

	return (
		<View className="items-center py-6 px-4">
			<Text className="text-primary text-2xl font-bold mb-4 underline">
				Skills
			</Text>
			<View className="flex-row flex-wrap justify-center gap-2">
				{skills.map((skill, index) => (
					<View
						key={index}
						className={`border-2 ${getSkillBorderColor(
							skill.level
						)} bg-background-tertiary rounded-lg p-1 items-center`}
					>
						<Text className="text-font-secondary text-sm px-2">
							{skill.name}:
						</Text>
						<Text
							className={`${getSkillColor(
								skill.level
							)} text-sm px-2 font-semibold`}
						>
							{skill.level.toFixed(2)}
						</Text>
					</View>
				))}
			</View>
		</View>
	);
};

export default ProfileSkills;
