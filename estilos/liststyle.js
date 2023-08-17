import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    alignItems: "center",
  },
  headertxt: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: 50,
  },
  inputview: {
    alignItems: "center",
    marginTop: 200,
    backgroundColor: "white",
    borderRadius: 10,
  },
  btnadd: {
    borderRadius: 9,
    backgroundColor: "white",
    marginTop: 40,
  },
  btntxt: {
    color: "red",
    textAlign: "center",
  },

  taskItem: {
    color: "black",
  },
  completedTask: {
    backgroundColor: "green",
  },
});
