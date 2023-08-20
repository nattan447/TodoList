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
  const [emptytxt, setemptytxt] = useState(undefined);
  const [colum, setColum] = useState(2);

  const handletxt = (texto) => {
    setText(texto);
  };
  const additem = () => {
    if (text != "") {
      setemptytxt(undefined);
      setCounter(couter + 1);
      const array = [...data, { task: text, id: couter, completed: false }];
      setData(array);
      setText("");
    } else setemptytxt("campo não nulo");
  };
  function handleremove(iditem) {
    const noremoved = data.filter((item) => item.id != iditem);
    setData(noremoved);
  }

  function toglecompleted(idc) {
    const upadateData = data.map((item) => {
      if (idc === item.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setData(upadateData);
  }

  const render = ({ item }) => {
    const itemstyle = item.completed
      ? liststyle.completedTask
      : liststyle.taskItem;
    return (
      <View style={liststyle.flatview}>
        <TouchableOpacity
          onPress={() => {
            toglecompleted(item.id);
          }}
        >
          <Text style={itemstyle}>{item.task}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={liststyle.removetaskbtn}
          onPress={() => {
            handleremove(item.id);
          }}
        >
          <Text style={liststyle.removetasktxt}>Remover</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={liststyle.container}>
      <View style={liststyle.inputview}>
        <TextInput
          placeholderTextColor="black"
          maxFontSizeMultiplier={colum}
          style={liststyle.inputadd}
          placeholder="digite sua task de hoje"
          value={text}
          onChangeText={handletxt}
        ></TextInput>
        <Text style={{ color: "red" }}>{emptytxt}</Text>
        <TouchableOpacity style={liststyle.btnadd} onPress={additem}>
          <Text style={liststyle.btntxt}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={colum}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={render}
      ></FlatList>
    </View>
  );
}
