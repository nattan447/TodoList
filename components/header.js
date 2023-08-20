import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { useEffect, useState } from "react";
import liststyle from "../estilos/liststyle";
import headerstyle from "../estilos/headerstyle";
export default function Header() {
  return (
    <View style={liststyle.container}>
      <View style={headerstyle.header}>
        <Text style={headerstyle.headertxt}>Lista de tarefas</Text>
      </View>
      {/* <View style={headerstyle.user}>
        <Text>user</Text>
      </View> */}
    </View>
  );
}
