/* Write your class below */
class Stack{
    constructor()
    {
        this.data = []
        this.length = 0
    }

    push(item)
    {
        this.data[this.length++] = item
    }
    isEmpty()
    {
        if(this.length === 0)
        {
            return true
        }
        return false
    }
    pop()
    {
        if(!isEmpty())
        {
            const save = this.data[this.length--]
            delete this.data[this.length]
            return save
        }
        return null
   
    }
    peek()
    {
        if(!this.isEmpty())
            return this.data[this.length - 1]
        return null
    }
}

//You can paste the test code from the lesson below to test your solution
let myStack = new Stack()
console.log(myStack.isEmpty())    //true
myStack.print()                    //[]
myStack.push(2)      
console.log(myStack.isEmpty())     //false
myStack.push(4)      
myStack.print()                    //[2,4]
console.log(myStack.peek())        //4
myStack.pop()
myStack.pop()
console.log(myStack.peek())       //null
console.log(myStack.isEmpty())    //true




/* Do not remove the exports below */
module.exports = Stack