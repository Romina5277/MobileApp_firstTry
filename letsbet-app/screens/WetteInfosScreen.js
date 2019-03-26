import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class WetteInfosScreen extends React.Component {
  static navigationOptions = {
    title: 'Infos',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Hier werden die Details der Wetten ausgegeben!</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
