import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import { Login } from './login'
import { Home } from './HomePage'
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Main component. Display greeting when user is logged in,
 * otherwise it will display the login screen.
 * 
 * @class App
 * @extends {Component}
 */
const Stack = createStackNavigator();
class App extends Component {
  constructor(){
    super()
    this.state={
      'isLogin' : false,
      'isReady' : false,
      'isStayHere' : false
    }
  }
  
  async componentDidMount(){
  
    const OnLoadUser=await AsyncStorage.getItem("userData")
  
  console.log("ONLOAD CHECK VALUE",OnLoadUser);
    if(OnLoadUser == null ||  OnLoadUser == '')
    {
      this.setState({isLogin:false})
    }
    else{
      this.setState({isLogin:true})
    }
  }
  render() {

  const {loggedIn,fullName,userStored} = this.props
    // Display login screen when user is not logged in
    let User = this.state.isLogin;
 
    if (!User) {
      return (
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
              </NavigationContainer>
             )
    }
    if(User)
    {
      console.log("NAME:",fullName,"STORED:",userStored)
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
    


    // Display greeting with user full name displayed
   
  }
}

export const Main = connect(

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
  
)


(App)
