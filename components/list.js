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
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import headerstyle from "../estilos/headerstyle";

import liststyle from "../estilos/liststyle";
export default function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [couter, setCounter] = useState(0);
  const [emptytxt, setemptytxt] = useState(undefined);
  const [colum, setColum] = useState(2);
  const removeall = () => {
    setData([]);
  };
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
    } else {
      setemptytxt("campo não nulo");
    }
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
    const divstule = item.completed
      ? liststyle.completedflatview
      : liststyle.flatview;
    return (
      <View style={divstule}>
        <Text style={itemstyle}>{item.task}</Text>

        <View style={liststyle.iconscrud}>
          <TouchableOpacity
            onPress={() => {
              toglecompleted(item.id);
            }}
          >
            <Image
              source={require("../assets/check.png")}
              style={liststyle.addimg}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleremove(item.id);
            }}
          >
            <Image
              source={require("../assets/delete.png")}
              style={liststyle.addimg}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={liststyle.container}>
      <View style={headerstyle.header}>
        <Text style={headerstyle.headertxt}>Lista de tarefas</Text>
        <TouchableOpacity onPress={removeall}>
          <Image
            source={require("../assets/deleteall.png")}
            style={liststyle.deleteallicon}
          ></Image>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={render}
      ></FlatList>
      <Text style={{ color: "red", marginRight: 90 }}>{emptytxt}</Text>
      <View style={liststyle.inputview}>
        <TextInput
          placeholderTextColor="black"
          style={liststyle.inputadd}
          placeholder="digite sua task de hoje"
          value={text}
          onChangeText={handletxt}
        ></TextInput>

        <TouchableOpacity style={liststyle.btnadd} onPress={additem}>
          <Image
            source={require("../assets/add.png")}
            style={liststyle.addimg}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}
