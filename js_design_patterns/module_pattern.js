// Basic stucture

// (function() {
//   // Declare private vars and functions
//
//   return {
//     // Declare public var and functions
//   }
// })();


// STANDARD MODULE PATTERN
const UICtrl = (function() {
  let _text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector("h1");
    element.textContent = _text;
  }

  return {
    callChangeText: function() {
      changeText();

      // console.log(_text);
    }
  }
})();

console.log(UICtrl.callChangeText());

// UICtrl.changeText();  
// can't access outside the scope of the function, Will throw an error


// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let _data = [];

  function add(item) {
    _data.push(item);
    console.log('Item added...');
  }

  function get(id) {
    return _data.find(item => item.id === id)
  }

  return {
    // add: add,
    // get: get,
    add, 
    get,
  }

})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Doe'});
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));

