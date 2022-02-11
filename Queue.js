export class Queue{
    constructor(){
        this.items = {};
        this.first = 0;
        this.last = 0;
    }

    enqueue(data){
        this.items[this.last] = data;
        this.last ++
    }

    dequeue(){
        if(this.front == this.last) return null
        delete this.items[this.first];
        this.first++
    }

    print(){
        return this.items;
    }
}