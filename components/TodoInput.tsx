import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";

type todoInputProps = {
	addTask: any;
};
function TodoInput({ addTask }: todoInputProps) {
	const [inputText, setInputText] = useState("");
	const [showValidation, setShowValidation] = useState(false);
	const inputRef = useRef<any>();

	function updateText(text: string): void {
		setInputText(text);
	}
	function validateText(text: string) {
		if (text == "") setShowValidation(true);
		else setShowValidation(false);
	}
	function submitText() {
		addTask(inputText);
		setInputText("");
		inputRef.current!.focus();
		validateText(inputText);
	}

	return (
		<View style={styles.inputView}>
			<TextInput
				ref={inputRef}
				value={inputText}
				style={styles.inputText}
				placeholder="Enter your task..."
				onChangeText={updateText}
				onSubmitEditing={submitText}
				autoFocus={true}
			></TextInput>
			<Button title="Add Item" onPress={submitText} />
			{/*later better to build your own button with touchable opacity...*/}
			{showValidation && (
				<Text style={styles.validationText}>enter a valid task</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	inputView: {
		margin: 10,
	},
	inputText: {
		backgroundColor: "white",
		marginVertical: 10,
		fontSize: 30,
	},
	inputButton: {
		fontSize: 20,
		marginVertical: 10,
		width: 200,
	},
	validationText: {
		color: "red",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default TodoInput;
