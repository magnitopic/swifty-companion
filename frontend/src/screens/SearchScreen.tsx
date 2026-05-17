import React, { useState, useEffect } from "react";
import { View, TextInput, ActivityIndicator, Text } from "react-native";
import { searchUser } from "../services/api";
import UserList from "../components/UserList";
import SearchHeader from "../components/SearchHeader";

interface SearchScreenProps {
	onSelectUser: (login: string) => void;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ onSelectUser }) => {
	const [query, setQuery] = useState("");
	const [users, setUsers] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!query.trim()) {
			setUsers([]);
			setError(null);
			return;
		}

		const controller = new AbortController();

		const timeout = setTimeout(async () => {
			try {
				setLoading(true);
				setError(null);
				const data = await searchUser(query.trim(), controller.signal);
				if (!Array.isArray(data))
					throw new Error("An error occurred while searching...");
				setUsers(data);
				if (data.length === 0) setError("No users found 😕");
			} catch (error: any) {
				if (error.name === "AbortError") return;
				setError("Failed to search users ❌");
				setUsers([]);
			} finally {
				setLoading(false);
			}
		}, 500);

		return () => {
			clearTimeout(timeout);
			controller.abort();
		};
	}, [query]);

	const renderContent = () => {
		if (loading) {
			return (
				<View className="flex-1 items-center justify-center">
					<ActivityIndicator size="small" color="#00D9FF" />
				</View>
			);
		}
		if (error) {
			return (
				<View className="flex-1 items-center justify-center">
					<Text className="text-font-dim text-sm">{error}</Text>
				</View>
			);
		}
		if (users.length > 0) {
			return <UserList users={users} onSelectUser={onSelectUser} />;
		}
		return (
			<View className="flex-1 items-center justify-center">
				<Text className="text-font-dim text-sm">
					{query.trim() ? "" : "Start typing to find a student"}
				</Text>
			</View>
		);
	};

	return (
		<View className="flex-1 bg-background-main">
			<SearchHeader />
			<TextInput
				className="mx-4 mt-4 mb-3 px-4 py-3 bg-background-secondary rounded-lg text-font-main border border-border"
				placeholder="Search by login..."
				placeholderTextColor="#5A6B82"
				value={query}
				onChangeText={setQuery}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<View className="mx-4 flex-1 mb-4 rounded-xl bg-background-secondary border border-border overflow-hidden">
				{renderContent()}
			</View>
		</View>
	);
};

export default SearchScreen;
