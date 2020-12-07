import React, { useState } from 'react';

import { Button, Text, View, StyleSheet, TouchableOpacity, Linking, ScrollView} from 'react-native';
import { NavigationContainer, NavigationActions, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CommonActions } from '@react-navigation/native';
import {DropDown} from "react-native-material-dropdown";

class PracticeVocab extends React.Component{
  constructor(){
    super();
    this.state = {
    textValue: 'Word'
    }
    this.onPressButton= this.onPressButton.bind(this);
}

onPressButton() {
    this.setState({
        textValue: 'Word Definition'
    })
}

render(){
    return(

 <View style = {{backgroundColor: '#f5fffe', 
          alignItems: 'center', 
          paddingRight: 80,
          width: 300, height: 200,
                          justifyContent: 'center', 
                          borderRadius: 5, marginLeft: 60, 
                          marginTop:100,
                          marginBottom: 20,
          }}
             >

   <TouchableOpacity onPress={() => {this.onPressButton()}}>
        <View style = {{
          backgroundColor: '#f5fffe', 
           alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 315, height: 200,
                          justifyContent: 'center', 
                          borderRadius: 5, marginLeft: 75, 
                          marginTop:20,
                          marginBottom: 20,
                          }}
             >
        <Text style={{color: '#00a9c7',fontSize:20, marginLeft: 100}}> {this.state.textValue} </Text>
     </View>
    </TouchableOpacity>

</View>

   );
 }
}

export default PracticeVocab;