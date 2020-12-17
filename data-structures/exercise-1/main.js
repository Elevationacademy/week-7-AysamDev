class UniqueArray{
    constructor()
    {
        this.length = 0
    }

    add(item)
    {
        if(!this.exists(item))
        {
            if(typeof item === Object)
            {
                console.log(item)
            }
            else
            {
                this[this.length] = item
                this.length++
            }
            
        }
    }
    showAll()
    {
        let str = '['
        for(let i = 0;i<this.length;i++)
        {
            if(i === this.length - 1)
            {
                str += `${this[i]}]`
            }
            else
            {
                str += `${this[i]},`
            }
        }
        console.log(str)
    }
    exists(item)
    {
        if(this[this.length - 1] === item)
        {
            return true
        }
            return false
    }
    get(index)
    {
        return this[index]
    }
}


const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
const deff = {
    name: "aysam"
}

uniqueStuff.add(deff)
console.log(uniqueStuff.exists(deff))
uniqueStuff.showAll()