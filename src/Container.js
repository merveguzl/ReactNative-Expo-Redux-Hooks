import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {setArrayAction, setArrayPushAction, setTextAction} from "../redux/action/app";

const Container = () => {
    
    const { text, array, arrayPush } = useSelector(state => state.app)
    const [textInput, setTextInput] = useState("");
    const [tempArray, setTempArray] = useState([
        {
            name: "text1",
        },
        {
            name:"text2"
        },
        {
            name:"text3"
        }
    ])
    const [temparraytext, setTemparraytext] = useState("");
    const dispatch = useDispatch();

    const onText = (e) =>{
        setTextInput(e)
    }

    const onTextArray = (e) =>{
        setTemparraytext(e)
    }

    const onChangeText = () =>{
        dispatch(setTextAction(textInput))
    }

    const onChangeArray = () =>{
        dispatch(setArrayAction(tempArray))
    }

    const onAddTextArray = () =>{
        dispatch(setArrayPushAction({ name:temparraytext}))
    }

    return (
      <View style={styles.container}>
          <View >
            <Text style={styles.reduxText} >
                Redux Text:  {text}
            </Text>
            <View style={styles.flexContainer} >
                <TextInput 
                    style={styles.input}
                    placeholder="Text "
                    onChangeText={onText}
                    value={textInput}
                />
                <TouchableOpacity style={styles.change} onPress={onChangeText} >
                    <Text style={{color:'#ffff', fontWeight:'700'}} >
                        Change
                    </Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.flexContainer} >
            <Text style={styles.reduxText} >
                Redux Array:  {array.length !== 0 &&
                array.map((item, key) =>(
                    <Text key={key} >
                        {item.name}
                    </Text>
                ))
            }
            </Text>
            <TouchableOpacity style={styles.change} onPress={onChangeArray} >
                <Text style={{color:'#ffff', fontWeight:'700'}} >
                    Change
                </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          <View>
            <Text style={styles.reduxText} >
                    Redux Array Push:  {arrayPush.length !== 0 &&
                    arrayPush.map((item, key) =>(
                        <Text key={key} >
                            {item.name}
                        </Text>
                    ))
                }
                </Text>
            <View style={styles.flexContainer} >
                <TextInput 
                    style={styles.input}
                    placeholder="Text "
                    onChangeText={onTextArray}
                    value={temparraytext}
                />
                <TouchableOpacity style={styles.change} onPress={onAddTextArray} >
                    <Text style={{color:'#ffff', fontWeight:'700'}} >
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
          </View>
      </View>
    );
}

export default Container

const styles = StyleSheet.create({
    input:{
        height:50,
        width:'60%',
        borderColor:'#8B0000',
        borderWidth:1,
        borderRadius:10,
        padding:5
    },
    container:{
        padding:5,
        justifyContent:'space-around'
    },
    flexContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        height:100,
        alignItems:'center'
    },
    change:{
        width:100,
        height:50,
        borderRadius:10,
        backgroundColor:'#8B0000',
        alignItems:'center',
        justifyContent:'center'
    },
    reduxText:{
        fontSize:18,
        width:'60%',
    },
    line:{
        height:20,
        width:'100%',
        backgroundColor:'#8B0000',
        marginTop:20,
        marginBottom:20
    }

  });