import { Text, View, StyleSheet } from 'react-native';
import TinderCard from 'react-tinder-card';

const RecommendationScreen = () => {
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }
  
  return (
    <View style={styles.container}>
    <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
      <Text>Hello, World!</Text>
    </TinderCard>
    </View>
 );
  
  }

  const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : "red",
        alignItems: "center",
        justifyContent: "center"
    }
    

  })
  export default RecommendationScreen