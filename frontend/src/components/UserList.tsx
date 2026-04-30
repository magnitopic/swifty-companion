import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

interface User {
	login: string;
	image?: { link?: string };
}

interface UserListProps {
	users: User[];
	onSelectUser?: (login: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onSelectUser }) => {
	return (
		<FlatList
			data={users}
			keyExtractor={(item) => item.login}
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() => onSelectUser?.(item.login)}
					className="flex-row items-center px-4 py-3 border-b border-border"
				>
					<Image
						source={{
							uri: item.image?.link || "https://cdn.intra.42.fr/users/default.png",
						}}
						className="w-12 h-12 rounded-full mr-4"
					/>
					<Text className="text-font-main text-base font-medium">
						{item.login}
					</Text>
				</TouchableOpacity>
			)}
		/>
	);
};

export default UserList;
