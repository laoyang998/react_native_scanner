import React, { useState, useEffect, Component, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { WebView } from 'react-native-webview'
import { myContext } from '../App'

const HomeScreen = (props) => {

  const [txt2, setTxt2] = useState()
  const [text, setText] = useState()
  // const [todoList, setTodoList] = useState([
  //   { id: 1, isSelect: false, txt: 'a' },
  //   { id: 2, isSelect: true, txt: 'b' }
  // ])
  const { todoList, setTodoList } = useContext(myContext)

  const addOne = (e) => {
    if (e.nativeEvent.text) {
      var lst = todoList;
      let item = { id: lst.length + 1, txt: e.nativeEvent.text }
      setTodoList([...todoList, item])
      setText('')
    }
  }

  const todoCheck = (item) => {
    let temp_todolist = todoList;
    for (let i = 0; i < temp_todolist.length; i++) {
      if (item.id === temp_todolist[i].id) {
        temp_todolist[i].isSelect = !temp_todolist[i].isSelect;
      }
      setTodoList([...temp_todolist]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>

        <TextInput
          style={{ backgroundColor: "#fff", width: "100%" }}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoFocus={true}
          placeholder="输入待办事项，回车提交"
          onChangeText={(txt) => setText(txt)}
          onSubmitEditing={
            (e) => { addOne(e) }
          }
          value={text}
        />
      </View>

      {todoList.map((item) => {
        // console.log('111')
        return (
          <View style={{ flexDirection: 'row' }}>
            <CheckBox value={item.isSelect}
              onValueChange={() => todoCheck(item)} />
            <Text
              style={item.isSelect ? styles.textDeleted : styles.textNormal}>
              {item.txt}
            </Text>
          </View>
        )
      })}
      <Button
        title="添加"
        onPress={() => { props.navigation.navigate('Add') }}
      />
      <Button style={styles.button}
        title='扫一扫'
        onPress={() => { props.navigation.navigate("CodeScanner") }} />
        <Button style={styles.button}
        title='显示图片'
        onPress={() => { props.navigation.navigate("ImageShow") }} />
      <Button
        title="退出"
        onPress={() => { 
          setTodoList([])
          props.navigation.navigate('Login')
         }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  textDeleted: {
    textDecorationLine: 'line-through',
    color: 'gray'
  },
  textNormal: {
    color: 'black'
  },
  button:{
    marginTop:5
  }
})
export default HomeScreen