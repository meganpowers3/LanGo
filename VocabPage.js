import React, { useState } from 'react';

import { Button, Text, View, StyleSheet, TouchableOpacity, Linking, ScrollView} from 'react-native';
import { NavigationContainer, NavigationActions, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CommonActions } from '@react-navigation/native';
import {DropDown} from "react-native-material-dropdown";

class LearnVocab extends React.Component{

   constructor(props) {
        super(props);
        this.state = { 
          selectedButton: null, 
          };

          this.state = { 
          clicks: 0,
          show: true};

        this.selectionOnPress = this.selectionOnPress.bind(this);
        this.IncrementItem = this.IncrementItem.bind(this);
    }

    selectionOnPress(userType) {
        this.setState({ selectedButton: userType });
    }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  DecrementItem = () => {
      this.setState({ clicks: this.state.clicks - 1 });
    }


  render(){

    const { clicks } = this.state

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 
      backgroundColor: "#def9fa", }}>

      <ScrollView> 

        <Text style = {{color: '#0093a1', fontSize: 35, marginRight: 200, marginTop: 10, }}>WordLearn</Text>

        <View
          style={{
            borderBottomColor: '#0093a1',
            borderBottomWidth: 2,
            marginBottom: 10,
          }}
        /> 

         <Text style = {{color: '#0093a1', fontSize: 20, marginRight: 200, marginTop: 10, }}>Define "lorem ipsum"</Text>

        <TouchableOpacity onPress={() => {this.selectionOnPress("BASIC3"); this.DecrementItem()}}>
        <View style = {{
          backgroundColor: this.state.selectedButton === "BASIC3"
                                ? '#ff0d0d'
                                : '#98a1a3',
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          marginTop: 10,
          shadowOffset : { width: 1, height: 13},
          width: 200, height: 40,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: this.state.selectedButton === "BASIC3"
                                ? 'white'
                                : '#becccf',
        fontSize: 20, marginRight: 0}}>Consectetur</Text>
     </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {this.selectionOnPress("BASIC4"); {this.IncrementItem()}}}>
        <View style = {{
          backgroundColor: this.state.selectedButton === "BASIC4"
                                ? '#00db62'
                                : '#98a1a3',
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 200, height: 40,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: this.state.selectedButton === "BASIC4"
                                ? 'white'
                                : '#becccf',
        fontSize: 20, marginRight: 0}}>Adipiscing</Text>
     </View>
    </TouchableOpacity>

     <TouchableOpacity onPress={() => {this.selectionOnPress("BASIC5"); this.DecrementItem()}}>
        <View style = {{
          backgroundColor: this.state.selectedButton === "BASIC5"
                                ? '#ff0d0d'
                                : '#98a1a3',
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 200, height: 40,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: this.state.selectedButton === "BASIC5"
                                ? 'white'
                                : '#becccf',
        fontSize: 20, marginRight: 60}}>Elit</Text>
     </View>
    </TouchableOpacity>

 <Text
      style={{
        position:'absolute',
        left:250,
        top:250,
        width: 100,
        fontSize: 20,
        backgroundColor:'#63bfb6',
      }}
    >
       Correct: {clicks}
    </Text>

      </ScrollView>
      </View>
    );
  }
}

export default LearnVocab;