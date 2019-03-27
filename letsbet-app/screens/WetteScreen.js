import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default class WetteScreen extends Component {
  static navigationOptions = {
    title: 'Wetten',
  };

  constructor(props) {
    super(props)

    this.state = {
      message: "",
      bets: [{
        id: 1,
        title: "",
        typist: {
          id: 1,
          username: "",
          firstname: "",
          lastname: "",
          birthday: "",
          mail: ""
        },
        end: "",
        input: "",
        detail: "",
        lastchange: "",
        place: ""
      }],
      bet: {
        id: 1,
        title: "",
        typist: {
          id: 1,
          username: "",
          firstname: "",
          lastname: "",
          birthday: "",
          mail: ""
        },
        end: "",
        input: "",
        detail: "",
        lastchange: "",
        place: ""
      },
      array1: ["eis", "zwei", "drei", "vier"],
    }
  }

  componentDidMount() {
    fetch("http://192.168.100.29:8080/LetsBet/v1/letsBet/m")
      .then(response => response.json())
      .then(message => {
        this.setState({ message: message.message })
      })
      .catch(() => {
        console.error()
        console.log("Can't do the fetch: Message")
      })

    fetch("http://192.168.100.29:8080/LetsBet/v1/letsBet/bets")
      .then(response => response.json())
      .then(bets => {
        this.setState({ bets: bets })
      })
      .catch(() => {
        console.error()
        console.log("Can't do the fetch: Bets")
      })
  }

  _handleHelpPressDelete = () => {
    alert("Do you really wanna delete this bet?")
  };

  render() {
    const { navigate, push } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {this.state.bets.map((b) => {
            return (
              <View>
                <Text>{b.title}</Text>
                <Text>{b.typist.username}</Text>
                <Text>{b.end}</Text>
                <Text>{b.input}</Text>
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>
              </View>
            );
          })}

        </ScrollView>
        <View style={styles.tabBarInfoContainer}>
          <TouchableOpacity onPress={() => navigate('WetteForm')} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('WetteForm', this.state.bets.find((b) => { return b.id == 1 }))} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handleHelpPressDelete} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('WetteInfos', this.state.bets.find((b) => { return b.id == 1 }))} style={styles.helpLink}>
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
