import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';
import SearchResult from '../Screen/SearchResult';
import SearchResultDetail from '../Screen/SearchResultDetail';
import FoodDetail from '../Screen/FoodDetail';
import MyList from '../Screen/MyList';
import Top10 from '../Screen/Top10';

export enum AppScreen {
    Home = "Home",
    SearchResult = "SearchResult",
    SearchResultDetail = "SearchResultDetail",
    FoodDetail = "FoodDetail",
    MyList = "MyList",
    Top10 = "Top10"
};

export type StackParamsList = {
    Home: undefined,
    SearchResult: undefined,
    SearchResultDetail: undefined,
    FoodDetail: undefined,
    MyList: undefined,
    Top10: undefined
};

const Stack = createStackNavigator<StackParamsList>();

export default () =>{ 
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="SearchResultDetail" component={SearchResultDetail} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
        <Stack.Screen name="MyList" component={MyList} />
        <Stack.Screen name="Top10" component={Top10} />
    </Stack.Navigator>
    );  
}