import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';

export default class WetteFormScreen extends React.Component {
  static navigationOptions = {
    title: 'New / Edit',
  };

  constructor(props) {
    super(props)



    const { navigation } = this.props;

    this.state = {
      id: navigation.getParam('id', 0),
      title: navigation.getParam('title', ''),
      typist: navigation.getParam('typist', {
        id: 1,
        username: "romina5277",
        firstname: "Romina",
        lastname: "Ferrario",
        birthday: "1999-10-30",
        mail: "saemyferrario@outlook.com"
      }),
      end: navigation.getParam('end', ''),
      input: navigation.getParam('input', ''),
      detail: navigation.getParam('detail', ''),
      lastchange: navigation.getParam('lastchange', ''),
      place: navigation.getParam('place', ''),
      member: {
        id: 2,
        username: "luca98",
        firstname: "Luca",
        lastname: "Tschanz",
        birthday: "",
        mail: "5ia15lutschanz@lernende.bbw.ch"
      },
      edit: false
    }
  }

  componentDidMount() {

    if (this.state.id != 0) {
      console.log("edit = true")
      this.setState({
        edit: true
      })
    }

    console.log(" befor searching location ")

    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(" in searching location ")
        console.log("position" + position)
        console.log("coords" + position.coords)
        console.log("latitude" + position.coords.latitude)
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 50000, maximumAge: 1000 }
    );

    console.log(" after searching location ")
  }

  _handleChangeTitle = (title) => {
    this.setState({
      title: title
    })
  }

  _handleChangeInput = (input) => {
    this.setState({
      input: input
    })
  }

  _handleChangeDetail = (detail) => {
    this.setState({
      detail: detail
    })
  }

  _handleChangeMember = (username) => {
    this.setState({
      member: {
        id: 2,
        username: username,
        firstname: "Luca",
        lastname: "Tschanz",
        birthday: "",
        mail: "5ia15lutschanz@lernende.bbw.ch"
      }
    })
  }

  _handleChangeEnd = (end) => {
    this.setState({
      end: end
    })
  }

  _handleButtonSave = () => {

    if (!this.state.edit) {
      console.log("if (!this.state.edit)")
    } else {
      console.log("else (!this.state.edit)")
    }

    if (this.state.edit == false) {
      console.log("if (this.state.edit == false)")
    } else {
      console.log("else (this.state.edit == false)")
    }

    if (!this.state.edit) {
      console.log("new!!!!!!!!!!!!!!!!!!")
      fetch('http://localhost:8080/LetsBet/v1/letsBet/bet', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bet: {
            id: this.state.id,
            title: this.state.title,
            typist: this.state.typist,
            end: this.state.end,
            input: this.state.input,
            detail: this.state.detail,
            lastchange: this.state.lastchange,
            place: this.state.place,
          }
        })
      })
        .catch(() => {
          console.error()
          console.log("Can't do the fetch: new")
        })
    } else {
      console.log("edit!!!!!!!!!!!!!!!!!")
      fetch('http://localhost:8080/LetsBet/v1/letsBet/bet/' + this.state.id, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bet: {
            id: this.state.id,
            title: this.state.title,
            typist: this.state.typist,
            end: this.state.end,
            input: this.state.input,
            detail: this.state.detail,
            lastchange: this.state.lastchange,
            place: this.state.place,
          }
        })
      })
        .catch(() => {
          console.error()
          console.log("Can't do the fetch: edit")
        })
    }

    this.props.navigation.navigate('Wette')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Titel:</Text>
        <TextInput style={{ height: 50, borderColor: 'gray', borderWidth: 2 }}
          onChangeText={(title) => this._handleChangeTitle(title)}
          value={this.state.title} />

        <Text>Einsatz:</Text>
        <TextInput style={{ height: 50, borderColor: 'gray', borderWidth: 2 }}
          onChangeText={(input) => this._handleChangeInput(input)}
          value={this.state.input} />

        <Text>Beschreibung:</Text>
        <TextInput style={{ borderColor: 'gray', borderWidth: 2 }}
          onChangeText={(detail) => this._handleChangeDetail(detail)}
          multiline={true}
          numberOfLines={5}
          value={this.state.detail} />

        <Text>Mit:</Text>
        <TextInput style={{ height: 50, borderColor: 'gray', borderWidth: 2 }}
          onChangeText={(username) => this._handleChangeMember(username)}
          value={this.state.member.username} />

        <Text>Endet am:</Text>
        <TextInput style={{ height: 50, borderColor: 'gray', borderWidth: 2 }}
          onChangeText={(end) => this._handleChangeEnd(end)}
          value={this.state.end} />

        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Button title="Save" onPress={this._handleButtonSave} />
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
