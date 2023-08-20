import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8DFE2",
    alignItems: "center",
  },
  headertxt: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  header: {
    backgroundColor: "red",
    width: 800,
    alignItems: "center",
    height: 200,
    justifyContent: "center",
    position: "absolute",
  },
  inputview: {
    width: 360,
    backgroundColor: "white",
    borderRadius: 10,
    height: 300,
    marginTop: 80,
    alignItems: "center",
    paddingTop: 40,
    borderBottomColor: "#BCC6CC",
    borderBottomWidth: 5,
  },
  inputadd: {
    borderBottomWidth: 2,
    height: 40,
    width: 150,
    borderBottomColor: "black",
    fontSize: 14,
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
  },
  completedTask: {
    backgroundColor: "green",
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
  user: {
    marginTop: 150,
    alignItems: "center",
    width: 360,
    backgroundColor: "white",
    borderRadius: 10,
    height: 200,
    borderBottomColor: "#BCC6CC",
    borderBottomWidth: 5,
  },
});
