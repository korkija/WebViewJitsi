import React, {Component} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import { WebView } from 'react-native-webview';

import PermissionWebview from '../native/PermissionWebview';
// const PermissionWebview = require('./PermissionWebView');

export default class WebViewAndroidIos extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'WebView',
      headerStyle: {backgroundColor: '#336384'},
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white',
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('PermissionWebview', PermissionWebview);
    return (
      <PermissionWebview
        style={{flex: 1}}
        source={{uri: 'https://meet.jit.si'}}
        mediaPlaybackRequiresUserAction={false}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        // source={{uri: this.website}}
        // sourceUri={this.website}
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
      />
    );
  }
}
