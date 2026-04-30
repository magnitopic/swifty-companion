import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface BackButtonProps {
	onPress: () => void;
	label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
	onPress,
	label = "← Back to Search",
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			className="mx-4 mt-4 mb-2 px-4 py-2 bg-primary rounded-lg self-start"
		>
			<Text className="text-background-main font-semibold">{label}</Text>
		</TouchableOpacity>
	);
};

export default BackButton;
