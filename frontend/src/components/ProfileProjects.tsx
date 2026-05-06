import React from "react";
import { View, Text } from "react-native";
import { Project } from "../utils/userProfile";
import ProjectBadge from "./ProjectBadge";

interface ProfileProjectsProps {
	projects: Project[];
}

const ProfileProjects: React.FC<ProfileProjectsProps> = ({ projects }) => {
	if (projects.length === 0) return null;

	return (
		<View className="px-4 pb-8">
			<Text className="text-font-main text-lg font-bold mb-3">
				Projects{" "}
				<Text className="text-font-dim text-sm font-normal">
					({projects.length})
				</Text>
			</Text>

			<View className="gap-y-2">
				{projects.map((project) => (
					<View
						key={project.id}
						className="flex-row items-center justify-between bg-background-secondary border border-border rounded-xl px-4 py-3"
					>
						<View className="flex-1 mr-4">
							<Text
								className="text-font-main text-sm font-semibold"
								numberOfLines={1}
							>
								{project.name}
							</Text>
							<Text className="text-font-dim text-xs mt-0.5" numberOfLines={1}>
								{project.slug}
							</Text>
						</View>
						<ProjectBadge project={project} />
					</View>
				))}
			</View>
		</View>
	);
};

export default ProfileProjects;
