/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, Platform,Linking,
} from 'react-native';
import { WebView } from 'react-native-webview';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { PERMISSIONS, RESULTS, request} from 'react-native-permissions';
// import PermissionWebview from './src/components/PermissionWebView';
import WebViewAndroidIos from './src/components/WebViewAndroidIos';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    (async () => {
      const permission = Platform.select({android: PERMISSIONS.ANDROID.RECORD_AUDIO, ios: PERMISSIONS.IOS.CAMERA})
      // const permission = Platform.select({android: PERMISSIONS.ANDROID.RECORD_AUDIO, ios: PERMISSIONS.IOS.MICROPHONE})
      console.log("permission", permission);

      const text= await request(permission);
     console.log("TEXT", text);
    })()
  },[])

  const backgroundStyle = {
    flex:1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // console.log("<<<<<< ERROR******", PermissionWebview)

  // const html = ``
  // Linking.openURL('https://meet.jit.si');
  //            {/*<WebView userAgent="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"*/}
  return (
    <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View
          style={{
            flex:1,
          backgroundColor: 'green',
          }}>
          <WebViewAndroidIos/>
            {/*<PermissionWebview*/}
            {/*         mediaPlaybackRequiresUserAction={false}*/}
            {/*         source={{ uri: 'https://meet.jit.si' }}  />*/}
            {/*<WebView userAgent="Firefox 86.0"*/}
            {/*         mediaPlaybackRequiresUserAction={false}*/}
            {/*         source={{ uri: 'https://meet.jit.si' }}  />*/}

          {/*<WebView*/}
          {/*  source={{*/}
          {/*    html: html,*/}
          {/*  }}*/}
          {/*  mediaPlaybackRequiresUserAction={ false }*/}
          {/*  allowsInlineMediaPlayback={ true }*/}
          {/*/>*/}
        </View>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
