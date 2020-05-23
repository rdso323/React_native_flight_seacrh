import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Search';
import Results from './Results';
import Data from "../assets/Data.json"

export default class Home extends React.Component {
    constructor() {
      super();
      this.state = {
        origin: "N/A",
        destination: "N/A",
        dept_date: "2020-06-01",
        return_date: null,
        passengers: 0,
        submitted: false,
        return: false,
        flights: []
      };
    }
  
    handleChange = (data,value) => {
      this.setState({
        [data]: value,
      });
      console.log(this.state.origin);
    };
  
    handleSwitch = () =>
      this.setState({
        return: !this.state.return,
      })
  
    handleSubmit = () => {
      this.setState({
        submitted: true,
        flights: Data,
      })
      console.log(this.state.submitted)
      console.log(this.state.flights)
      // fetch("Data.json")
      //   .then((response) => response.json())
      //   .then((handle =>
      //     this.setState({
      //       flights: handle.data,
      //       submitted: true
      //     })))
    }
  
  
    render(){
      return (
        <View>
          <Search handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          handleSwitch = {this.handleSwitch}
          return = {this.state.return}/>
          
          <Results submitted={this.state.submitted}
          flights = {this.state.flights}
          origin = {this.state.origin}
          destination = {this.state.destination}
          dept_date = {this.state.dept_date}
          return_date = {this.state.return_date}
          passengers = {this.state.passengers}
          return = {this.state.return}/>
        </View>
      );
    }
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });
  