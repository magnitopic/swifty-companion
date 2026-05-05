import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface NavHeaderProps {
	title: string;
	onBack: () => void;
}

const NavHeader: React.FC<NavHeaderProps> = ({ title, onBack }) => {
	return (
		<View className="flex-row items-center bg-background-secondary border-b border-border px-4 pt-12 pb-4">
			<TouchableOpacity
				onPress={onBack}
				className="flex-row items-center mr-3"
				hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
			>
				<Text className="text-primary text-lg font-bold prb-2">‹</Text>
				<Text className="text-primary text-sm font-bold">Search</Text>
			</TouchableOpacity>
			<View className="flex-1 items-center">
				<Text className="text-font-main text-lg font-bold">{title}</Text>
			</View>
			<View className="w-16" />
		</View>
	);
};

export default NavHeader;
