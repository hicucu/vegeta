import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screen/Home'
import SearchResult from '../Screen/SearchResult'
import SearchResultDetail from '../Screen/SearchResultDetail'
import FoodDetail from '../Screen/FoodDetail'
import MyList from '../Screen/MyList'
import Top10 from '../Screen/Top10'
import { StackParamsList } from '../Types/type'

const Stacks = createStackNavigator<StackParamsList>()

const Stack: React.FC = () => {
  return (
    <Stacks.Navigator>
      <Stacks.Screen name="Home" component={Home} />
      <Stacks.Screen name="SearchResult" component={SearchResult} />
      <Stacks.Screen name="SearchResultDetail" component={SearchResultDetail} />
      <Stacks.Screen name="FoodDetail" component={FoodDetail} />
      <Stacks.Screen name="MyList" component={MyList} />
      <Stacks.Screen name="Top10" component={Top10} />
    </Stacks.Navigator>
  )
}

export default Stack
