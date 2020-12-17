class MultiQueue {
    constructor(numOfQueues)
    {
        this.queues = []
        for(let i = 0;i<numOfQueues;i++)
        {
            this.queue = []
            this.queues.push(this.queue)
        }
    }
}