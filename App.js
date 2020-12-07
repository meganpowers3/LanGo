import React, { useState } from 'react';

import { Button, Text, View, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { NavigationContainer, NavigationActions, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CommonActions } from '@react-navigation/native';
import {DropDown} from "react-native-material-dropdown";
import { TextInput } from 'react-native-paper';
import GrammarExercise from './GrammarPage'
import LearnVocab from './VocabPage'
import PracticeVocab from './VocabPractice'
import ChallengingWords from './HardWords'

class HomeScreen extends React.Component{

constructor(props) {
    super(props);
    this.state = { selectedButton: null };
    this.selectionOnPress = this.selectionOnPress.bind(this);
}

selectionOnPress(userType) {
    this.setState({ selectedButton: userType });
}
 

render(){
  return ( 

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 
    backgroundColor: "#def9fa", }}>

    <ScrollView> 

      <Text style = {{color: '#0093a1', fontSize: 20, marginLeft: 30, marginTop: 10, }}>welcome to...</Text>

       <Text style = {{color: '#0093a1', fontSize: 35, marginLeft: 110,  }}>lanGO!</Text>

      <View
        style={{
          borderBottomColor: '#0093a1',
          borderBottomWidth: 2,
          marginBottom: 10,
        }}
      /> 

      <TouchableOpacity onPress={() => Linking.openURL('https://www.thelocal.de/20190215/word-of-the-day-kuddelmuddel')}>
        <View style = {{backgroundColor: '#5fe3d8', 
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 300, height: 100,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: 'white',
        fontSize: 24, marginLeft: 10, }}>word of the day: kuddelmuddel </Text>
     </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.britannica.com/biography/Immanuel-Kant')}>
        <View style = {{backgroundColor: '#5fe3d8', 
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 300, height: 100,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: 'white',
        fontSize: 25, marginLeft: 10, }}>cultural highlight: immanuel kant </Text>
     </View>
    </TouchableOpacity>

     <TouchableOpacity onPress={() => Linking.openURL('https://germangirlinamerica.com/easy-berliner-recipe/')}>
        <View style = {{backgroundColor: '#5fe3d8', 
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 300, height: 100,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: 'white',
        fontSize: 25, marginLeft: 10, }}>recipe: berliner/berlinerbol </Text>
     </View>
    </TouchableOpacity>

    </ScrollView> 
    </View>      
  );
}
}

class LessonScreen extends React.Component{

constructor(props) {
    super(props);
    this.state = { selectedButton: null };
    this.selectionOnPress = this.selectionOnPress.bind(this);
}

selectionOnPress(userType) {
    this.setState({ selectedButton: userType });
}
 

render(){
  return ( 

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 
    backgroundColor: "#def9fa", }}>

    <ScrollView> 

      <Text style = {{color: '#0093a1', fontSize: 35, marginRight: 200, marginTop: 10, }}>Module 1</Text>

      <View
        style={{
          borderBottomColor: '#0093a1',
          borderBottomWidth: 2,
          marginBottom: 10,
        }}
      /> 

      <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
        <View style = {{backgroundColor: '#35d8db', 
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 300, height: 60,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: 'white',
        fontSize: 20, }}>0. Language Learning </Text>
     </View>
    </TouchableOpacity>


      <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
        <View style = {{backgroundColor: '#35d8db', 
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 300, height: 60,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: 'white',
        fontSize: 20, marginRight: 120}}>1. Basics</Text>
     </View>
    </TouchableOpacity>


    <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
        <View style = {{backgroundColor: '#35d8db', 
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 300, height: 60,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: 'white',
        fontSize: 20, marginRight: 60}}>2. Introductions</Text>
     </View>
    </TouchableOpacity>


      <Text style = {{color: '#0093a1', fontSize: 35, marginRight: 200, marginTop: 10, }}>Module 2</Text>

      <View
        style={{
          borderBottomColor: '#0093a1',
          borderBottomWidth: 2,
          marginBottom: 10,
        }}
      /> 

    <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
        <View style = {{backgroundColor: '#35d8db', 
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 300, height: 60,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: 'white',
        fontSize: 20, marginRight: 30}}>3. In the Classroom</Text>
     </View>
    </TouchableOpacity>


    <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
        <View style = {{backgroundColor: '#35d8db', 
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 300, height: 60,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: 'white',
        fontSize: 20, marginRight:50}}>4. Meeting Peers</Text>
     </View>
    </TouchableOpacity>


    <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
        <View style = {{backgroundColor: '#35d8db', 
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 300, height: 60,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: 'white',
        fontSize: 20, marginRight: 70}}>5. At the Store</Text>
     </View>
    </TouchableOpacity>

