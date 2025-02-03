// 1 ----->>>>>
class Node{
    constructor(data){
        this.prev=data
        this.data=data
        this.next=null
    }
}
let a=new Node(1)
let b=new Node(2)
let c=new Node(3)
let d=new Node(4)
a.next=b
b.prev=c
b.next=c
c.prev=b
c.next=d
d.prev=c
let head=a
head=head.next
let current=head
while(current!=null){
    console.log(current.data)
    current=current.next
}

// 2 ----->>>>>
// class Node{
//     constructor(data){
//         this.prev=data
//         this.data=data
//         this.next=null
//     }
// }
// let a=new Node(1)
// let b=new Node(2)
// let c=new Node(3)
// let d=new Node(4)
// a.next=b
// b.prev=c
// b.next=c
// c.prev=b
// c.next=d
// d.prev=c
// let head=a
// let current=head
// while(current.next.next!=null){
//     current=current.next
// }
// current.next=null
// current=head
// while(current!=null){
//     console.log(current.data)
//     current=current.next
// }

// 3 ----->>>>>
// class Node{
//     constructor(data){
//         this.prev=data
//         this.data=data
//         this.next=null
//     }
// }
// let a=new Node(1)
// let b=new Node(2)
// let c=new Node(3)
// let d=new Node(4)
// a.next=b
// b.prev=c
// b.next=c
// c.prev=b
// c.next=d
// d.prev=c
// let head=a
// let index=0
// let prev=null
// let position=2
// let current=head
// if(position===0){
//     head=head.next
// }else{
//     while(current!=null && index<position){
//         prev=current
//         current=current.next
//         index++
//     }
//     if(prev!=null && current!=null){
//         prev.next=current.next
//     }
// }
// current=head
// while(current!=null){
//     console.log(current.data)
//     current=current.next
// }