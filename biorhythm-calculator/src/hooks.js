import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  // on initial load this sets the value to an empty string
  // or on a reload to whatever is in local storage
  const defaultValue = localStorage.getItem(key) ?? initialValue;
  const [value, setValue] = useState(defaultValue);
  const setAndStoreValue = (newValue) => {
    // This sets the value of the birth date value to be used as state (using closures, like all state)
    setValue(newValue);
    // This sets the local storage so that if the app is reloaded the value will persist
    localStorage.setItem(key, newValue);
  };
  return [value, setAndStoreValue];
}
