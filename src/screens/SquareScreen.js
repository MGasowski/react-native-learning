import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  if (
    state[action.color] + action.amount > 255 ||
    state[action.color] + action.amount < 0
  )
    return state;
  return { ...state, [action.color]: state[action.color] + action.amount };
  //   switch (action.color) {
  //     case "red":
  //       return { ...state, red: state.red + action.amount };
  //     case "green":
  //       return { ...state, green: state.green + action.amount };
  //     case "blue":
  //       return { ...state, blue: state.blue + action.amount };
  //     default:
  //       return state;
  //   }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  const colors = ["red", "green", "blue"];

  return (
    <View>
      {colors.map((el) => (
        <ColorCounter
          color={el}
          key={el}
          onIncrease={() => dispatch({ color: el, amount: COLOR_INCREMENT })}
          onDecrease={() => dispatch({ color: el, amount: -COLOR_INCREMENT })}
        />
      ))}
      {/* <ColorCounter
        color="Red"
        onIncrease={() => {
          dispatch({ color: "red", amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ color: "red", amount: -COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          dispatch({ color: "green", amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ color: "green", amount: -COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          dispatch({ color: "blue", amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ color: "blue", amount: -COLOR_INCREMENT });
        }}
      /> */}
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
