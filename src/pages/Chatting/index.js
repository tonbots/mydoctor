import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChatItem, Header, InputChat } from '../../components';
import { colors, fonts } from '../../utils';

const Chatting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type="dark-profile" title="Joko widodo" onPress={()=> navigation.goBack()} />
            <Text style={styles.chatDate}>Senin, 23 Agustus 2021</Text>
            <View style={styles.content}>
                <ChatItem isMe />
                <ChatItem />
                <ChatItem isMe />
            </View>
            <InputChat />
        </View>
    )
}

export default Chatting;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        flex: 1
    },
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center'
    }
})
