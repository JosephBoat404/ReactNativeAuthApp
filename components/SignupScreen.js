import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, Title } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';

export const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const { signup } = useContext(AuthContext);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const validatePasswordMatch = (confirmPassword) => {
    if (confirmPassword !== password) {
      setPasswordMatchError('Passwords do not match.');
    } else {
      setPasswordMatchError('');
    }
  };

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (!emailError && !passwordError && !passwordMatchError) {
      signup(email, password);
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Login');
    } else {
      Alert.alert('Error', 'Please fix the errors before submitting.');
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Signup</Title>
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          validateEmail(text);
        }}
        error={!!emailError}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          validatePassword(text);
        }}
        secureTextEntry
        error={!!passwordError}
        style={styles.input}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <TextInput
        mode="outlined"
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => {
          setConfirmPassword(text);
          validatePasswordMatch(text);
        }}
        secureTextEntry
        error={!!passwordMatchError}
        style={styles.input}
      />
      {passwordMatchError ? (
        <Text style={styles.errorText}>{passwordMatchError}</Text>
      ) : null}
      <Button
        mode="contained"
        onPress={handleSignup}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        Signup
      </Button>
      <Text
        style={styles.switchText}
        onPress={() => navigation.navigate('Login')}
      >
        Already have an account?{' '}
        <Text style={styles.linkText}>Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  switchText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16,
  },
  linkText: {
    color: '#6200EE',
    fontWeight: 'bold',
  },
});
