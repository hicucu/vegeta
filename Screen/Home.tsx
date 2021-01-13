import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { View, Button } from 'react-native'
import { StackParamsList, AppScreen } from '../Types/type'

type HomeScreenNavigationProps = StackNavigationProp<
  StackParamsList,
  AppScreen.Home
>
interface HomeScreenProps {
  navigation: HomeScreenNavigationProps
}

const Home: React.FC<HomeScreenProps> = ({ navigation }: HomeScreenProps) => {
  const onPress = (target: AppScreen) => {
    navigation.navigate(target)
  }
  return (
    <View>
      <Button
        title="Home"
        onPress={() => {
          onPress(AppScreen.Home)
        }}
      />
      <Button
        title="SearchResult"
        onPress={() => {
          onPress(AppScreen.SearchResult)
        }}
      />
      <Button
        title="SearchResultDetail"
        onPress={() => {
          onPress(AppScreen.SearchResultDetail)
        }}
      />
      <Button
        title="FoodDetail"
        onPress={() => {
          onPress(AppScreen.FoodDetail)
        }}
      />
      <Button
        title="Top10"
        onPress={() => {
          onPress(AppScreen.Top10)
        }}
      />
      <Button
        title="MyList"
        onPress={() => {
          onPress(AppScreen.MyList)
        }}
      />
    </View>
  )
}

export default Home
