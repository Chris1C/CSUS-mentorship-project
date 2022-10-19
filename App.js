import * as React from 'react';
import { Alert,Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [userName, onChangeUserName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Start your foodie journey here
      </Text>
      <TextInput 
      style={styles.input}
      value={userName}
      onChangeText={onChangeUserName} //prop of TextInput
      placeholder = "User name"
      />

      <TextInput 
      style={styles.input}
      value={email}
      onChangeText={onChangeEmail}
      placeholder = "Email"
      />
      <Button
        title="Sign up!"
        onPress={() => Alert.alert(`Hello ${userName} (${email})`)}
      />
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
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
