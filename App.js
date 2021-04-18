import React, { Component } from 'react'
import {Text,View,Image, StyleSheet} from 'react-native'
import Calapi from './Component/FunctionalComponent/Apicall';

const App=()=>{

  return (
   <Calapi />
  )
}


const StylingReactComponent=()=>{
  return(
    <View>
      <Text style={styles.Text}>
      Styling Component bro
      </Text>
      <View style={{
                    width:100,
                    height:100,
                    backgroundColor:'red',
                    borderWidth:2,
                    borderColor:'blue',
                    margin:5}}/>
      </View>
  )
}

const styles=StyleSheet.create({
  Text:{
    fontSize:18,
    fontWeight:'bold',
    color:'blue'
  }
})

const SampleComponent=()=>{
  return(
    <View>
    <View style={{width:80,height:80,backgroundColor:'purple',borderRadius:5,margin:10}} />
    <Text>selamat datang</Text>
    <Home />
    <Logo />
    <TextInput style={{borderWidth:1,margin:5,borderRadius:10}}/>
    <Boxgreen />
    <Profile />
  </View>
  )
}


const Home=()=>{
  return <Text>by Umar Wirahadi</Text>
}


const Logo=()=>{
  return(
    <Image source={{uri:'https://placeimg.com/100/100/tech'}} style={{width:100,height:100}} />
  )
}


class Boxgreen extends Component{
  render(){

    return(
      <Text>ini komponen dari class component</Text>
    )
  }
}


class Profile extends Component{
  render(){
    return(
      <View>
        <Text style={{color:'blue',fontSize:35}}>Ini profile</Text>
        <Image source={{uri:'https://placeimg.com/1000/1000/any'}} style={{width:100,height:100,borderRadius:100}}/>
      </View>
    )
  }
}

export default App