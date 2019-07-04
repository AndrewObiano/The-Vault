'use strict';
module.exports = function() {
    let vaultKey = '';
    let newValue = '';
    return{
        getValue: function(key){
            if(!key || key !== vaultKey){
                return null;
            }else{
                return newValue;
            }
        },
        setValue: function(key, value){
            vaultKey = key;
            newValue = value;
        }
    }

};