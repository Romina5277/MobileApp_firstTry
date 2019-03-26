import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class FriendsScreen extends React.Component {
  static navigationOptions = {
    title: 'Find Friends',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView style={styles.container}>
        <Text>Hier kannst du bald nach Freunden suchen!</Text>
        <ExpoLinksView />
      </ScrollView>
    );;
  }
}
