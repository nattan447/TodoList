import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8DFE2",
    alignItems: "center",
  },
  inputview: {
    width: 320,
    borderRadius: 10,
    height: 100,
    alignItems: "center",
    borderBottomColor: "#BCC6CC",
    borderBottomWidth: 5,
    justifyContent: "center",
    flexDirection: "row",
  },
  inputadd: {
    height: 57,
    width: 180,
    fontSize: 17,
    width: 270,
    borderRadius: 20,
    textAlign: "center",
    backgroundColor: "white",
  },
  btnadd: {
    borderRadius: 9,
    marginTop: 20,
    height: 60,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
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

  removetasktxt: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  flatview: {
    width: 360,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    borderWidth: 1,
  },
  completedflatview: {
    width: 360,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    borderWidth: 1,
    borderColor: "green",
  },
  addimg: {
    width: 40,
    height: 40,
    marginBottom: 20,
    marginLeft: 4,
  },
  iconscrud: {
    flexDirection: "row",
    paddingTop: 20,
    marginLeft: 20,
  },
  deleteallicon: {
    width: 40,
    height: 40,
    marginLeft: 30,
  },
});
