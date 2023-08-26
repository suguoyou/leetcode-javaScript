function printList() {
  var strList;
  var queue = new Array;
  
  queue.push("string1");
  queue.push("zzz");
  queue.push("another string");
  queue.push("zzz");
  queue.push("JavaScript");    
  
  queue.reverse();
  queue.pop();
  queue.reverse();
  queue.pop();
  queue.sort();
  for (var i = 0; i < queue.length; i++) {
     if (i != queue.length - 1)
       console.log(queue[i] + ",");
     else
       console.log(queue[i]);
  }
}