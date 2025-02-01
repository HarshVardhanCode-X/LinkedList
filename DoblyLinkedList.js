// 1 ----->>>>>
// class Node{
//     constructor(data){
//         this.prev=null
//         this.data=data
//         this.next=null
//     }
// }
// let a=new Node(1)
// let b=new Node(2)
// let c=new Node(3)
// let d=new Node(4)

// a.next=b
// b.prev=a
// b.next=c
// c.prev=b

// let head=a
// d.next=a
// a.prev=d
// head=d
// let current=head
// let res=[]
// while(current!=null){
//     res.push(current.data)
//     current=current.next
// }
// console.log(res)


// 2 ----->>>>>
// class Node{
//     constructor(data){
//         this.prev=null
//         this.data=data
//         this.next=null
//     }
// }
// let a=new Node(1)
// let b=new Node(2)
// let c=new Node(3)
// let d=new Node(4)

// a.next=b
// b.prev=a
// b.next=c
// c.prev=b

// let head=a
// let current=head
// while(current.next!=null){
//     current=current.next
// }
// current.next=d
// d.prev=current

// current=head
// let res=[]
// while(current!=null){
//     res.push(current.data)
//     current=current.next
// }
// console.log(res)


// 3 ----->>>>>
// class Node{
//     constructor(data){
//         this.prev=null
//         this.data=data
//         this.next=null
//     }
// }
// let a=new Node(1)
// let b=new Node(2)
// let c=new Node(3)
// let d=new Node(4)

// a.next=b
// b.next=c

// let head=a
// let index=0
// let position=2
// let prev=null
// let current=head

// while(current!=null && index<position){
//     prev=current
//     current=current.next
//     index++
// }
// if(prev!=null){
//     prev.next=d
// }
// d.next=current

// current=head
// let res=[]
// while(current!=null){
//     res.push(current.data)
//     current=current.next
// }
// console.log(res)
