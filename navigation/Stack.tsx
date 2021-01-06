import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';
import SearchResult from '../Screen/SearchResult';
import SearchResultDetail from '../Screen/SearchResultDetail';
import FoodDetail from '../Screen/FoodDetail';
import MyList from '../Screen/MyList';
import Top10 from '../Screen/Top10';

const Stack = createStackNavigator();

export default () =>{ 
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="SearchResultDetail" component={SearchResultDetail} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
        <Stack.Screen name="HomMyListe" component={MyList} />
        <Stack.Screen name="Top10" component={Top10} />
        <Stack.Screen name="MyList" component={MyList} />
    </Stack.Navigator>
    );  
}