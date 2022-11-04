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
      <View style={styles.cardContainer}>
    <TinderCard  onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>

      <View style={styles.card}><Text>fdsaf?</Text></View>
    </TinderCard>
    </View>
    </View>
 );
  
  }

  const styles = StyleSheet.create({
    container : {
        display: "flex",
        backgroundColor : "red",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    
    card : {
      // position: 'absolute',
      backgroundColor: '#fff',
      width: '100%',
      maxWidth: 260,
      height: 300,
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 20,
      borderRadius: 20,
      resizeMode: 'cover',
    },
    cardContainer: {
      width: '90%',
      maxWidth: 260,
      height: 300,
    },

  })
  export default RecommendationScreen