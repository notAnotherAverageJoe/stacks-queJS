class Queue {
    constructor(){
        this.items = []
    }


    enqueue(element) {
        this.items.push(element);
    }


    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty")
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length===0;
    }

    size(){
        return this.items.length;
    }


}

function find_survivor(n, k) {
    // Initialize the queue with people numbered from 1 to n
    const queue = new Queue();
    for (let i = 1; i <= n; i++) {
      queue.enqueue(i);
    }
  
    // Process the queue until only one person remains
    while (queue.size() > 1) {
      // Move the first k-1 people to the end of the queue
      for (let i = 0; i < k - 1; i++) {
        queue.enqueue(queue.dequeue());
      }
      // Remove the k-th person
      queue.dequeue();
    }
  
    // The last remaining person is the survivor
    return queue.dequeue();
  }
  
  console.log(find_survivor(10, 3)); // Output: 4
  console.log(find_survivor(20, 4)); // Output: 17
