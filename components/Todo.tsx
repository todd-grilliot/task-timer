import { StyleSheet, Text, View } from "react-native";

import React from "react";

type todoProps = {
  text: string;
};
function Todo({ text }: todoProps) {
  return (
    <View style={styles.todoView}>
      <Text> {text}</Text>
    </View>
  );
}

export default Todo;

const styles = StyleSheet.create({
  todoView: {
    margin: 10,
    flex: 1,
    backgroundColor: "lightgrey",
    //   flexDirection: 'column',
    //   justifyContent: 'flex-start',
  },
});
