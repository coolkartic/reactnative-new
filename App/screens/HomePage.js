import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,Image,SafeAreaView
} from 'react-native'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import { Button } from '../components'

/**
 * A login component that display username and password text field.
 * Loading indicator will show up when login is in process.
 * 
 * @class App
 * @extends {Component}
 */
class HomePage extends React.Component {
  constructor(props) {
    super(props)

    // init local state
   
  }

  render() {
    const { doLogout,fullName,userStored} = this.props

    // show only loading indicator if loading state is true
   


    // display login screen
    return (
      <SafeAreaView style={{flex: 1}}>
       <View style={{alignItems:'center',alignContent:'center',paddingTop:40}}>

<Text style={{fontWeight:'bold',fontSize:20,color:'dodgerblue'}}>DASHBOARD {fullName}!</Text>
<Image
style={{ 
  width: 190,
  height: 210,
  marginBottom:40}}
source={require('../../assets/wel.jpg')}
/> 
<Button
  onPress={() => {
    doLogout()
  }}
>
  Logout
</Button>
</View>
    </SafeAreaView>
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 190,
    height: 210,
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"black",
    fontSize:11,
    fontWeight:'bold'
  },
 
});

/**
 * Login screen.
 */
export const Home = connect(
  
  // inject states to props
  (state= States) => ({
    
    loggedIn: state.user.loggedIn,
    fullName: state.user.fullName,
    userStored:state.user.userStored

  }),

  // inject actions to props
  dispatch => ({
     
    doLogout: () => dispatch(actions.user.logout())
  })
)(HomePage)