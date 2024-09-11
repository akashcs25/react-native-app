import { StyleSheet, Text, View, Linking, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(link: string) {
        Linking.openURL(link)
    }
    return (
        <View style={styles.container}>

            <Text style={styles.headingText}>ActionCard</Text>
            <View style={[styles.Card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        what's new in javascript ES012
                    </Text>
                </View>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://s3-ap-southeast-1.amazonaws.com/storage.virtualspirit.me/post/cover/151/10.jpg' }}
                    resizeMode='cover'
                    blurRadius={0}

                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={5} style={styles.bodyText}>
                        just like every year javascript brings new features.this year
                        javascript brings 4 features almost in productivity rollout
                        just like every year javascript brings new features.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => {
                        openWebsite('https://www.javascript.com')
                    }}>
                        <Text style={styles.socilLinks}>
                            Read More
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        openWebsite('https://www.instagram.com/akash.shivaram/')
                    }}>
                        <Text  style={styles.socilLinks}>
                            Follow Me
                        </Text>
                    </TouchableOpacity>

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
        marginTop:10
    },
    image: {
        height: 200,
    },
    container:{
        backgroundColor:'black'
    },
    Card: {
        // marginVertical:12,
        // marginHorizontal:10,
        borderRadius:8,
        marginBottom:19,
        width:350,
        marginHorizontal:20
    },
    elevatedCard: {
         backgroundColor:'lightgreen'
    },
    headingContainer: {
        backgroundColor:'lightgreen',
        borderRadius:8,
        alignItems:'center'
    },
    headerText: {
        color:'black',
        fontWeight:'bold',
        fontSize:20
    },
    bodyContainer: {
        marginHorizontal:8,
        flexGrow:1,

    },
    bodyText: {
        color:'black',
        fontWeight:'bold',
        fontSize:15
    },
    footerContainer: {
        marginHorizontal:8,
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    socilLinks:{
        color:'purple',
        backgroundColor:'white',
        paddingHorizontal:10,
        paddingVertical:8,
        borderRadius:5,
        margin:8
    },
})