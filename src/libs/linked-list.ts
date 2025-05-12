import { isIHashNode } from '../utils/linked-list';
import { IHashNode, INode } from './interfaces/linked-list-interface';

export class LinkedNode implements INode<LinkedNode, string> {
  private node: string = '';
  private next: LinkedNode | null = null;

  setNode(data: string): this {
    this.node = data;
    return this;
  }

  setNext(newNode: LinkedNode) {
    this.next = newNode;
  }

  getData(): string {
    return this.node;
  }

  getNext(): LinkedNode {
    return this.next!;
  }
}

export class HashNode implements INode<HashNode, IHashNode> {
  private key: string = '';
  private value: number | boolean = true;
  private next: HashNode | null = null;

  setNode(data: IHashNode): this {
    this.key = data.key;
    this.value = data.value;
    return this;
  }

  setNext(newNode: HashNode) {
    this.next = newNode;
  }

  getData(): IHashNode {
    return {
      key: this.key,
      value: this.value,
    };
  }

  getNext(): HashNode {
    return this.next!;
  }
}

export class LinkedList<T extends INode<T, D>, D extends string | IHashNode> {
  private head: T | null;
  private tail: T | null;
  private length: number;
  private node: INode<T, D>;
  private validator: (data: D) => boolean;

  constructor(node: INode<T, D>, validator: (data: D) => boolean) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.node = node;
    this.validator = validator;
  }

  private checkType(type: T) {}

  // At last index add new element // Time: O(1) | Space: O(1)
  append(data: D) {
    if (!this.validator(data)) {
      throw new Error('Invalid data type');
    }

    let newNode = Object.create(Object.getPrototypeOf(this.node)); // Time: O(1) | Space: O(1)
    newNode = newNode.setNode(data);

    if (!this.head) {
      // Time: O(1) | Space: O(0)
      this.head = newNode; // Time: O(1) | Space: O(0)
      this.tail = newNode; // Time: O(1) | Space: O(0)
      this.length++; // Time: O(1) | Space: O(0)
      return this;
    }

    this.tail!.setNext(newNode); // Time: O(1) | Space: O(0)
    this.tail = newNode; // Time: O(1) | Space: O(0)
    this.length++; // Time: O(1) | Space: O(0)
    return this;
  }

  find(key: string) {
    // Time Complexity
    if (this.length == 0) return null;
    let current = this.head;
    while (current) {
      const data = current.getData();
      if (isIHashNode(data) && data.key === key) {
        return current;
      } else if (
        !isIHashNode(data) &&
        typeof data === 'string' &&
        data === key
      ) {
        return current;
      } else {
        current = current.getNext();
      }
    }
    return null;
  }

  toArray(): D[] {
    if (!this.head) return [];

    const nodes: D[] = [];
    let current: T | null = this.head;

    while (current) {
      nodes.push(current.getData() as D);
      current = current.getNext();
    }
    return nodes;
  }

  *entries() {
    let current = this.head;
    while (current) {
      const data = current.getData();
      if (isIHashNode(data)) {
        yield [data.key, data.value];
      } else if (!isIHashNode(data) && typeof data === 'string') {
        yield [data, true];
      }

      current = current.getNext();
    }
  }
}

const list = new LinkedList<LinkedNode, string>(
  new LinkedNode(),
  (data): data is string => typeof data === 'string',
);

const hashList = new LinkedList<HashNode, IHashNode>(
  new HashNode(),
  (data): data is IHashNode => isIHashNode(data),
);

list.append('munira');
list.append('hasan');
list.append('zubair');
hashList.append({ key: 'name', value: true });
hashList.append({ key: 'age', value: 10 });
console.log(list.toArray(), hashList.toArray());
