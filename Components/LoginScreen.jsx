import { Text, View, StyleSheet } from 'react-native';

const LoginScreen = () => {
    return (  <View style = {styles.container}><Text>Hi there</Text></View>
    )
  }

  const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : "blue",
        alignItems: "center",
        justifyContent: "center"
    }

  })
  export default LoginScreen