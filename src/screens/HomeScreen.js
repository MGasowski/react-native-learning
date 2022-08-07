import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to components demo"
        onPress={() => props.navigation.navigate("Components")}
      />
      <Button
        title="Go to list demo"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        title="Go to image demo"
        onPress={() => props.navigation.navigate("Images")}
      />
      <Button
        title="Go to counter demo"
        onPress={() => props.navigation.navigate("Counter")}
      />
      <Button
        title="Go to color demo"
        onPress={() => props.navigation.navigate("Color")}
      />
      <Button
        title="Go to square demo"
        onPress={() => props.navigation.navigate("Square")}
      />
      <Button
        title="Go to text demo"
        onPress={() => props.navigation.navigate("Text")}
      />
      <Button
        title="Go to box demo"
        onPress={() => props.navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