  <Text style = {{color: '#0093a1', fontSize: 35, marginRight: 200, marginTop: 10, }}>Module 3</Text>

      <View
        style={{
          borderBottomColor: '#0093a1',
          borderBottomWidth: 2,
          marginBottom: 10,
        }}
      /> 

    <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
        <View style = {{backgroundColor: '#35d8db', 
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 300, height: 60,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: 'white',
        fontSize: 20, marginRight: 60 }}>6. Food & Drink</Text>
     </View>
    </TouchableOpacity>

       <TouchableOpacity onPress={() => {this.selectionOnPress("BASIC"); this.props.navigation.navigate('Home');}}>
        <View style = {{
          backgroundColor: this.state.selectedButton === "BASIC"
                                ? '#35d8db'
                                : '#98a1a3',
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 300, height: 60,
                          justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                          }}
             >
        <Text style = {{color: this.state.selectedButton === "BASIC"
                                ? 'white'
                                : '#becccf',
        fontSize: 20, marginRight: 90}}>7. Freetime</Text>
     </View>
    </TouchableOpacity>


    </ScrollView> 
    </View>      
  );
}
}

class VocabScreen extends React.Component{
  render(){
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 
      backgroundColor: "#def9fa" }}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('LearnVocab')}>
            <View style = {{backgroundColor: '#f5fffe', 
              alignItems: 'center', 
              paddingRight: 80,
              shadowColor: 'rgba(46, 229, 157, 0.4)',
              shadowOpacity: 1.5,
              elevation: 8,
              shadowRadius: 20 ,
              shadowOffset : { width: 1, height: 13},
              width: 300, height: 100,
                              justifyContent: 'center', borderRadius: 5, marginRight: 50, marginBottom: 20,
                              }}
                 >
            <Text style = {{color: '#008073',
            fontSize: 18, marginRight: 30}}>Learn Vocabulary</Text>
         </View>
        </TouchableOpacity>

    <TouchableOpacity onPress={() => this.props.navigation.navigate('PracticeWords')}>
        <View style = {{backgroundColor: '#f5fffe', 
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 300, height: 100,
                          justifyContent: 'center', borderRadius: 5, marginLeft: 70, marginBottom: 20,
                          }}
             >
        <Text style = {{color: '#008073',
        fontSize: 18, marginRight: 0}}>Flashcard Memorization</Text>
     </View>
    </TouchableOpacity>


 <TouchableOpacity onPress={() => this.props.navigation.navigate('ChallengingWords')}>
        <View style = {{backgroundColor: '#63bfb6', 
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 250, height: 50,
                          justifyContent: 'center', borderRadius: 5, marginLeft: 120, marginBottom: 20,
                          }}
             >
        <Text style = {{color: '#fff',
        fontSize: 18, marginRight: 10}}>Hard Words</Text>

     </View>

    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.props.navigation.navigate('PracticeWords')}>
        <View style = {{backgroundColor: '#63bfb6', 
          alignItems: 'center', 
          paddingRight: 80,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 8,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 13},
          width: 250, height: 50,
                          justifyContent: 'center', borderRadius: 5, marginLeft: 120, marginBottom: 20,
                          }}
             >
        <Text style = {{color: '#fff',
        fontSize: 18, marginRight: 0}}>Fast Revision</Text>
     </View>
    </TouchableOpacity>


      </View>
    );
  }
}

