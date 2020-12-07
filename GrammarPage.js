
import React, { useState } from 'react';

import { Button, Text, View, StyleSheet, TouchableOpacity, Linking, ScrollView} from 'react-native';
import { NavigationContainer, NavigationActions, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CommonActions } from '@react-navigation/native';
import {DropDown} from "react-native-material-dropdown";

class GrammarExercise extends React.Component{

  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 
      backgroundColor: "#def9fa", }}>

      <ScrollView> 

        <Text style = {{color: '#004b4d', fontSize: 35, marginRight: 200, marginTop: 10, }}>Lorem ipsum</Text>

        <View
          style={{
            borderBottomColor: '#0093a1',
            borderBottomWidth: 2,
            marginBottom: 10,
          }}
        /> 

          <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#96ebd4", width: 400}}>
            <Text style={{ fontSize: 18, color: '#004b4d', marginLeft: 10, marginRight: 10, 
            marginTop: 10, marginBottom: 10, }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            {"\n"}
            {"\n"}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. 
            {"\n"}
            {"\n"}
            Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.

            </Text>
          </View>


      </ScrollView>
      </View>
    );
  }
}

export default GrammarExercise;