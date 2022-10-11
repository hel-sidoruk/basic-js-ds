const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.firstElement = undefined
    this.lastElement = undefined
    
  }
  push(element) {
    if (this.firstElement) {
      let last = this.lastElement
      this.lastElement = { value: element, prev: last}
    } else {
      this.firstElement = this.lastElement = { value: element, prev: undefined }
    }
  }

  pop() {
    let last = this.lastElement
    if (!last) return undefined
    this.lastElement = last.prev
    return last.value
  }

  peek() {
    return this.lastElement.value
  }
}

module.exports = {
  Stack
};
