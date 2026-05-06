import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface NavHeaderProps {
	title: string;
	onBack: () => void;
}

const NavHeader: React.FC<NavHeaderProps> = ({ title, onBack }) => {
	return (
		<View className="bg-background-secondary border-b border-border px-4 pt-12 pb-4">
			<Text
				className="text-font-main text-lg font-bold text-center"
				numberOfLines={1}
			>
				{title}
			</Text>

			<TouchableOpacity
				onPress={onBack}
				className="flex-row items-center absolute left-4 bottom-4"
				hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
			>
				<Text className="text-primary text-sm font-bold leading-5">‹</Text>
				<Text className="text-primary text-sm font-bold ml-1">Search</Text>
			</TouchableOpacity>
		</View>
	);
};

export default NavHeader;
