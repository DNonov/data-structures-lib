/**
 * Dictionary function constructor.
 * 
 * @example const Dictionary = require('dstructures').Dictionary;
 * const myDictionary = new Dictionary();
 * @description In computer science, an associative array, map, symbol table, or 
 * dictionary is an abstract data type composed of a collection of (key, value) pairs, 
 * such that each possible key appears at most once in the collection. Full wikipedia article at:
 * {@link https://en.wikipedia.org/wiki/Associative_array}
 * @public
 * @constructor
 */
function Dictionary() {
  this._conatiner = [];

//TODO: Have to check for existing key as the given before adding.
  /**
   * Adds key value pair in a dictionary.
   * 
   * @param {any} key The given key.
   * @param {any} value The given value.
   * @example Dictionary.add('dog', 1); // ['dog': 1]
   * Dictionary.add('dog', 2); // ['dog': 2]
   * Dictionary.add('cat', 1); // ['dog': 2, 'cat': 1]
   */
  this.add = function (key, value) {
    this._conatiner[key] = value;
  }

  /**
   * Returns the value for the given key.
   * 
   * @param {any} key The given key.
   * @returns Returns the value for the given key. 
   * @example Dictionary.add('dog', 1); // ['dog': 1]
   * Dictionary.find('dog'); // 1
   * Dictionary.add('cat', 3); // ['dog': 1, 'cat': 3]
   * Dictionary.find('cat'); // 3
   */
  this.find = function (key) {
    return this._conatiner[key];
  }

  /**
   * Removes the value associated to the given key.
   * 
   * @param {any} key The given key.
   * @example Dictionary.add('dog', 2); // ['dog': 2]
   * Dictionary.add('cat', 1); // ['dog': 2, 'cat': 1]
   * Dictionary.remove('dog'); // [cat: 1]
   */
  this.remove = function (key) {
    delete this._conatiner[key];
  }

  /**
   * Returns the underlying array.
   * 
   * @returns Returns the underlying array.
   * @example Dictionary.add('dog', 2); // ['dog': 2]
   * Dictionary.add('cat', 1); // ['dog': 2, 'cat': 1]
   * Dictionary.display(); // ['dog': 2, 'cat': 1]
   */
  this.display = function () {
    return this._conatiner;
  }

  /**
   * Counts all key value pairs.
   * 
   * @returns The number of all key value pairs.
   * @example Dictionary.display(); // ['dog': 2, 'cat': 1]
   * Dictionary.count(); // 2
   * Dictionary.display(); // ['dog': 2, 'cat': 1, 'pig': 4]
   * Dictionary.count(); // 3
   */
  this.count = function () {
    let number = 0;
    for (const key in Object.keys(this._conatiner)) {
      number++;
    }
    return number;
  }

  /**
   * Deletes all key value pairs.
   * 
   * @example Dictionary.display(); // ['dog': 2, 'cat': 1]
   * Dictionary.clear(); // []
   * 
   */
  this.clear = function () {
    this._conatiner = [];
  }
}
module.exports = Dictionary;