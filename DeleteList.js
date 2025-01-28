// 1 ----->>>>>
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  let a = new Node(1);
  let b = new Node(2);
  let c = new Node(3);
  
  a.next = b;
  b.next = c;
  
  let head = a;
  
  head = head.next;
  
  let current = head;
  let result = [];
  while (current != null) {
    result.push(current.data);
    current = current.next;
  }
  console.log("Linked List after deleting the first node:", result.join(" -> "));
  

  // 2 ----->>>>>
//   class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   let a = new Node(1);
//   let b = new Node(2);
//   let c = new Node(3);
  
//   a.next = b;
//   b.next = c;
  
//   let head = a;
  
//   let current = head;
  
//   while (current.next.next != null) {
//     current = current.next;
//   }
//   current.next = null;
  
//   current = head;
//   let result = [];
//   while (current != null) {
//     result.push(current.data);
//     current = current.next;
//   }
//   console.log("Linked List after deleting the last node:", result.join(" -> "));
  

// 3 ----->>>>>
// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   let a = new Node(1);
//   let b = new Node(2);
//   let c = new Node(3);
//   let d = new Node(4);
  
//   a.next = b;
//   b.next = c;
//   c.next = d;
  
//   let head = a;
  
//   let k = 2;
//   let current = head;
//   let index = 0;
//   let prev = null;
  
//   if (k === 0) {
//     head = head.next;
//   } else {
//     while (current != null && index < k) {
//       prev = current;
//       current = current.next;
//       index++;
//     }
//     if (prev != null && current != null) {
//       prev.next = current.next;
//     }
//   }
  
//   current = head;
//   let result = [];
//   while (current != null) {
//     result.push(current.data);
//     current = current.next;
//   }
//   console.log(`Linked List after deleting the ${k}th node:`, result.join(" -> "));
  