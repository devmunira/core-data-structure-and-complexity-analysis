# Part 1: Algorithm Complexity Analysis (30 Points)

Analyze the time and space complexity for each of the following algorithms. For every algorithm:

- Provide input-output mapping.
- Give step-by-step cost breakdown.
- Determine final asymptotic complexities (time and space).
- Suggest optimizations, if any.

## Algorithms:

- Insert at the beginning of a dynamic array.
  ![Code-Screenshot](../public/images/insert-at-first-element-of-array.webp)
  [Code](../libs/custom-array.ts)

  - **Provide input-output mapping:**
    - **Input:**
      - For functional programming: Provide an array and the element to be added.
      - For class-based programming: Invoke the method and pass the element to be inserted.
  - **Give step-by-step cost breakdown:**
    - To insert at the first index, space must be created by shifting all elements to the right.
    - This requires traversing the array from right to left.
    - The operation takes **O(n)** time.
    - Memory overhead is minimal, with **O(1)** space complexity.
  - **Determine final asymptotic complexities (time and space):**
    - **Time Complexity:** O(n)
    - **Space Complexity:** O(1)
  - **Suggest optimizations, if any:**
    - For faster insertions at the beginning, a **Linked List** can be used.
    - Inserting at the head of a linked list takes **O(1)** time.

- Insert at the end of a linked list.

  ```

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
  ```

  [Code](../libs/linked-list.ts)

  - **Provide input-output mapping:**
  - **Input:**
    - For functional programming: Provide an linked list and the element to be added.
    - For class-based programming: Invoke the method and pass the element to be inserted.
  - **Give step-by-step cost breakdown:**
    - To insert at the last index, for doubly linked list we can simply add at tail which is 0(1).
    - The operation takes **O(1)** time.
    - Memory overhead is minimal, with **O(1)** space complexity.
  - **Determine final asymptotic complexities (time and space):**
    - **Time Complexity:** O(1)
    - **Space Complexity:** O(1)
  - **Suggest optimizations, if any:**
    - For faster insertions at the end, a **Doubly Linked List** can be used not recommended to use singly linked list.

- Search for an element in a hash set.

  ```
  private findByKey(key: string) {
    if (this.length == 0) return null;
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) return bucket.find(key);
    return null;
  }


  ```

  [Code](../libs/hash-set.ts)

  - **Provide input-output mapping:**
  - **Input:**
    - Provide an key that will be the search key.
  - **Give step-by-step cost breakdown:**
    - To search in Hash Set, In best case if key exists on head of bucket then **O(1)** but in middle or tails then avg and worst case will be **O(n)** as we need to iterate all the linked list bucket.
    - The operation takes **O(n)** worst time.
    - Memory overhead is minimal, with **O(1)** space complexity.
  - **Determine final asymptotic complexities (time and space):**
    - **Time Complexity:** O(n)
    - **Space Complexity:** O(1)
  - **Suggest optimizations, if any:**
    - For faster insertions at the end, a **Doubly Linked List** can be used not recommended to use singly linked list.

- Rehash a hash table after crossing load factor.
- Delete a node from a singly linked list by value.

  ```
  removeByValue(value) {
    if (!this.head) return null;

    if (this.head.data === value) {
      const removedNode = this.head;
      this.head = this.head.next;
      if (this.size === 1) this.tail = null;
      this.size--;
      return removedNode.data;
    }

    let current = this.head;
    let prev = null;

    while (current) {
      if (current.data === value) {
        prev.next = current.next;
        if (!current.next) this.tail = prev;
        this.size--;
        return current.data;
      }
      prev = current;
      current = current.next;
    }

    return null;
  }
  ```

  - **Provide input-output mapping:**
  - **Input:**
    - Provide an value that will be the search key for delete list item.
  - **Give step-by-step cost breakdown:**
    - To delete from a singly linked list if value is in the head item then it will be **O(1)** time complexity but if not in head we have to traverse to **n** times which is linear time complexity.
    - The operation takes **O(n)** worst time.
    - Memory overhead is minimal, with **O(1)** space complexity.
  - **Determine final asymptotic complexities (time and space):**
    - **Time Complexity:** O(n)
    - **Space Complexity:** O(1)
  - **Suggest optimizations, if any:**
    - For faster delete operation from linked-list we can implement Hash Set or only key data or we can implement hash table for key value data structure which will be most cost effective in this scenario because hash set and hash table behind the sense use linked list as data storage.

- Check if an array contains all unique values.

  ```
  checkIsUniqueValue() {
    if (this.length == 0) return false;

    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          return false;
        }
      }
    }
    return true;
  }
  ```

  - **Provide input-output mapping:**
  - **Input:**
    - For functional programming: Provide an array that will check is this array unique or not.
    - For class-based programming: Invoke the method it will automatically check of this object instance array.
  - **Give step-by-step cost breakdown:**
    - To check whether a array is unique or not we have iterate twice to check every element which is **O(n2)**.
    - The operation takes **O(n2)** time.
    - Memory overhead is minimal, with **O(0)** space complexity.
  - **Determine final asymptotic complexities (time and space):**
    - **Time Complexity:** O(n2)
    - **Space Complexity:** O(0)
  - **Suggest optimizations, if any:**
    - For faster check we can implement hash set, with the help of hash set we just need to traverse one time and check value within **has** method which is **O(1)** time complexity.

- Count common elements in two hash sets.

  ```
  //Get common element from hash set time complexity: O(n)
  commonElement(set) {
    const result = [];
    for (const value of this.data.values()) {
      if (set.has(value)) result.push(value);
    }
    return result;
  }


  //Get values from hash table time complexity: O(m+n) => O(n)
  values() {
    const values = [];
    for (const list of this.table) { // O(m)
      if (list) {
        for (let [_, value] of list.entries()) { O(n)
          values.push(value);
        }
      }
    }
    return values;
  }

  //Hash Set O(n) and Hash Table O(n) => O(n)

  ```

  - **Provide input-output mapping:**
  - **Input:**
    - For functional programming: Provide two hash set as parameters.
    - For class-based programming: Invoke the method it will automatically check of this object instance set and need to send another set as parameters.
  - **Output:**
    - return a array or set which contains common element.
  - **Give step-by-step cost breakdown:**
    - To get common element from 2 hash set, first of all we need to iterate through one set which is **O(n)** then check second set with the help of **has** method which is **O(1)**.
    - The operation takes **O(n)** time.
    - Memory overhead is minimal, with **O(1)** space complexity.
  - **Determine final asymptotic complexities (time and space):**
    - **Time Complexity:** O(n)
    - **Space Complexity:** O(1)
  - **Suggest optimizations, if any:**
    - we can check set size then traverse through smaller size set and check has function in large size set.

- Convert an array into a linked list.
- Clone a hash table with chaining.
- Compare array vs. hash set lookup performance.
