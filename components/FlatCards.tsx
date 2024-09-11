import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.cards, styles.cardOne]}>
          <Image
            style={styles.image}
            source={{ uri: 'https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg' }}
            resizeMode='cover'
            blurRadius={0}

          />
        </View>
        <View style={[styles.cards, styles.cardTwo]}>
          <Image
            style={styles.image}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/d/df/Fighter_film_teaser.jpg' }}
            resizeMode='cover'
            blurRadius={0}

          />
        </View>
        <View style={[styles.cards, styles.cardThree]}>
          <Image
            style={styles.image}
            source={{ uri: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00364249-khjjypdaat-portrait.jpg' }}
            resizeMode='cover'
            blurRadius={0}

          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    backgroundColor:'black'
  },

  container: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    padding: 8,
    backgroundColor:'black'
  },

  cards: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 10
  },

  cardOne: {
    backgroundColor: 'white',
  },
  cardTwo: {
    backgroundColor: 'white',
  },
  cardThree: {
    backgroundColor: 'white',
  },
  image: {
    width: 95,
    height: 95,
  },
})