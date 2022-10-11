const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null
    this.last = null
  }
  getUnderlyingList() {
    return this.first
  }

  enqueue(value) {
    let newElement = new ListNode(value)
    if (this.last) {
      let lastElement = this.last
      this.last = newElement
      lastElement.next = newElement
    } else {
      this.first = this.last = newElement
    }
  }

  dequeue() {
    let firstElement = this.first
    this.first = firstElement.next
    return firstElement.value
  }
}

module.exports = {
  Queue
};
