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
export default function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [couter, setCounter] = useState(0);
  const [styletxt, setSyletxt] = useState({ color: "black" });
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(false);
  }, [check]);

  const handletxt = (texto) => {
    setText(texto);
  };
  const additem = () => {
    setCounter(couter + 1);
    const array = [...data, { task: text, id: couter, completed: check }];
    setData(array);
  };
  function handleremove(iditem) {
    const noremoved = data.filter((item) => item.id != iditem);
    setData(noremoved);
  }
  const render = ({ item }) => {
    const itemstyle = item.completed
      ? liststyle.completedTask
      : liststyle.taskItem;
    return (
      <View style={itemstyle}>
        <TouchableOpacity
          onPress={() => {
            setCheck(true);
          }}
        >
          <Text style={liststyle.taskItem}>{item.task}</Text>
        </TouchableOpacity>
        <Button
          onPress={() => {
            handleremove(item.id);
          }}
          title="remover"
        ></Button>
      </View>
    );
  };

  return (
    <View style={liststyle.container}>
      <Text style={liststyle.headertxt}>Lista de tarefas</Text>
      <View style={liststyle.inputview}>
        <TextInput
          placeholder="digite sua task de hoje"
          value={text}
          onChangeText={handletxt}
        ></TextInput>
        <TouchableOpacity style={liststyle.btnadd} onPress={additem}>
          <Text style={liststyle.btntxt}>Adicionar</Text>
        </TouchableOpacity>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={render}
        ></FlatList>
      </View>
    </View>
  );
}
