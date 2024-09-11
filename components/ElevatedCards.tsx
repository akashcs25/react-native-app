import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal style={styles.container}>
                <View style={[styles.cards, styles.elevatedCards]}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://images.wallpapersden.com/image/ws-monkey-luffy-4k-one-piece-2024-art_92971.jpg' }}
                        resizeMode='cover'
                        blurRadius={0}

                    />
                </View>
                <View style={[styles.cards, styles.elevatedCards]}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://images.wallpapersden.com/image/ws-infernal-muzan-4k-muzan-kibutsuji_92937.jpg' }}
                        resizeMode='cover'
                        blurRadius={0}

                    />
                </View>
                <View style={[styles.cards, styles.elevatedCards]}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://images.wallpapersden.com/image/ws-one-piece-4k-epic-clash_92879.jpg' }}
                        resizeMode='cover'
                        blurRadius={0}

                    />
                </View>
                <View style={[styles.cards, styles.elevatedCards]}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://images.wallpapersden.com/image/ws-marco-digital-one-piece-art_92765.jpg' }}
                        resizeMode='cover'
                        blurRadius={0}

                    />
                </View>
                <View style={[styles.cards, styles.elevatedCards]}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://images.wallpapersden.com/image/ws-monkey-luffy-4k-fan-ai-art_92441.jpg' }}
                        resizeMode='cover'
                        blurRadius={0}

                    />
                </View>
                <View style={[styles.cards, styles.elevatedCards]}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://images.wallpapersden.com/image/ws-goku-power-4k-dragon-ball-z_92447.jpg' }}
                        resizeMode='cover'
                        blurRadius={0}

                    />
                </View>
            </ScrollView>
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
        padding: 8,
        backgroundColor:'black'
    },

    cards: {
        width: 100,
        height: 100,
        margin: 10,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
    },

    elevatedCards: {
        backgroundColor: 'grey'
    },

    image: {
        width: 95,
        height: 95,
    },
})