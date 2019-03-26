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

  constructor(props) {
    super(props)

    this.state = {
      bet: this.props.bet
    }
    console.log("hallo")
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Hier werden die Details der Wetten ausgegeben!</Text>
        <Text>Titel:          {this.state.bet.title}</Text>
        <Text>Beschreibung:   {this.state.bet.detail}</Text>
        <Text>Mit:            {this.state.bet.typist.firstname} {this.state.typist.lastname}</Text>
        <Text>Endet am:       {this.state.bet.end}</Text>
        <Text>{"\n"}</Text>
        <Text>Letzte Änderung</Text>
        <Text>Last change:    {this.state.bet.lastchange}</Text>
        <Text>Ort:            {this.state.bet.place}</Text>
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
