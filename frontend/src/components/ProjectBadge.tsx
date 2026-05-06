import React from "react";
import { View, Text } from "react-native";
import { Project } from "../utils/userProfile";

const formatDate = (iso: string | null): string => {
	if (!iso) return "";
	const d = new Date(iso);
	return d.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});
};

interface ProjectBadgeProps {
	project: Project;
}

const ProjectBadge: React.FC<ProjectBadgeProps> = ({ project }) => {
	if (project.validated === true) {
		return (
			<View className="items-end">
				<View className="bg-accent px-3 py-1 rounded-full">
					<Text className="text-background-main text-xs font-bold">
						Passed{project.finalMark !== null ? ` — ${project.finalMark}` : ""}
					</Text>
				</View>
				<Text className="text-font-dim text-xs mt-1">
					{formatDate(project.markedAt)}
				</Text>
			</View>
		);
	}

	if (project.validated === false) {
		return (
			<View className="items-end">
				<View className="bg-danger px-3 py-1 rounded-full">
					<Text className="text-font-main text-xs font-bold">
						Failed{project.finalMark !== null ? ` — ${project.finalMark}` : ""}
					</Text>
				</View>
				<Text className="text-font-dim text-xs mt-1">
					{formatDate(project.markedAt)}
				</Text>
			</View>
		);
	}

	if (project.status === "waiting_for_correction") {
		return (
			<View className="bg-accent-yellow px-3 py-1 rounded-full">
				<Text className="text-background-main text-xs font-bold">Pending</Text>
			</View>
		);
	}

	if (project.status === "in_progress") {
		return (
			<View className="bg-primary px-3 py-1 rounded-full">
				<Text className="text-background-main text-xs font-bold">
					In progress
				</Text>
			</View>
		);
	}

	return (
		<View className="bg-background-tertiary px-3 py-1 rounded-full">
			<Text className="text-font-dim text-xs font-bold capitalize">
				{project.status.replace(/_/g, " ")}
			</Text>
		</View>
	);
};

export default ProjectBadge;
