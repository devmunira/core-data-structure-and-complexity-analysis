class LinkedNode {
  private node: string;
  private next: LinkedNode | null;

  constructor(data: string) {
    this.node = data;
    this.next = null;
  }

  setNext(newNode: LinkedNode | null) {
    this.next = newNode;
  }

  getData(): string {
    return this.node;
  }

  getNext(): LinkedNode | null {
    return this.next;
  }
}

export class LinkedList {
  private head: LinkedNode | null;
  private tail: LinkedNode | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // At last index add new element // Time: O(1) | Space: O(1)
  append(data: string) {
    const newNode = new LinkedNode(data); // Time: O(1) | Space: O(1)

    if (!this.head) {
      // Time: O(1) | Space: O(0)
      this.head = newNode; // Time: O(1) | Space: O(0)
      this.tail = newNode; // Time: O(1) | Space: O(0)
      this.length++; // Time: O(1) | Space: O(0)
      return;
    }

    this.tail!.setNext(newNode); // Time: O(1) | Space: O(0)
    this.tail = newNode; // Time: O(1) | Space: O(0)
    this.length++; // Time: O(1) | Space: O(0)
    return;
  }

  toArray() {
    if (!this.head) return [];

    const nodes: string[] = [];
    let current: LinkedNode | null = this.head;

    while (current) {
      nodes.push(current.getData());
      current = current.getNext();
    }

    return nodes;
  }
}

const list = new LinkedList();
list.append('munira');
list.append('hasan');
list.append('zubair');
console.log(list.toArray());
