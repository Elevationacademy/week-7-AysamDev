/* Write your class below */
class MinStack{
    constructor()
    {
        this.data = []
        this.length = 0
        this.minStack = []
        this.minLength = 0
    }
    getMin()
    {
        if(this.minLength === 0)
        {
            return null
        }
        return this.minStack[this.minLength - 1]
    }
    push(item)
    {
        this.data[this.length++] = item

         if(item < this.minStack[this.minLength - 1] || this.minLength === 0)
        {
            this.minStack[this.minLength++] = item
        }
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
            if(this.minStack[this.minLength - 1] === save)
            {
                delete this.minStack[this.minLength--]
            }
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




/* Do not remove the exports below */
module.exports = MinStack