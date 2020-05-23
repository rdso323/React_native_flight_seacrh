import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
//import firebase from "firebase";

export default class Login extends React.Component {
//   componentDidMount() {
//     // Initialize Firebase
//     var config = {
//       apiKey: "AIzaSyBgyI5EZVOazH79ljj80WlcLJYPZZ3hYxM",
//       authDomain: "testapp-38277.firebaseapp.com",
//       databaseURL: "https://testapp-38277.firebaseio.com",
//       projectId: "testapp-38277",
//       storageBucket: "testapp-38277.appspot.com",
//       messagingSenderId: "662181340773",
//     };
//     if (!firebase.apps.length) {
//       firebase.initializeApp(config);
//     }
//     console.log(firebase);
//   }
//   createUser = () => {
//     console.log("Button pressed");
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(this.state.email, this.state.password)
//       .then(function (response) {
//         console.log(response.user.email + " created successfully");
//       })
//       .catch(function (error) {
//         console.log(error.code);
//         console.log(error.message);
//       });
//   };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Login</Text>
        <TextInput
          style={styles.textBox}
          placeholder="Username"
          autoCompleteType="username"
        //   onChangeText={value => {
        //     this.setState({
        //       email: value,
        //     });
        // }}
        />
        <TextInput
          style={styles.textBox}
          placeholder="Password"
          secureTextEntry
        //   onChangeText={value => {
        //     this.setState({
        //       password: value,
        //     });
        // }}
        />
        <View style={styles.buttons}>
          <Button
            style={{ margin: 10 }}
            title="LOGIN"
            onPress={() => this.props.navigation.navigate("Home")}
          />
          <Button
            style={{ margin: 10 }}
            title="Create User"
            color="red"
            onPress={() => this.props.navigation.navigate("Home")}
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
