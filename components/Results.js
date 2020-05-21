import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Results extends Component {
  match() {
    return !this.props.return
      ? this.props.flights.map((flight) => {
          if (
             flight.origin === this.props.origin &&
             flight.destination === this.props.destination &&
             flight.date === this.props.dept_date
          ) {
            return (
              <View style={styles.box}>
                <h1>Cost: {flight.cost * this.props.passengers}</h1>
                <h3>{flight.id}</h3>
                <h2>Origin: {this.props.origin}</h2>
                <h2>Destination: {this.props.destination}</h2>
                <h2>Depart Time: {flight.depart_Time}</h2>
                <Button style={{ marginTop: "5%" }} title="Book now" />
              </View>
            );
          }
        })
      :  this.props.flights.map((flight) => {
            return this.props.flights.map((flight2) =>{  
                if (
                    flight.origin === this.props.origin &&
                    flight.destination === this.props.destination &&
                    flight.date === this.props.dept_date &&
                    flight2.date === this.props.return_date &&
                    flight2.origin === this.props.destination
                ){
                    return (
                        <View style={styles.boxHor}>
                            <View style={styles.boxHalf}>
                                <h1>Cost: {flight.cost * this.props.passengers * 2}</h1>
                                <h3>{flight.id}</h3>
                                <h2>Origin: {this.props.origin}</h2>
                                <h2>Destination: {this.props.destination}</h2>
                                <h2>Depart Time: {flight.depart_Time}</h2>
                                <Button style={{ marginTop: "5%" }} title="Book now" />
                            </View>
                            <View style={styles.boxHalf}>
                                <h1></h1>
                                <h3>{flight2.id}</h3>
                                <h2>Return From: {flight2.origin}</h2>
                                <h2>Date: {flight2.date}</h2>
                                <h2>Depart Time: {flight2.depart_Time}</h2>
                            </View>
                        </View>
                    );
                }
            })
        });
  }

  render() {
    if (this.props.submitted) {
      return (
        <View>
          <View style={styles.title}>
            <Text>
              <h1>Results</h1>
            </Text>
          </View>
          <View>{this.match()}</View>
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    // backgroundColor: "#333",
    padding: "2%",
    //alignItems: "center",
    // justifyContent: 'center',
  },
  box: {
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    width: "50%",
    flex: 1,
  },
  boxHor: {
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    width: "50%",
    flex: 1,
    flexDirection: "row",
  },
  boxHalf: {
    flex: 1,
  },
});
