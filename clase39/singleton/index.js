const Singleton = require("./singletonclass");

const obj = Singleton.getInstance();
const obj2 = Singleton.getInstance();

obj.printValue();
obj2.printValue();

console.log('Equals:: ', obj === obj2);