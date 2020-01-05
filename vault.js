"use strict";
module.exports = function() {
  let vaultKey = {};
  let newValue = "";
  return {
    getValue: function(key) {
      if (!key || key !== vaultKey[key]) {
        return null;
      } else {
        return newValue;
      }
    },
    setValue: function(key, value) {
      vaultKey[key] = key;
      newValue = value;
    }
  };
};
