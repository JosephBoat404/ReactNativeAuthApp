import React, { useState, useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text, Title } from "react-native-paper";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";
import { validateEmail } from "../utils/validation";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (!emailError) {
      login(email, password);
      Alert.alert("Success", "Login successful.");
    } else {
      Alert.alert("Error", "Please fix the errors before submitting.");
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Login</Title>
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setEmailError(validateEmail(text));
        }}
        error={!!emailError}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      {emailError && <Text style={styles.errorText}>{emailError}</Text>}
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        Login
      </Button>
      <Text
        style={styles.switchText}
        onPress={() => navigation.navigate("Signup")}
      >
        Don&apos;t have an account? <Text style={styles.linkText}>Sign up</Text>
      </Text>
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
  buttonContent: {
    height: 50,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  switchText: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 16,
  },
  linkText: {
    color: "#6200EE",
    fontWeight: "bold",
  },
});
