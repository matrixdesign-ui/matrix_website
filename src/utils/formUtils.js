// Utility functions for form handling and API integration

// Email validation utility
export const validateEmail = (email) => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation utility
export const validatePhone = (phone) => {
  const phoneRegex = /^[+]?[0-9\\s\\-\\(\\)]{10,}$/;
  return phoneRegex.test(phone);
};

// Form submission utility
export const submitForm = async (url, data, options = {}) => {
  const defaultOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, { ...defaultOptions, ...options });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};

// Debounce utility for form inputs
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Format form data utility
export const formatFormData = (data) => {
  const formatted = {};
  
  Object.keys(data).forEach(key => {
    if (typeof data[key] === 'string') {
      formatted[key] = data[key].trim();
    } else {
      formatted[key] = data[key];
    }
  });
  
  return formatted;
};

// Local storage utilities
export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

// Error message formatting
export const formatErrorMessage = (error) => {
  if (typeof error === 'string') {
    return error;
  }
  
  if (error.message) {
    return error.message;
  }
  
  return 'An unexpected error occurred. Please try again.';
};

export default {
  validateEmail,
  validatePhone,
  submitForm,
  debounce,
  formatFormData,
  saveToLocalStorage,
  getFromLocalStorage,
  formatErrorMessage
};