import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet,
    Button,
    TextInput,
} from 'react-native';

const LoginScreen = (props) => {

    return (
        <View style={{flex:1,justifyContent:'center'}}>
            <TextInput placeholder="请输入账号" />
           
            <TextInput placeholder="请输入密码"
            secureTextEntry={true}/>
            <Button title='登录' onPress={()=>{
                props.navigation.navigate("Home")
            }} />
        </View>
    )
}

export default LoginScreen