import React,{useContext,useState} from "react"
import {View,TextInput,Button} from 'react-native'
import {myContext} from '../App'

const AddMessage=(props)=>{

    const [msg,setMsg]=useState('')

    const {todoList,setTodoList}=useContext(myContext)

    const onSave=()=>{
        let temp_list = todoList
        let item={id:temp_list.length+1,isSelect:false,txt:msg}
        setTodoList([...temp_list,item])
        props.navigation.pop()
    }

    return(
        <View>
            <TextInput
            multiline={true}
            value={msg}
            onChangeText={(txt)=>{
                setMsg(txt)
            }}
            />
            <Button
            title="保存"
            onPress={()=>{onSave()}}
            />
            <Button title="Exit"
            onPress={()=>{props.navigation.navigate("Login")}}/>
        </View>
    )
}

export default AddMessage