class GrammarScreen extends React.Component{
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 
      backgroundColor: "#def9fa" }}>

        <ScrollView> 

        <Text style = {{color: '#0093a1', backgroundColor: '#99f0e4', fontSize: 30, marginRight: 200, marginTop: 10, }}>
        1. Basics</Text>

        <View
          style={{
            borderBottomColor: '#0093a1',
            borderBottomWidth: 2,
            marginBottom: 10,
          }}
        /> 

      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#fff" }}>

      <Text style={{color: '#00a9c7', marginTop: 10, marginLeft: 20, marginBottom: 10,
       fontSize: 20}}
        onPress={() => this.props.navigation.navigate('GrammarPage')}>
            {'\u2B24'} Introduction
      </Text>

      <Text style={{color: '#00a9c7', marginTop: 10, marginLeft: 20, marginBottom: 10,
       fontSize: 20}}
        onPress={() => this.props.navigation.navigate('GrammarPage')}>
            {'\u2B24'} Overview
      </Text>


      </View>

      <Text style = {{color: '#0093a1', backgroundColor: '#99f0e4', fontSize: 30, marginRight: 200, marginTop: 10, }}>
      2. Conjugation</Text>

        <View
          style={{
            borderBottomColor: '#0093a1',
            borderBottomWidth: 2,
            marginBottom: 10,
          }}
        /> 

    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#fff" }}>

      <Text style={{color: '#00a9c7', marginTop: 10, marginLeft: 20, marginBottom: 10,
       fontSize: 20}}
        onPress={() => this.props.navigation.navigate('GrammarPage')}>
            {'\u2B24'} Past
      </Text>

      <Text style={{color: '#00a9c7', marginTop: 10, marginLeft: 20, marginBottom: 10,
       fontSize: 20}}
        onPress={() => this.props.navigation.navigate('GrammarPage')}>
            {'\u2B24'} Present
      </Text>


      <Text style={{color: '#00a9c7', marginTop: 10, marginLeft: 20, marginBottom: 10,
       fontSize: 20}}
        onPress={() => this.props.navigation.navigate('GrammarPage')}>
            {'\u2B24'} Future
      </Text>

      </View>    


    <Text style = {{color: '#0093a1', backgroundColor: '#99f0e4', fontSize: 30, marginRight: 200, marginTop: 10, }}>
      3. Prepositions</Text>

        <View
          style={{
            borderBottomColor: '#0093a1',
            borderBottomWidth: 2,
            marginBottom: 10,
          }}
        /> 

    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#fff" }}>

      <Text style={{color: '#00a9c7', marginTop: 10, marginLeft: 20, marginBottom: 10,
       fontSize: 20}}
        onPress={() => this.props.navigation.navigate('GrammarPage')}>
            {'\u2B24'} Nominative
      </Text>

      <Text style={{color: '#00a9c7', marginTop: 10, marginLeft: 20, marginBottom: 10,
       fontSize: 20}}
        onPress={() => this.props.navigation.navigate('GrammarPage')}>
            {'\u2B24'} Accusative
      </Text>

    <Text style={{color: '#00a9c7', marginTop: 10, marginLeft: 20, marginBottom: 10,
       fontSize: 20}}
        onPress={() => this.props.navigation.navigate('GrammarPage')}>
            {'\u2B24'} Dative
      </Text>

      <Text style={{color: '#00a9c7', marginTop: 10, marginLeft: 20, marginBottom: 10,
       fontSize: 20}}
        onPress={() => this.props.navigation.navigate('GrammarPage')}>
            {'\u2B24'} Genitive
      </Text>


      </View>

    <Text style = {{color: '#0093a1', backgroundColor: '#99f0e4', fontSize: 30, marginRight: 200, marginTop: 10, }}>
      4. Declension</Text>

        <View
          style={{
            borderBottomColor: '#0093a1',
            borderBottomWidth: 2,
            marginBottom: 10,
          }}
        /> 

    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#fff" }}>

      <Text style={{color: '#00a9c7', marginTop: 10, marginLeft: 20, marginBottom: 10,
       fontSize: 20}}
        onPress={() => this.props.navigation.navigate('GrammarPage')}>
            {'\u2B24'} Ders, Dies, and Dases
      </Text>

      <Text style={{color: '#00a9c7', marginTop: 10, marginLeft: 20, marginBottom: 10,
       fontSize: 20}}
        onPress={() => this.props.navigation.navigate('GrammarPage')}>
            {'\u2B24'} Gender
      </Text>


    </View>

    <Text style = {{color: '#0093a1', backgroundColor: '#99f0e4', fontSize: 30, marginRight: 200, marginTop: 10, }}>
      5. Past Tense</Text>

        <View
          style={{
            borderBottomColor: '#0093a1',
            borderBottomWidth: 2,
            marginBottom: 10,
          }}
        /> 

    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#fff" }}>

      <Text style={{color: '#00a9c7', marginTop: 10, marginLeft: 20, marginBottom: 10,
       fontSize: 20}}
        onPress={() => this.props.navigation.navigate('GrammarPage')}>
            {'\u2B24'} Overview
      </Text>


    </View>    

      </ScrollView>
    </View>
    );
  }
}


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


class LessonOne extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <StackTwo.Navigator style={{ flex: 1, }}>
          <StackTwo.Screen 
          name="lanGo2" 
          component={Home} 

          options={{ 

          headerTitle: props => <LogoTitle {...props} />,

          headerStyle: {
              backgroundColor: '#1ea89f',
              height: 50,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

             headerLeft: () => (
              <Icon
                reverse
                name='heartbeat'
                 onPress={() => alert('Welcome to LanGo, your German language learning app!')}
                type='font-awesome'
                color='#fff'
                size={30}
                paddingRight={30}
              />
            ),

          }}
      />
      </StackTwo.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  vocabText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  icon: {
    marginRight: 50,
  },
  headerlanGo: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },

});

