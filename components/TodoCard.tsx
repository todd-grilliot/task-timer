import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Todo from "./Todo";
import TodoInput from "./TodoInput";

type todoCardProps = {
	text: string;
};
function TodoCard({ text }: todoCardProps) {
	const [todoList, setTodoList] = useState<Array<string>>([]);

	const addTask = (text: string) => {
		if (!text) {
			return;
		} else setTodoList((current) => [text, ...current]);
	};

	return (
		<View style={styles.card}>
			<TodoInput addTask={addTask} />
			<FlatList
				data={todoList}
				renderItem={({ item, index, separators }) => <Todo text={item} />}
			/>
			{/* {todoList.map((value, index) => (
				<Todo key={index} text={value} />
			))} */}
		</View>
	);
}

export default TodoCard;

const styles = StyleSheet.create({
	card: {
		backgroundColor: "grey",
		width: "67%",
		height: "50%",
		opacity: 0.5,
		borderRadius: 20,
		// flex: 0.6,
		marginHorizontal: 80,
		padding: 30,
	},
});
