import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = (props) => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="increase"
        onPress={() => dispatch({ type: "increase", payload: 1 })}
      />
      <Button
        title="decrease"
        onPress={() => dispatch({ type: "increase", payload: -1 })}
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
