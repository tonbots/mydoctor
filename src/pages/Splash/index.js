import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { colors, fonts } from '../../utils'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('GetStarted');
        }, 3000);
    },[])
    return (
        <View style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>Mydoctor App</Text>
        </View>
    )
}
export default Splash;

const styles = StyleSheet.create({
    page:{
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    title:{
        fontSize: 20,
        fontFamily: fonts.primary[600],
    }
})
