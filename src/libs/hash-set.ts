import { HashTable } from './hash-table';

class HashSet {
  private data;
  private count;
  constructor() {
    this.data = new HashTable();
    this.count = 0;
  }

  set(key: string) {
    if (this.data.has(key)) return;
    this.data.set(key, true);
    this.count++;
    return;
  }

  get(key: string) {
    return this.data.get(key);
  }

  size() {
    return this.count;
  }

  has(key: string) {
    return !!this.data.get(key);
  }

  values() {
    return this.data.getKeys();
  }
}

const hashSet = new HashSet();
hashSet.set('dhaka');
hashSet.set('dhaka');
console.log(hashSet);
