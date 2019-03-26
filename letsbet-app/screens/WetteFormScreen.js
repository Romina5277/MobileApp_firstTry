import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class WetteFormScreen extends React.Component {
  static navigationOptions = {
    title: 'New / Edit',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Hier wird man die Wetten bearbeiten können und neue Wetten erstellen!</Text>
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
