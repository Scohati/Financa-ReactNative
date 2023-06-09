import React from "react";
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
 } from 'react-native'
import {} from '@'

 const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64 

 export default function Home() {
    return (
        <View style={styles.container}>
            <view style={styles.content}>
                <Text>Sujeito Prog</Text>
                
            </view>
        </View>
    )
 }

 const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight
    }
 })