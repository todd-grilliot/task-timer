import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useWindowDimensions, StyleSheet, Text, View } from "react-native";

import TodoCard from "./components/TodoCard";

//add that uuid thing.. that was cool.
// validation text, like, pls enter..

export default function App() {
	const isWideScreen = useWindowDimensions().width > 768;
	return (
		<View style={isWideScreen ? styles.bigContainer : styles.container}>
			<View
				style={[
					isWideScreen ? styles.bigDivider : styles.divider,
					{ backgroundColor: "lightblue" },
				]}
			>
				<Text style={styles.title}>Timer App</Text>
				<TodoCard text={"sample string hardcode"} />
			</View>

			<View style={[styles.divider, { backgroundColor: "white" }]}>
				<Text>something else</Text>
			</View>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: 'center',
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	bigContainer: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: 'center',
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	divider: {
		// flex: 1,
		alignItems: "center",
	},
	bigDivider: {
		// flex: 1,
	},
	card: {
		backgroundColor: "grey",
		width: "67%",
		opacity: 0.5,
		borderRadius: 20,
		flex: 0.6,
		marginHorizontal: 80,
		padding: 30,
	},
	title: {
		textAlign: "left",
		fontSize: 50,
		margin: 80,
	},
});
