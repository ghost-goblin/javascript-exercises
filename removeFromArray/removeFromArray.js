const removeFromArray = function(...args) {
    let newArr = [];
    const array = args[0];
    
    array.forEach((item) => {
    if (!args.includes(item)) {
      newArr.push(item);
      };
      });

      return newArr;
};

module.exports = removeFromArray
