import { NavigationProp } from '@react-navigation/native';
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button} from 'react-native';

interface Props {
  //@ts-ignore
  navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
}

export default ({navigation}:Props) => {
  const onPress = (target:string) =>{
    navigation.navigate(target);
  }
  return (
  <View>
    <Button title="Home" onPress={()=>{onPress("Home")}} />
    <Button title="SearchResult" onPress={()=>{onPress("SearchResult")}} />
    <Button title="SearchResultDetail" onPress={()=>{onPress("SearchResultDetail")}} />
    <Button title="FoodDetail" onPress={()=>{onPress("FoodDetail")}} />
    <Button title="Top10" onPress={()=>{onPress("Top10")}} />
    <Button title="MyList" onPress={()=>{onPress("MyList")}} />
  </View>);
}