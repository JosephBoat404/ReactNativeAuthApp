// utils/validation.js

/**
 * Validates an email address.
 * @param {string} email - The email to validate.
 * @returns {string} - Error message if invalid, otherwise an empty string.
 */
export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email)
      ? ''
      : 'Please enter a valid email address.';
  };
  
  /**
   * Validates a password's minimum length.
   * @param {string} password - The password to validate.
   * @returns {string} - Error message if invalid, otherwise an empty string.
   */
  export const validatePassword = (password) => {
    return password.length >= 6
      ? ''
      : 'Password must be at least 6 characters long.';
  };
  
  /**
   * Checks if passwords match.
   * @param {string} password - The main password.
   * @param {string} confirmPassword - The password to compare.
   * @returns {string} - Error message if mismatched, otherwise an empty string.
   */
  export const validatePasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword
      ? ''
      : 'Passwords do not match.';
  };
  