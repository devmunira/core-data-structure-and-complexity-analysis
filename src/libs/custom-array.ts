import { LinkedList, LinkedNode } from './linked-list';

export class DynamicArray<T> {
  private array: T[];
  private length: number;
  private linkedList: LinkedList<LinkedNode, string>;

  constructor(linkedList: LinkedList<LinkedNode, string>) {
    this.array = new Array();
    this.length = 0;
    this.linkedList = linkedList;
  }

  insertAtFirstIndex(element: T) {
    for (let index = this.length; index > 0; index--) {
      this.array[index] = this.array[index - 1];
    }
    this.array[0] = element;
    this.length++;
    return this.array;
  }

  toLinkedList() {
    if (this.array.length <= 0) throw new Error('Array is empty!');
    let list;
    this.array.forEach((item) => {
      list = this.linkedList.append(item as string);
    });

    return list;
  }
}

const list = new LinkedList<LinkedNode, string>(
  new LinkedNode(),
  (data): data is string => typeof data === 'string',
);
const array = new DynamicArray<string>(list);
array.insertAtFirstIndex('Munira Akter');
array.insertAtFirstIndex('Hasan Bhuiyan');
console.log(array.toLinkedList());
