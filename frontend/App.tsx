import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ProfileScreen } from "./src/screens/ProfileScreen";

export default function App() {
	const [currentScreen, setCurrentScreen] = useState<
		"Login" | "ListProtein" | "LigandView"
	>("Login");

	return (
		<>
			{currentScreen === "Login" && (
				<ProfileScreen />
			)}
		</>
	);
}
