/**
 * Initialize your data structure here.
 */
//2020-1-7 时间和空间的衡量，规划出来20000个位置，让map平均分配在这个上面，再超出的就用链表来存。
//如果空间位置少，那么链表就会长，时间就多来。
var MyHashSet = function() {
  this.arr = [];
  this.arr.length = 20000;
  for (let i = 0; i < this.arr.length; i++) {
      this.arr[i] = null;
  }
};

var listNode = function (val) {
  this.val = val;
  this.next = null;
}

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
  if (this.contains(key)) {
      return;
  }
  let index = key % 20000;
  let list = this.arr[index];
  if (list == null) {
      this.arr[index] = new listNode(key);
  } else {
      var node = new listNode(key);
      node.next = list;
      this.arr[index] = node;
  }
};

/** 
* @param {number} key
* @return {void} 
*/
MyHashSet.prototype.remove = function(key) {
  if (!this.contains(key)) {
      return;
  }
  let index = key % 20000;
  let list = this.arr[index];
  if (list.val == key) {
      this.arr[index] = list.next;    
  } else {
      while (list != null && list.next != null) {
          if (list.next.val == key) {
              list.next = list.next.next;
          }
          list = list.next;
      }               
  }
};

/**
* Returns true if this set contains the specified element 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  let index = key % 20000;
  let list = this.arr[index];
  while (list != null) {
      if (list.val == key) {
          return true;
      } else {
          list = list.next;
      }
  }
  return false;
};

/** 
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/