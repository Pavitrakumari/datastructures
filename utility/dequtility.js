    module.exports = class dequeue {
    constructor() {
        this.value = [];
    }

    isEmpty() {
        return !Boolean(this.value.length);   //returns if the flag is empty or not 
    }

    addFront(value) {
        this.value.unshift(value);         //add the value at the front of the queue
    }

    addRear(value) {                       //adds the value at the end of the queue
        this.value.push(value);
    }

    removeFront() {                       //returns the front element from the queue
        return this.value.shift();
    }

    removeRear() {
        return this.value.pop();          //returns the last element from the queue
    }

    size() {
        return this.value.length;         //returns the size of the queue
    }
}




