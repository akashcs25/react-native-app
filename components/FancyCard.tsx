import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <View style={styles.container}>

                <Text style={styles.headingText}>FancyCard</Text>
                <View style={[styles.cards]}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://karnatakatourism.org/wp-content/uploads/2020/06/Mysuru-Palace-banner-1920_1100.jpg' }}
                        resizeMode='cover'
                        blurRadius={0}

                    />
                    <View style={styles.textBody}>
                        <Text style={styles.cardText1}>Mysore Palace</Text>
                        <Text style={styles.cardText2}>Mysore, karnataka</Text>
                        <Text style={styles.cardText3}>
                            Mysore Palace, located in the city of Mysuru (Mysore), Karnataka, is one of India's most famous royal residences. Built in the Indo-Saracenic architectural style, the palace blends Hindu, Muslim, Rajput, and Gothic influences. It was the seat of the Wadiyar dynasty and is known for its intricate interiors, including ornate ceilings, stained glass, and decorative murals. The palace is especially stunning during the Dasara festival when it is illuminated with thousands of lights. It's a symbol of the opulence and grandeur of Karnataka's royal heritage.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 20
    },

    image: {
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    container: {
        backgroundColor: 'black'
    },

    cards: {
        flexGrow: 1,
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 8,
    },

    cardText1: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardText2: {
        color: 'black',
        fontWeight: 'bold'
    },
    cardText3: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold'
    },
    textBody: {
        flexGrow: 1,
        padding: 10

    },

    cardImage: {
        borderTopLeftRadius: 8
    },

})