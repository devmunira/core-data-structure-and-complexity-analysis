export class DynamicArray {
  private array: number[];
  private length: number;

  constructor() {
    this.array = new Array();
    this.length = 0;
  }

  insertAtFirstIndex(element: number) {
    for (let index = this.length; index > 0; index--) {
      this.array[index] = this.array[index - 1];
    }
    this.array[0] = element;
    this.length++;
    return this.array;
  }
}
