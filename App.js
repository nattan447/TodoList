import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import List from "./components/list";
import Header from "./components/header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <List />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#D8DFE2",
  },
});
