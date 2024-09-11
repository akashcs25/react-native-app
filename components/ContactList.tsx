import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contactlist = [{
        userId: 1,
        userName: 'Mahadev',
        Status: 'Jquery Developer',
        ImageUrl: 'https://i.pinimg.com/originals/05/54/a0/0554a097fcb8254573a969bd6c24d591.png'
    },
    {
        userId: 2,
        userName: 'Shashank',
        Status: 'React Developer',
        ImageUrl: 'https://i.pinimg.com/originals/4f/51/76/4f5176cf66df79e26c35469ad178eddd.jpg'
    },
    {
        userId: 3,
        userName: 'Akash',
        Status: 'React Developer',
        ImageUrl: 'https://wallpaperaccess.com/full/3874015.jpg'
    },
    {
        userId: 4,
        userName: 'Shesha',
        Status: 'UI/UX Developer',
        ImageUrl: 'https://i.pinimg.com/originals/14/1c/72/141c72491c81abefd2e1acda31a89d09.jpg'
    },
    {
        userId: 5,
        userName: 'Pooja',
        Status: 'UI/UX Developer',
        ImageUrl: 'https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl_147933-100.jpg?w=1800'
    }]
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView horizontal style={styles.Container} scrollEnabled={true}>
                {contactlist.map(({ userId, userName, Status, ImageUrl }) => (
                    <View key={userId} style={styles.userCard}>
                        <Image
                            source={
                                {
                                    uri: ImageUrl
                                }
                            }
                            style={styles.userImage}
                        />
                        {/* <Text style={styles.userText}>{userId}</Text> */}
                        <Text style={styles.userText}>{userName}</Text>
                        <Text style={styles.userText}>{Status}</Text>
                    </View>
                ))}
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
    Container: {
        flexDirection:'row',
        backgroundColor:'black',
    },
    userCard: {
        backgroundColor:'#8D3DAF',
        margin:18,
        // justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:8,
        borderColor:'white',
        borderWidth:3
    },
    userImage:{
        height:60,
        width:60,
        borderRadius:60/2
    },
    userText:{
        fontSize:16,
        fontWeight:'500',
    }
})