function LogoTitle() {
  return (
    <View style={{ flex: 1, }}>
      <Text style={{fontSize: 25, textAlign: 'center', color: '#f5fffc', marginLeft: 30,
      }}>lanGo</Text>
    </View>
  );
}

function Home() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 20,
          marginBottom: 2,
          padding: 0,
          color: '#f2fffc',
          justifyContent: 'flex-start',
        },
        activeBackgroundColor: '#31e0dd',
        inactiveBackgroundColor: '#008e9e',

      }} 

      >
      <Tab.Screen name="home" component={HomeScreen} 
      options={{
          tabBarIcon: () => <Icon name="home" color="#f2fffc" size={20} />,
        }}
      />
      <Tab.Screen name="lesson" component={LessonScreen} 
      options={{
          tabBarIcon: () => <Icon name="pencil" color="#f2fffc" size={20} />,
        }}
      />
      <Tab.Screen name="vocab" component={VocabScreen} 

      options={{
          tabBarIcon: () => <Icon name="comment" color="#f2fffc" size={20} />,
        }}
        />
      <Tab.Screen name="grammar" component={GrammarScreen}
        options={{
          tabBarIcon: () => <Icon name="font" color="#f2fffc" size={20} />,
        }}

       />
    </Tab.Navigator>
  );
}



class SettingsScreen extends React.Component{

      constructor(props) {
        super(props);
        this.state = { selectedButton: null };
        this.selectionOnPress = this.selectionOnPress.bind(this);
    }

    selectionOnPress(userType) {
        this.setState({ selectedButton: userType });
    }



  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 
      backgroundColor: "#def9fa", }}>

      <ScrollView> 

        <Text style = {{color: '#0093a1', fontSize: 35, marginRight: 200, marginTop: 10, }}>Lorem ipsum</Text>

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



        <Text style = {{color: '#0093a1', fontSize: 25, marginRight: 200, marginTop: 10, }}>Activities</Text>

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
            1. Lorem ipsum dolor sit amet?
            {"\n"}
            {"\n"}
            2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris?
            {"\n"}
            {"\n"}
            3. Duis aute irure dolor in reprehenderit ?

            </Text>
          </View>

        <Text style = {{color: '#0093a1', fontSize: 25, marginRight: 200, marginTop: 10, }}>Questions</Text>


        <View> 

        <View
          style={{
            borderBottomColor: '#0093a1',
            borderBottomWidth: 2,
            marginBottom: 10,
          }}
        />    

         <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#96ebd4", width: 400}}>
            <Text style={{ fontSize: 18, color: '#004b4d', marginLeft: 10, marginRight: 10, 
            marginTop: 10, marginBottom: 20, }}>
            1. Lorem ipsum dolor sit amet?
            

            </Text>
          </View>

       <TouchableOpacity onPress={() => {this.selectionOnPress("BASIC1"); }}>
        <View style = {{
          backgroundColor: this.state.selectedButton === "BASIC1"
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
        <Text style = {{color: this.state.selectedButton === "BASIC1"
                                ? 'white'
                                : '#becccf',
        fontSize: 20, marginRight: 0}}>Option 1</Text>
     </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {this.selectionOnPress("BASIC2"); }}>
        <View style = {{
          backgroundColor: this.state.selectedButton === "BASIC2"
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
        <Text style = {{color: this.state.selectedButton === "BASIC2"
                                ? 'white'
                                : '#becccf',
        fontSize: 20, marginRight: 0}}>Option 2</Text>
     </View>
    </TouchableOpacity>


     <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#96ebd4", width: 400}}>
            <Text style={{ fontSize: 18, color: '#004b4d', marginLeft: 10, marginRight: 10, 
            marginTop: 10, marginBottom: 10, }}>
            2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat?
            

            </Text>
          </View>

<TouchableOpacity onPress={() => {this.selectionOnPress("BASIC3"); }}>
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
        fontSize: 20, marginRight: 0}}>Option 1</Text>
     </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {this.selectionOnPress("BASIC4"); }}>
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
        fontSize: 20, marginRight: 0}}>Option 2</Text>
     </View>
    </TouchableOpacity>

     <TouchableOpacity onPress={() => {this.selectionOnPress("BASIC5"); }}>
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
        fontSize: 20, marginRight: 0}}>Option 3</Text>
     </View>
    </TouchableOpacity>


    </View>


      </ScrollView>
      </View>
    );
  }
}

interface State{

  email: string;
  password: string;

}

