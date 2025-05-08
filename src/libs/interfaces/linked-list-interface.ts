export interface INode<T, D> {
  setNext(node: T): void;
  getData(): D;
  getNext(): T;
  setNode(data: D): this;
}

export interface IHashNode {
  key: string;
  value: number | boolean;
}
