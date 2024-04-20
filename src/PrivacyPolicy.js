import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class PrivacyPolicy extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://kamal-walia.github.io/privacypolicy' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default PrivacyPolicy;