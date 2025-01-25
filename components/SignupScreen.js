import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, Title } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext'; // Importing AuthContext for user authentication

export const SignupScreen = ({ navigation }) => {
  // State hooks to manage form data and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const { signup } = useContext(AuthContext); // Destructure signup function from AuthContext

  // Validate the email format
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError(''); // Clear error if email is valid
    }
  };

  // Validate the password length
  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError(''); // Clear error if password is long enough
    }
  };

  // Check if password and confirm password match
  const validatePasswordMatch = (confirmPassword) => {
    if (confirmPassword !== password) {
      setPasswordMatchError('Passwords do not match.');
    } else {
      setPasswordMatchError(''); // Clear error if passwords match
    }
  };

  // Handle the signup functionality
  const handleSignup = () => {
    // Check if all fields are filled in
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // If there are no errors, proceed with signup
    if (!emailError && !passwordError && !passwordMatchError) {
      signup(email, password); // Call signup function from context
      Alert.alert('Success', 'Account created successfully!'); // Show success alert
      navigation.navigate('Login'); // Navigate to Login screen after successful signup
    } else {
      // If there are errors, show an alert to fix the issues
      Alert.alert('Error', 'Please fix the errors before submitting.');
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Signup</Title> {/* Display the title of the screen */}
      
      {/* Email input field */}
      <TextInput
        mode="outlined" // Outlined style for the input
        label="Email" // Label for the input
        value={email} // Bind email state to the value
        onChangeText={(text) => {
          setEmail(text); // Update email state as user types
          validateEmail(text); // Validate email and set error if invalid
        }}
        error={!!emailError} // Show error state if there is an email error
        keyboardType="email-address" // Set keyboard type for email input
        autoCapitalize="none" // Prevent automatic capitalization for email
        style={styles.input} // Apply custom styles
      />
      
      {/* Show email error message if there is an error */}
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      
      {/* Password input field */}
      <TextInput
        mode="outlined"
        label="Password"
        value={password} // Bind password state to the value
        onChangeText={(text) => {
          setPassword(text); // Update password state as user types
          validatePassword(text); // Validate password and set error if invalid
        }}
        secureTextEntry // Secure input for password
        error={!!passwordError} // Show error state if there is a password error
        style={styles.input} // Apply custom styles
      />
      
      {/* Show password error message if there is an error */}
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      {/* Confirm password input field */}
      <TextInput
        mode="outlined"
        label="Confirm Password"
        value={confirmPassword} // Bind confirm password state to the value
        onChangeText={(text) => {
          setConfirmPassword(text); // Update confirm password state as user types
          validatePasswordMatch(text); // Validate if passwords match
        }}
        secureTextEntry // Secure input for confirm password
        error={!!passwordMatchError} // Show error state if passwords do not match
        style={styles.input} // Apply custom styles
      />
      
      {/* Show confirm password match error if there is an error */}
      {passwordMatchError ? (
        <Text style={styles.errorText}>{passwordMatchError}</Text>
      ) : null}
      
      {/* Signup button */}
      <Button
        mode="contained" // Button with a filled background
        onPress={handleSignup} // Trigger signup function when pressed
        style={styles.button} // Apply custom styles
        contentStyle={styles.buttonContent} // Adjust button content size
      >
        Signup
      </Button>
      
      {/* Navigation to Login screen if the user already has an account */}
      <Text
        style={styles.switchText}
        onPress={() => navigation.navigate('Login')} // Navigate to Login screen
      >
        Already have an account?{' '}
        <Text style={styles.linkText}>Login</Text>
      </Text>
    </View>
  );
};

// Custom styles for the screen components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    padding: 20, // Padding around the screen
  },
  title: {
    fontSize: 28, // Font size for the title
    fontWeight: 'bold', // Make the title bold
    marginBottom: 20, // Space below the title
    textAlign: 'center', // Center-align the title
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
    color: 'red', // Red color for error messages
    fontSize: 12, // Smaller font size for error messages
    marginBottom: 10, // Space below the error message
  },
  switchText: {
    marginTop: 15, // Space above the switch text
    textAlign: 'center', // Center-align the switch text
    fontSize: 16, // Font size for the switch text
  },
  linkText: {
    color: '#6200EE', // Blue color for the link text
    fontWeight: 'bold', // Make the link text bold
  },
});
