import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8DFE2",
    alignItems: "center",
  },
  inputview: {
    width: 360,
    backgroundColor: "white",
    borderRadius: 10,
    height: 180,

    alignItems: "center",
    paddingTop: 20,
    borderBottomColor: "#BCC6CC",
    borderBottomWidth: 5,
  },
  inputadd: {
    borderBottomWidth: 2,
    height: 40,
    width: 180,
    borderBottomColor: "black",
    fontSize: 17,
  },
  btnadd: {
    borderRadius: 9,
    backgroundColor: "red",
    marginTop: 20,
    height: 50,
    width: 160,
    justifyContent: "center",
  },
  btntxt: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  taskItem: {
    color: "black",
    fontSize: 20,
  },
  completedTask: {
    fontSize: 20,
    color: "green",
    textDecorationLine: "line-through",
  },
  removetaskbtn: {
    backgroundColor: "red",
    borderRadius: 6,
    height: 30,
    marginTop: 10,
    width: 80,
    justifyContent: "center",
  },
  removetasktxt: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  flatview: {
    marginTop: 30,
    width: 100,
    alignItems: "center",
  },
});
