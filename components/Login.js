import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "firebase";

export default class Login extends React.Component {
  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBZj3kruJjiBup7OZoIc1kVKElPOgtXJ9s",
      authDomain: "flight-search-engine-users.firebaseapp.com",
      databaseURL: "https://flight-search-engine-users.firebaseio.com",
      projectId: "flight-search-engine-users",
      storageBucket: "flight-search-engine-users.appspot.com",
      messagingSenderId: "557732276924",
      appId: "1:557732276924:web:006639cfdb5d7e6ccd7eb9",
      measurementId: "G-836JWQ7KW6",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    console.log(firebase);
  }
  createUser = () => {
    console.log("Create user pressed");
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function (response) {
        console.log(response.user.email + " created successfully");
      })
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
      });
  };

  authenUser = () => {
      console.log("Login pressed")
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate("Home")
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log(error.code);
        console.log(error.message);
        // ...
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Login</Text>
        <TextInput
          style={styles.textBox}
          placeholder="Email"
          autoCompleteType="email"
            onChangeText={value => {
              this.setState({
                email: value,
              });
          }}
        />
        <TextInput
          style={styles.textBox}
          placeholder="Password"
          secureTextEntry
            onChangeText={value => {
              this.setState({
                password: value,
              });
          }}
        />
        <View style={styles.buttons}>
          <Button
            style={{ margin: 10 }}
            title="LOGIN"
            onPress={() => this.authenUser()}
          />
          <Button
            style={{ margin: 10 }}
            title="Create User"
            color="red"
            onPress={() => this.createUser()}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //paddingTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  textBox: {
    height: 40,
    backgroundColor: "#465443",
    color: "white",
    marginBottom: 10,
  },
  buttons: {
    flex: 0.1,
    flexDirection: "row",
    //width: 50
    //margin: 5
  },
});
