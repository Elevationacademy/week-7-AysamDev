/* Write your class below */

class DuoQueue{
    constructor()
    {
        this.q1 = []
        this.q2 = []
        this.lengthQ1 = 0
        this.lengthQ2 = 0
    }

    enqueue(person, qNum)
    {
        if(qNum === 1)
        {
            this.q1[this.lengthQ1++] = person
        }
        else
        {
            this.q2[this.lengthQ2++] = person
        }
    }
    dequeue()
    {

    }
    dequeue(qNum)
    {
        if(qNum === 1)
        {
            if(isEmpty1())
            {
                return null
            }
            const save = this.q1.splice(0,1)
            this.lengthQ1--
            return save
        }
        else if(qNum === 2)
        {
                if(isEmpty2())
                {
                    return null
                }
                const save = this.q2.splice(0,1)
                this.lengthQ2--
                return save
        }
    }
    
    getLongestQueue()
    {
        if(this.lengthQ1 > this.lengthQ2)
        {
            return this.q1
        }
        else
        {
            return this.q2
        }
    }

    getShortestQueue()
    {
        if(this.lengthQ1 < this.lengthQ2)
        {
            return this.q1
        }
        else
        {
            return this.q2
        }
    }
    balanceQueues()
    {
        if(this.lengthQ1 > this.lengthQ2)
        {
            while(this.lengthQ1 > this.lengthQ2)
            {
                this.enqueue(this.dequeue(1),2)
            }
        }
        else
        {
            while(this.lengthQ2 > this.lengthQ1)
            {
                this.enqueue(this.dequeue(2),1)
            }
        }
    }
}
//You can paste the test code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = DuoQueue