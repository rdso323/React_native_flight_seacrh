import React, { Component } from "react";
import {
  Switch,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import DatePicker from "react-native-datepicker";

export class Search extends Component {
  returnCheck() {
    return this.props.return ? (
      <TextInput
        style={styles.box}
        placeholder="Ret YYYY-MM-DD"
        onChangeText={(value) => this.props.handleChange("return_date", value)}
      />
    ) : null;
  }

  render() {
    return (
      <View>
        <View style={styles.title}>
          <Text style={{ color: "white" }}>
            <h1>Flight Search Engine</h1>
          </Text>
        </View>
        <View style={styles.searches}>
          <View>
            <Text>One-Way/Return</Text>
            <Switch
              value={this.props.return}
              onValueChange={() => this.props.handleSwitch()}
            />
            <TextInput
              style={styles.box}
              placeholder="Enter Orgin"
              onChangeText={(value) => this.props.handleChange("origin", value)}
            />
            <TextInput
              style={styles.box}
              placeholder="Enter Destination"
              onChangeText={(value) =>
                this.props.handleChange("destination", value)
              }
            />
            {/* <DatePicker
              style={styles.box}
              placeholder="Departure Date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(value) =>
                this.props.handleChange("dept_date", value)
              }
            /> */}
            <TextInput
              style={styles.box}
              placeholder="Dept YYYY-MM-DD"
              onChangeText={(value) =>
                this.props.handleChange("dept_date", value)
              }
            />
            {this.returnCheck()}
            <TextInput
              style={styles.box}
              keyboardType="numeric"
              placeholder="No of passengers"
              onChangeText={(value) =>
                this.props.handleChange("passengers", value)
              }
            />
          </View>
          <View style={{ marginTop: "5%" }}>
            <Button
              title="Submit"
              color="red"
              //marginTop="10px"
              onPress={() => this.props.handleSubmit()}
            />
          </View>
        </View>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    backgroundColor: "#333",
    padding: "5%",
    alignItems: "center",
    // justifyContent: 'center',
  },
  searches: {
    borderRadius: 10,
    marginTop: "10px",
    width: "40%",
    padding: "2%",
    backgroundColor: "#39CCCC",
  },
  box: {
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    //width: "200",
  },
});

export default Search;
