import React, { useState, useEffect, useContext } from 'react'
import { View, SafeAreaView, Text, Button } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { myContext } from '../App'

const BarCodeScreen = (props) => {

    // useEffect(()=>{
    //     console.log('begin scan')
    // },[])
    const [barCode, setBarCode] = useState()
    const [scanSuccess,setScanSuccess]=useState(false)

    const { todoList, setTodoList } = useContext(myContext)

    const receiveCode = (e) => {
        if (e.data&&scanSuccess===false) {
            setScanSuccess(true)
            console.log('barcode')
            setBarCode(e.data)
            let item = { id: todoList.length + 1, isSelect: false, txt: e.data }
            setTodoList([...todoList, item])
            props.navigation.navigate('Home')
        }
    }

    return (
        <View>
            <View>
                <RNCamera
                   
                    onBarCodeRead={(e) => { receiveCode(e) }}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                      }}

                >
                    <View style={{width:'100%',height:'100%'}}>

                    </View>
                </RNCamera>
            </View>
        </View>
    )
}

export default BarCodeScreen