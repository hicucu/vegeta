import AppLoading  from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Stack from './navigation/Stack';

const cacheImages = (images:Array<string|number>)=>{
  return images.map(image=>{
    if(typeof image === "string"){
      return Image.prefetch(image);
    }
    else return Asset.fromModule(image).downloadAsync();
  })
}

const cacheFonts = (font:any)=>{
  return font.map((font:string) => Font.loadAsync(font));
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = ()=>{
    const images = cacheImages([require("./assets/splash.png")]);

    const fonts = cacheFonts([Ionicons.font]);

    return Promise.all([...images, ...fonts]);
  };
  const onFinish = ()=>setIsReady(true);
  return isReady ? 
  <NavigationContainer>
    <Stack />
  </NavigationContainer>: <
    // @ts-ignore
    AppLoading startAsync={loadAssets} 
    onError={(error)=>console.error(error)}
    onFinish={onFinish} />;
}