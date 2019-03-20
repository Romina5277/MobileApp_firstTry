import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

export default class LinksScreen extends Component {
  static navigationOptions = {
    title: 'Wetten',
  };

  constructor(props) {
    super(props)
  }

  _handleHelpPressNew = () => {
    console.log("New")
    this.props.navigation.navigate('WetteForm')
  };

  _handleHelpPressEdit = () => {
    console.log("Edit")
  };

  _handleHelpPressDelete = () => {
    console.log("Delete")
    alert("Do you really wanna delete this bet?")
  };

  _handleHelpPressInfo = () => {
    console.log("Info")
  };

  render() {
    const { navigate, push } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text>Hier werden die Wetten ausgegeben!</Text>
          <Button
            title="Go to WetteForm"
            onPress={() => navigate('WetteForm')}
          />
        </ScrollView>
        <View style={styles.tabBarInfoContainer}>
          <TouchableOpacity onPress={this._handleHelpPressNew} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handleHelpPressEdit} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handleHelpPressDelete} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handleHelpPressInfo} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 110,
  },
  tabBarInfoContainer: {
    flexDirection: "row",
    position: 'absolute',
    height: 50,
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpLink: {
    paddingVertical: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
});
