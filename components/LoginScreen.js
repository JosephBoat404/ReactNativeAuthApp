import React, { useState, useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text, Title } from "react-native-paper";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext"; // Importing AuthContext for user authentication
import { validateEmail } from "../utils/validation"; // Importing email validation function

export const LoginScreen = ({ navigation }) => {
  // State hooks to manage form data and error messages
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const { login } = useContext(AuthContext); // Destructure login function from AuthContext

  // Handle the login functionality
  const handleLogin = () => {
    // Check if both email and password are provided
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // If there are no email errors, proceed with login
    if (!emailError) {
      login(email, password); // Call login function from context
      Alert.alert("Success", "Login successful."); // Show success alert
    } else {
      // If there is an error, show an alert to fix the issue
      Alert.alert("Error", "Please fix the errors before submitting.");
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Login</Title> {/* Display the title of the screen */}
      
      {/* Email input field */}
      <TextInput
        mode="outlined" // Outlined style for the input
        label="Email" // Label for the input
        value={email} // Bind email state to the value
        onChangeText={(text) => {
          setEmail(text); // Update email state as user types
          setEmailError(validateEmail(text)); // Validate email and set error if invalid
        }}
        error={!!emailError} // Show error state if there is an email error
        keyboardType="email-address" // Set keyboard type for email input
        autoCapitalize="none" // Prevent automatic capitalization for email
        style={styles.input} // Apply custom styles
      />
      
      {/* Show email error message if there is an error */}
      {emailError && <Text style={styles.errorText}>{emailError}</Text>}
      
      {/* Password input field */}
      <TextInput
        mode="outlined"
        label="Password"
        value={password} // Bind password state to the value
        onChangeText={setPassword} // Update password state as user types
        secureTextEntry // Secure input for password
        style={styles.input} // Apply custom styles
      />
      
      {/* Login button */}
      <Button
        mode="contained" // Button with a filled background
        onPress={handleLogin} // Trigger login function when pressed
        style={styles.button} // Apply custom styles
        contentStyle={styles.buttonContent} // Adjust button content size
      >
        Login
      </Button>
      
      {/* Navigation to Signup screen if the user doesn't have an account */}
      <Text
        style={styles.switchText}
        onPress={() => navigation.navigate("Signup")} // Navigate to Signup screen
      >
        Don&apos;t have an account? <Text style={styles.linkText}>Sign up</Text>
      </Text>
    </View>
  );
};

// PropTypes validation for navigation prop
LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired, // Ensure navigate function is passed
  }).isRequired,
};

// Custom styles for the screen components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    padding: 20, // Padding around the screen
  },
  title: {
    fontSize: 28, // Font size for the title
    fontWeight: "bold", // Make the title bold
    marginBottom: 20, // Space below the title
    textAlign: "center", // Center-align the title
  },
  input: {
    marginBottom: 15, // Space below each input field
  },
  button: {
    marginTop: 10, // Space above the button
  },
  buttonContent: {
    height: 50, // Adjust button height
  },
  errorText: {
    color: "red", // Red color for error messages
    fontSize: 12, // Smaller font size for error messages
    marginBottom: 10, // Space below the error message
  },
  switchText: {
    marginTop: 15, // Space above the switch text
    textAlign: "center", // Center-align the switch text
    fontSize: 16, // Font size for the switch text
  },
  linkText: {
    color: "#6200EE", // Blue color for the link text
    fontWeight: "bold", // Make the link text bold
  },
});
