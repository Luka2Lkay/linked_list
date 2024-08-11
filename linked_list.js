class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  size() {
    let length = 0;
    let head = this.head;

    while (head) {
      length++;
      head = head.next;
    }
    return length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("The index is out of the range");
    }

    let counter = 0;
    let head = this.head;

    while (head) {
      if (index === counter) {
        return head;
      }

      counter++;

      head = head.next;
    }
  }

  pop() {
    if (!this.head) {
      throw new Error("The list is empty");
    }

    let head = this.head;
    let newTail = head;

    while (head.next) {
      newTail = head;
      head = head.next;
    }

    if (newTail === head) {
      this.head = null;
      this.tail = null;
    } else {
      newTail.next = null;
      this.tail = newTail;
    }

    return head.value;
  }

  contains(value) {
    let head = this.head;
    while (head) {
      if (head.value === value) {
        return true;
      }
      head = head.next;
    }
    return false;
  }

  find(value) {
    let head = this.head;
    let index = 0;

    if (!this.contains(value)) {
      throw new Error("The value doesn't exist");
    }

    while (head) {
      if (head.value === value) {
        return index;
      }

      index++;
      head = head.next;
    }

    return index;
  }

  toString() {
    let head = this.head;
    let str = "";

    while (head) {
      str += `( ${head.value} ) ->`;
      head = head.next;
    }

    return `${str} null`;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    let currentNode = this.head;
    let previousNode = null;
    let count = 0;

    if (index < 0 || index > this.size()) {
      throw new Error("The index is out of range");
    }

    if (index === 0) {
      return this.prepend(value);
    } else if (index === this.size()) {
      return this.append(value);
    }

    while (count < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    previousNode.next = newNode;
    newNode.next = currentNode;
  }

  removeAt(index) {
    let currentNode = this.head;
    let previousNode = null;
    let newNode = currentNode.next;
    let count = 0;

    if (index >= this.size() || index < 0)
      throw new Error("Index out of range");

    while (count < index) {
      previousNode = currentNode;
      currentNode = newNode;
      count++;
    }

    if (index === 0) {
      this.head = newNode;
    } else if (index === this.size() - 1) {
      previousNode.next = null;
      this.tail = previousNode;
    } else {
      previousNode.next = currentNode.next;
    }
  }
}

module.exports = {LinkedList}
