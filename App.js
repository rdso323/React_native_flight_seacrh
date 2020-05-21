import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';

export default class App extends React.Component {
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
      submitted: true
    })
    console.log(this.state.submitted)
  }


  render(){
    return (
      <View>
        <Search handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}
        handleSwitch = {this.handleSwitch}
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
