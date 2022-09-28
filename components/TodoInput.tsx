import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

type todoInputProps = {
  addTask: any;
};
function TodoInput({ addTask }: todoInputProps) {
  const [inputText, setInputText] = useState("");

  const updateText = (text: string): void => {
    setInputText(text);
    console.log(text);
  };

  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="default value for this input..."
        onChangeText={updateText}
      ></TextInput>
      <Button
        title="Add Item"
        onPress={() => {
          addTask(inputText);
        }}
      />
      {/*later better to build your own button with touchable opacity...*/}
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
});

export default TodoInput;
