import React from 'react';
import { View, Button } from 'react-native';
import Taro from './taro/Taro';

export default class SettingsScreen extends React.Component {
  componentDidMount() {
    Taro.setNavigationBarTitle({ title: '订单' });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="settings Go to Details"
          onPress={() => {
            Taro.navigateTo({ url: 'pages/invoice/batch_company/index' });
          }}
        />
      </View>
    );
  }
}