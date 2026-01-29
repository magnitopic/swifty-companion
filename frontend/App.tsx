import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ProfileScreen from "./src/screens/ProfileScreen";
import SearchScreen from "./src/screens/SearchScreen";

export default function App() {
	const [currentScreen, setCurrentScreen] = useState<
		"ProfileScreen" | "SearchScreen"
	>("SearchScreen");

	return (
		<>
			{currentScreen === "ProfileScreen" && <ProfileScreen />}
			{currentScreen === "SearchScreen" && <SearchScreen />}
		</>
	);
}
