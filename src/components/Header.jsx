import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { iconSize } from '../constants/dimensions'
import { useNavigation } from '@react-navigation/native'


const Header = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{
navigation.goBack()
      }}>
      <Ionicons name={"arrow-back"} size={iconSize.md}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <AntDesign name={"hearto"} size={iconSize.md}/>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
})

export default Header