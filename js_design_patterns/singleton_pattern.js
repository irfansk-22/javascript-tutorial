const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: 'Brad'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();

console.log(instanceA);

/**
 * Singleton pattern, which is actually a manifestation of the module pattern. 
 * A Singleton object is an immediate anonymous function, and it can only return one instance of 
 * an object at a time. So repeated calls to the constructor will just return the same instance. 
 * And like the module pattern, it maintains a private reference, which nothing from the 
 * outside can access.
 */