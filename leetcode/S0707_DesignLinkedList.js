//2020-12-26 对this的理解还是不深，没写对this
/******************** second version 2020/03/07 ************* */
/** 1. 整合了初始化函数
 *  2. 添加 this.length, 省却了繁琐的判断条件；虽然链表没有length，为了方便可以自己记下
 *  3. 最后优化 ：可以不用写 addAtTail/addAtHead, 都调用addAtIndex即可
 *   MyLinkedList.prototype.addAtHead = function(val) {
      this.addAtIndex(0,val);
     }
    MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.length, val);
    };
 *
 */
var MyLinkedList = function() {
  var ListNode = function(val) {
      this.val = val;
      this.next = null;
  };
  this.list = new ListNode(0);
  this.length = 0;
};

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
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

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  var header = this.list;
  var second = header.next;
  header.next = new ListNode(val);
  header.next.next = second;
  this.length++;
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  var tail = new ListNode(val);
  var pointer = this.list;
  while (pointer.next != null) {
      pointer = pointer.next;
  }
  pointer.next = tail;
  this.length++;
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
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

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
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

/** 
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/

/******************  first version  2020/03/06  **********************************/
/**  comments: 1.【边界条件的判断格外注意】。每当出现pointer.next的时候，就要注意pointer是否存在呢
 2.【头节点】的正确处理和使用
* Initialize your data structure here.----这个initialize没想出来
 */

var ListNode = function(val) {
  this.val = val;
  this.next = null;
};

var MyLinkedList = function() {
  this.list = new ListNode(0);
};

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  var pointer = this.list;
  for(var i = 0; i <= index; i++ ) {
      if (pointer !== null) {
          pointer = pointer.next
      }else{
          return -1;
      }
  }
  if  (pointer === null) {
      return -1;
  }
  return pointer.val;
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  var header = this.list;
  var second = header.next;
  header.next = new ListNode(val);
  header.next.next = second;
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  var tail = new ListNode(val);
  var pointer = this.list;
  while (pointer.next != null) {
      pointer = pointer.next;
  }
  pointer.next = tail;
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  var pointer = this.list;
  var addNode = new ListNode(val);
  for (var i = 0; i < index; i++){
      if (pointer !== null) {
          pointer  = pointer.next;
      } else{
          return;
      }
  }
  if (pointer === null) {     //【判断边界】index = length +1时，恰好走完上面循环且pointer==null，但是无法进入循环判断条件
      //console.log("aaaaa");
      return;
  }
  var nextNode = pointer.next;
  pointer.next = addNode;
  addNode.next = nextNode;
  
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  var pointer = this.list;
  for (var i = 0; i < index; i++) {
      if (pointer.next !== null) {
          pointer = pointer.next;
      } else {
          return;
      }
  }
  if (pointer.next == null) {   //【判断边界】因为下方出现了pointer.next.next是否有意义呢
      return;
  }
  pointer.next = pointer.next.next;
};

/** 
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/