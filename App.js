import * as React from 'react';
import { Alert,Text, View, StyleSheet, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';


//https://codingbeautydev.com/blog/react-button-link/#:~:text=To%20use%20a%20button%20as%20a%20link%20in%20React%2C%20wrap,navigate%20to%20the%20specified%20URL.
//page linking
export default function App() {
  const [userName, onChangeUserName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeReconfirmPassword] = React.useState("");


  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.backButton}
          // onPress={onChangeReconfirmPassword}
          >
            
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Text style={styles.header}>
          Start your foodie journey here
        </Text>
        <TextInput 
        style={styles.input}
        value={userName}
        onChangeText={onChangeUserName} //prop of TextInput
        placeholder = "User name"
        placeholderTextColor = "#2D6983"
        />

        <TextInput 
        style={styles.input}
        value={email}
        onChangeText={onChangeEmail}
        placeholder = "Email"
        placeholderTextColor = "#2D6983"
        />
        

        <TextInput 
        style={styles.input}
        value={password}
        onChangeText={onChangePassword} //prop of TextInput
        placeholder = "Password"
        placeholderTextColor = "#2D6983"
        />

        <TextInput 
        style={styles.input}
        value={confirmPassword}
        onChangeText={onChangeReconfirmPassword} //prop of TextInput
        placeholder = "Reconfirm password"
        placeholderTextColor = "#2D6983"
        />

        {/* <Button
          style={styles.signUp}
          title="Sign up!"
          onPress={() => Alert.alert(`Hello ${userName} (${email})`)}
        /> */}

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={onChangeReconfirmPassword}
          >
          <Text 
          style ={styles.signUpText}
          >Sign up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#D5ECFD',
    padding: 8,
  },
  header: {

    fontSize: 37,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily :'Courier', 
    
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius : 5,
    borderColor: '#5193B8',
    width : 300,
    marginLeft:30,
    // color :'#2D6983',
  },

  signUpButton: {
    
    height: 55,
    alignContent: 'center',
    backgroundColor: '#F5ABAB',
    borderRadius : 5,
    width : 300,
    justifyContent: 'center', //vertical alignment of the sign up button text
    margin: 30,

  },
  backButton : {
    height: 50,
    margin: 12,
    borderWidth: 2,
   
    borderRadius : 5,
    borderColor: '#5193B8',
    width : 70,
    marginLeft:25,
  },
  signUpText : {
    textAlign: 'center', //horizontal alignment of the sign up button text
    color: 'white',
    fontWeight: 'bold',
  },

  main : {
    marginTop : 20,
  }
  
});