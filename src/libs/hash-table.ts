import { HashNode, LinkedList } from './linked-list';
import { IHashNode } from './interfaces/linked-list-interface';
import { isIHashNode } from '../utils/linked-list';

export class HashTable {
  private keys: Set<string>;
  private size: number;
  private length: number;
  private table: LinkedList<HashNode, IHashNode>[];

  constructor(size = 10) {
    this.size = size;
    this.table = new Array(this.size);
    this.keys = new Set();
    this.length = 0;
  }

  // Better hash function
  private hash(key: string, size = this.size) {
    let hash = 5381;
    for (let ch of key) {
      hash = (hash * 33) ^ ch.charCodeAt(0);
    }
    return Math.abs(hash) % size;
  }

  private resize() {
    let newSize;
    if (this.length / this.size > 0.75) {
      newSize = this.size * 2;
    }

    if (newSize) {
      const oldTable = this.table;
      this.size = newSize;
      this.length = 0;
      this.table = new Array(newSize);

      for (const list of oldTable) {
        if (list) {
          for (const [key, value] of list.entries()) {
            this.set(key as string, value as number | boolean);
          }
        }
      }
    }
    return false;
  }

  private findByKey(key: string) {
    if (this.length == 0) return null;
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) return bucket.find(key);
    return null;
  }

  get(key: string) {
    return this.findByKey(key);
  }

  set(key: string, value: number | boolean) {
    this.resize();

    const index = this.hash(key);
    if (!this.table[index])
      this.table[index] = new LinkedList<HashNode, IHashNode>(
        new HashNode(),
        (data): data is IHashNode => isIHashNode(data),
      );

    let bucket = this.table[index];
    let existing = bucket.find(key);
    if (!existing) {
      this.length++;
      this.keys.add(key);
    }
    bucket.append({ key, value });
  }

  remove() {}

  clear() {
    this.size = 10;
    this.table = new Array(this.size);
    this.length = 0;
    this.keys = new Set();
  }

  has(key: string) {
    return !!this.findByKey(key);
  }

  getKeys() {
    return Array.from(this.keys);
  }

  values() {
    const values = [];
    for (const list of this.table) {
      if (list) {
        for (let [_, value] of list.entries()) {
          values.push(value);
        }
      }
    }
    return values;
  }

  entries() {
    const all = [];
    for (let bucket of this.table) {
      if (bucket) {
        for (let entry of bucket.entries()) {
          all.push(entry);
        }
      }
    }
    return all;
  }

  clone() {
    // Time O(m+n) = O(n)
    const newHashTable = new HashTable();
    if (this.length === 0) return newHashTable;

    this.table.forEach((bucket, index) => {
      // Time: O(n)
      const newList = new LinkedList<HashNode, IHashNode>(
        new HashNode(),
        (data): data is IHashNode => isIHashNode(data),
      );

      if (bucket) {
        for (const [key, value] of bucket.entries()) {
          // Time O(m)
          newList.append({ key, value } as IHashNode);
        }
      }
      newHashTable.table[index] = newList;
    });
  }
}

const hasTable = new HashTable();
hasTable.set('name', true);
hasTable.set('age', true);
hasTable.set('age2', true);
hasTable.set('age3', true);
hasTable.set('age4', true);
hasTable.set('age5', true);
hasTable.set('age6', true);
hasTable.set('age7', true);
console.log(hasTable);
