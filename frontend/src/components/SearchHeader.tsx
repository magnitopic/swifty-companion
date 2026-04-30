import React from "react";
import { View, Text } from "react-native";

const SearchHeader: React.FC = () => {
	return (
		<View className="bg-background-secondary px-6 pt-12 pb-5 border-b border-border">
			<Text className="text-primary text-2xl font-bold tracking-wide">
				Swifty Companion
			</Text>
			<Text className="text-font-dim text-sm mt-1">42 student lookup</Text>
			<View className="flex-row mt-4 gap-x-1">
				<View className="h-0.5 w-12 rounded-full bg-primary" />
				<View className="h-0.5 w-6 rounded-full bg-secondary" />
				<View className="h-0.5 w-3 rounded-full bg-accent" />
			</View>
		</View>
	);
};

export default SearchHeader;
