    module.exports = class dequeue {
    constructor() {
        this.value = [];
    }

    isEmpty() {
        return !Boolean(this.value.length);
    }

    addFront(value) {
        this.value.unshift(value);
    }

    addRear(value) {
        this.value.push(value);
    }

    removeFront() {
        return this.value.shift();
    }

    removeRear() {
        return this.value.pop();
    }

    size() {
        return this.value.length;
    }
}




