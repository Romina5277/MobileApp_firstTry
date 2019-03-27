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

    const { navigation } = this.props;

    this.state = {
      id: navigation.getParam('id', 0),
      title: navigation.getParam('title', 'no title'),
      typist: navigation.getParam('typist', {
        id: 0,
        username: "",
        firstname: "",
        lastname: "",
        birthday: "",
        mail: ""
      }),
      end: navigation.getParam('end', 'no end'),
      input: navigation.getParam('input', 'no input'),
      detail: navigation.getParam('detail', 'no detail'),
      lastchange: navigation.getParam('lastchange', 'no change'),
      place: navigation.getParam('place', 'no place')
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Titel:          {this.state.title}</Text>
        <Text>Beschreibung:   {this.state.detail}</Text>
        <Text>Von:            {this.state.typist.firstname} {this.state.typist.lastname}</Text>
        <Text>Endet am:       {this.state.end}</Text>
        <Text>{"\n"}</Text>
        <Text>Letzte Änderung</Text>
        <Text>Last change:    {this.state.lastchange}</Text>
        <Text>Ort:            {this.state.place}</Text>
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
