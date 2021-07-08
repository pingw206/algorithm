//2020/03/07 | 2020-12-26 | 2021-7-8
//对this的理解还是不深，没写对this
/** 1. 整合了初始化函数
 *  2. 添加 this.length, 省却了繁琐的判断条件；虽然链表没有length，为了方便可以自己记下
 *  3. 最后优化 ：可以不用写 addAtTail/addAtHead, 都调用addAtIndex即可
 *   MyLinkedList.prototype.addAtHead = function(val) {
      this.addAtIndex(0,val);
     }
    MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.length, val);
    };
    4. 两种方法：单链表，双头链表
 *
 */
// 方法一 单链表
var MyLinkedList = function() {
  var ListNode = function(val) {
      this.val = val;
      this.next = null;
  };
  this.list = new ListNode(0);
  this.length = 0;
};

MyLinkedList.prototype.get = function(index) {
  if (index >= this.length ) {
      return -1;
  }
  var pointer = this.list;
  for (var i = 0; i <= index; i++) {
      pointer = pointer.next;
  }
  return pointer.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
  var pointer = this.list;
  var newNode = new ListNode(val);
  newNode.next = this.list.next;
  pointer.next = newNode;
  this.length++;
};

MyLinkedList.prototype.addAtTail = function(val) {
  var tail = new ListNode(val);
  var pointer = this.list;
  while (pointer.next != null) {
      pointer = pointer.next;
  }
  pointer.next = tail;
  this.length++;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.length) {
      return;
  }
  var pointer = this.list;
  var addNode = new ListNode(val);
  for (var i = 0; i < index; i++) {
      pointer = pointer.next; 
  }
  var nextNode = pointer.next;
  pointer.next = addNode;
  addNode.next = nextNode;
  this.length++;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.length) {
      return;
  }
  var pointer = this.list;
  for (var i = 0; i < index; i++) {
      pointer = pointer.next;
  }
  pointer.next = pointer.next.next;
  this.length--;
};

// 方法二 doubly linked list
var MyLinkedList = function() {
    var ListNode = function(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    this.head = new ListNode(0);
    this.tail = new ListNode(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.length = 0;
};

// can be optimized if index > this.size/2
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) {
        return -1;
    }
    var pointer = this.head;
    for (var i = 0; i <= index; i++) {
        pointer = pointer.next;
    }
    return pointer.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0, val);
};

MyLinkedList.prototype.addAtTail = function(val) {
    var newNode = new ListNode(val);
    var prevNode = this.tail.prev;
    
    // prevNode->newNode->tail
    // prevNode<-newNode<-tail
    prevNode.next = newNode;
    newNode.next = this.tail;
    this.tail.prev = newNode;
    newNode.prev = prevNode;

    this.length++;
};

// can be optimized if index > this.size/2
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.length) {
        return;
    }
    var newNode = new ListNode(val);
    var pointer = this.head;
    for (var i = 0; i < index; i++) {
        pointer = pointer.next;
    }
    var nextNode = pointer.next;
    
    // pointer->newNode->nextNode
    // pointer<-newNode<-nextNode
    pointer.next = newNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    newNode.prev = pointer;
    
    this.length++;
};


// can be optimized if index > this.size/2
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.length) {
        return;
    }
    var pointer = this.head;
    for (var i = 0; i < index; i++) {
        pointer = pointer.next;
    }
    var nextNode = pointer.next.next;
    pointer.next = nextNode;
    nextNode.prev = pointer;
    this.length--;
};

