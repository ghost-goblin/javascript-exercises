const caesar = function(str, key) {
    const arr = str.split('');
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let x = str.charCodeAt(i);
      // Check for lower case letters
      if (x >= 97 && x <= 122) {
        newArr.push(((x - 97 + key) % 26 + 26) % 26 + 97);
        // Check for upper case letters
      } else if (x >= 65 && x <= 90) {
        newArr.push(((x - 65 + key) % 26 + 26) % 26 + 65);
      } else newArr.push(x);
    };
    console.log(newArr);
  
    // Convert back to characters ...
    const strArr = [];
    for (let i = 0; i < newArr.length; i++) {
      strArr.push(String.fromCharCode(newArr[i]));
    };
    return strArr.join('');
};

module.exports = caesar
