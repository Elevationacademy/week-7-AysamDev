/* Write your class below */
class Queue  {
    constructor()
    {
        this.data = []
        this.length = 0
    }

    enqueue(item)
    {
      this.data[this.length++] = item
    }
    dequeue()
    {
        if(isEmpty())
        {
            return null
        }
        const save = this.data[0]
        this.data.splice(0,1)
        this.length--
        return save
    }
    peek()
    {
        if(isEmpty())
        {
            return null
        }
        return this.data[0]
    }
    isEmpty()
    {
        if(this.length === 0)
        {
            return true
        }
        return false
    }
}


//You can paste the test code from the lesson below to test your solution

let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true


/* Do not remove the exports below */
module.exports = Queue