const LogIn = ({navigation}) => {

  const [textUser, setTextUser] = React.useState('');
  const [textPwd, setTextPwd] = React.useState('');

  return (

    <View>
    <TextInput
      label="Email"
      style = {{
        width: 300,
        justifyContent: 'center',
        marginLeft: 50,
        marginTop: 160,

      }}
      value={textUser}
      onChangeText={textUser => setTextUser(textUser)}
    />

    <TextInput
      label="Password"
      style = {{
        width: 300,
        justifyContent: 'center',
        marginLeft: 50,
        marginTop: 30,

      }}
      value={textPwd}
      onChangeText={textPwd => setTextPwd(textPwd)}
    />

  <TouchableOpacity onPress={() => navigation.navigate('lanGo')}>
        <View style = {{backgroundColor: '#35d8db', 
          alignItems: 'center', 
          width: 150, height: 60,
                          justifyContent: 'center', borderRadius: 5, marginLeft: 120, marginTop: 30,
                          }}
             >
        <Text style = {{color: 'white',
        fontSize: 20, }}> LOG IN </Text>
     </View>
    </TouchableOpacity>

    </View>
  );
};



function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator style={{ flex: 1, }}>

     <Stack.Screen 
        name="login" 
        component={LogIn} 

        options={{ 

        headerTitle: props => <LogoTitle {...props} />,

        headerStyle: {
            backgroundColor: '#1ea89f',
            height: 50,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

           headerRight: () => (
            <Icon
              reverse
              name='heartbeat'
              onPress={() => alert('Enter your username and password, login.')}
              type='font-awesome'
              color='#fff'
              size={30}
              paddingRight={30}
            />
          ),

        }}

      />


        <Stack.Screen 
        name="lanGo" 
        component={Home} 

        options={{ 

        headerTitle: props => <LogoTitle {...props} />,

        headerStyle: {
            backgroundColor: '#1ea89f',
            height: 50,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

           headerRight: () => (
            <Icon
              reverse
              name='heartbeat'
              onPress={() => alert('Click on a module to begin your lesson.')}
              type='font-awesome'
              color='#fff'
              size={30}
              paddingRight={30}
            />
          ),

        }}

      />

      <Stack.Screen name="Settings" component={SettingsScreen} 

      options={{ 

        headerTitle: props => <LogoTitle {...props} />,

        headerStyle: {
            backgroundColor: '#1ea89f',
            height: 50,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

           headerRight: () => (
            <Icon
              reverse
              name='heartbeat'
              onPress={() => alert('Read and respond to questions.')}
              type='font-awesome'
              color='#fff'
              size={30}
              paddingRight={30}
            />
          ),

        }}

        />

      <Stack.Screen name="GrammarPage" component={GrammarExercise} 

      options={{ 

        headerTitle: props => <LogoTitle {...props} />,

        headerStyle: {
            backgroundColor: '#1ea89f',
            height: 50,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

           headerRight: () => (
            <Icon
              reverse
              name='heartbeat'
              onPress={() => alert('Read to learn about German grammar here.')}
              type='font-awesome'
              color='#fff'
              size={30}
              paddingRight={30}
            />
          ),

        }}

        />

      <Stack.Screen name="LearnVocab" component={LearnVocab} 

      options={{ 

        headerTitle: props => <LogoTitle {...props} />,

        headerStyle: {
            backgroundColor: '#1ea89f',
            height: 50,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

           headerRight: () => (
            <Icon
              reverse
              name='heartbeat'
              onPress={() => alert('You can choose differing vocabulary modes.')}
              type='font-awesome'
              color='#fff'
              size={30}
              paddingRight={30}
            />
          ),

        }}

        />

      <Stack.Screen name="PracticeWords" component={PracticeVocab} 

      options={{ 

        headerTitle: props => <LogoTitle {...props} />,

        headerStyle: {
            backgroundColor: '#1ea89f',
            height: 50,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

           headerRight: () => (
            <Icon
              reverse
              name='heartbeat'
              type='font-awesome'
              onPress={() => alert('Here, you can practice using flashcards.')}
              color='#fff'
              size={30}
              paddingRight={30}
            />
          ),

        }}

        />

       <Stack.Screen name="ChallengingWords" component={ChallengingWords} 

      options={{ 

        headerTitle: props => <LogoTitle {...props} />,

        headerStyle: {
            backgroundColor: '#1ea89f',
            height: 50,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

           headerRight: () => (
            <Icon
              reverse
              name='heartbeat'
              type='font-awesome'
              onPress={() => alert('Learn the most challenging terms.')}
              color='#fff'
              size={30}
              paddingRight={30}
            />
          ),

        }}

        />


      </Stack.Navigator>


    </NavigationContainer>
  );
}

export default App;