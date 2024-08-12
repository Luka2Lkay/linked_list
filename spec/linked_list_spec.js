const { LinkedList } = require("../linked_list");

describe("LinkedList", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  it("should add a new node at the end when the append(value) method is called", () => {
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);

    list.append("dog");

    expect(list.head.value).toBe("dog");
    expect(list.head.next).toBe(null);
    expect(list.tail.value).toBe("dog");

    list.append("cat");

    expect(list.head.value).toBe("dog");
    expect(list.head.next.value).toBe("cat");
    expect(list.tail.value).toBe("cat");
  });

  it("should add a new node at the beginning when the prepend(value) method is called", () => {
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);

    list.prepend("dog");

    expect(list.head.value).toBe("dog");
    expect(list.head.next).toBe(null);
    expect(list.tail.value).toBe("dog");

    list.prepend("cat");

    expect(list.head.value).toBe("cat");
    expect(list.head.next.value).toBe("dog");
    expect(list.tail.value).toBe("dog");
  });

  it("should return the total number of nodes when the size() method is called", () => {
    expect(list.size()).toBe(0);

    list.append("parrot");

    expect(list.size()).toBe(1);

    list.append("hamster");

    expect(list.size()).toBe(2);
  });

  it("should return the first node in the list when the getHead() method is called", () => {
    expect(list.getHead()).toBe(null);

    list.append("snake");
    list.append("turtle");

    expect(list.getHead().value).toBe("snake");
  });

  it("should return the last node in the list when the getTail() method is called", () => {
    expect(list.getTail()).toBe(null);

    list.append("snake");
    list.append("turtle");

    expect(list.getTail().value).toBe("turtle");
  });

  it("should return the node at a given index when the at(index) method is called", () => {
    list.append("snake");
    list.append("turtle");
    expect(list.at(1).value).toBe("turtle");
  });

  it("should throw an error when the index is out of range", () => {
    list.append("snake");
    list.append("turtle");
    expect(() => list.at(2)).toThrowError("The index is out of range");
  });

  it("should remove the last element from the list when the list.pop() method is called", () => {
    list.append("parrot");
    list.append("hamster");

    expect(list.size()).toBe(2);
    expect(list.getTail().value).toBe("hamster");

    list.pop();

    expect(list.size()).toBe(1);
    expect(list.getTail().value).toBe("parrot");
  });

  it("should throw an error when you remove the last element while the list is empty", () => {
    expect(() => list.pop()).toThrowError("The list is empty");
  });

  it("should return true if the passed in value exists in the list and otherwise return false", () => {
    list.prepend("snake");
    list.prepend("turtle");

    expect(list.contains("snake")).toBe(true);
    expect(list.contains("lion")).toBe(false);
  });

  it("should return the index of the node containing value, or null if not found.", () => {
    list.append("parrot");
    list.append("hamster");

    expect(list.find("hamster")).toBe(1);
    expect(list.find("parrot")).toBe(0);
  });

  it("should return the format The format should be: ( value ) -> ( value ) -> ( value ) -> null when the toString() method is called", () => {
    list.append("parrot");
    list.append("hamster");

    expect(list.toString()).toBe("( parrot ) ->( hamster ) -> null");
  });

  it("should that inserts a new node with the provided value at the given index when the insertAt(value, index) method is called.", () => {
    list.append("snake");
    list.append("turtle");

    expect(list.at(1).value).toBe("turtle");

    list.insertAt("parrot", 1);

    expect(list.at(1).value).toBe("parrot");
  });

  it("should remove the node at the given index when the removeAt(index) method is called", () => {
    list.prepend("parrot");
    list.prepend("hamster");

    expect(list.at(1).value).toBe("parrot");

    list.removeAt(1);

    expect(() => list.at(1).value).toThrowError("The index is out of range");
  });
});
