import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";
//add that uuid thing.. that was cool.
//make it a scroollable box...
// make the items kind of standardized... hmmm like not so tall like this
// yeah see where that gets you

export default function App() {
  const [todoList, setTodoList] = useState<Array<string>>([]);

  const addTask = (text: string) => {
    if (!text) {
      return;
    } else setTodoList((current) => [text, ...current]);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.divider, { backgroundColor: "lightblue" }]}>
        <Text style={styles.title}>Timer App</Text>
        <View style={styles.card}>
          <TodoInput addTask={addTask} />
          {todoList.map((value, index) => (
            <Todo key={index} text={value} />
          ))}
        </View>
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
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  divider: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
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
