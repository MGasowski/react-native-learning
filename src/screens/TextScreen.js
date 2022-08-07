import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="John"
        autoCapitalize="none"
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      <Text>
        {password.length > 4 ? password : "Password length must be at least 5"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
