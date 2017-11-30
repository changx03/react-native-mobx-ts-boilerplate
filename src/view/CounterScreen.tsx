import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import AppStore from '../store/AppStore';

@observer
export default class CounterScreen extends React.Component<any, any> {
  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <Text style={{ textAlign: 'center', fontSize: 18 }}>
          {AppStore.getCount()}
        </Text>
        <Button title="+" onPress={AppStore.add} />
        <View style={{ height: 10 }} />
        <Button title="-" onPress={AppStore.minus} />
      </View>
    );
  }
}
