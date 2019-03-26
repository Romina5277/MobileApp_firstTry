import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';

export default class WetteScreen extends Component {
  static navigationOptions = {
    title: 'Wetten',
  };

  constructor(props) {
    super(props)

    this.state = {
      message: "",
      bet: [{
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
    }
  }

  componentDidMount() {

    console.log("im didmount")

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        console.log(users)
      })
      .catch(() => {
        console.error()
        console.log("Can't do the fetch: users")
      })

    fetch("http://192.168.100.29:8080/LetsBet/v1/letsBet/m")
      .then(response => response.json())
      .then(message => {
        console.log(message)
        this.setState({ message: message })
      })
      .catch(() => {
        console.error()
        console.log("Can't do the fetch: Message")
      })

    fetch("http://192.168.100.29:8080/LetsBet/v1/letsBet/bets")
      .then(response => response.json())
      .then(bet => {
        console.log("im fetch")
        console.log(bet)
        //this.setState({ bet: bet })
      })
      .catch(() => {
        console.error()
        console.log("Can't do the fetch: Bets")
      })

    console.log("after fetch")
  }

  _handleHelpPressDelete = () => {
    alert("Do you really wanna delete this bet?")
  };

  render() {
    const { navigate, push } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text>Hier werden die Wetten ausgegeben!</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>{this.state.message}</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          {this.state.bet.map((b) => {
            return (
              <View key={b.id}>
                <Text>{b.title}         {b.typist.username}</Text>
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
          <TouchableOpacity onPress={() => navigate('WetteForm')} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handleHelpPressDelete} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('WetteInfos')} style={styles.helpLink}>
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
