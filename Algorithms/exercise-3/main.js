const asterisks = function(num)
{
    for(let i = 0;i<num;i++)
    {
        if(num - 1 != i)
        {
            for(let j = 0; j < i + 1; j++)
            {
               
                    console.log("*")
                
            }
            console.log('\n')
        }
    }
}

const reverseAsterisks = function(num)
{
    for(let i = 0;i<num;i++)
    {
        for(let j= num - i; j > 0; j--)
        {
            console.log("*")
        }
        console.log("\n")
    }
}

const printStarSeries = function(num,count)
{
    for(let i = 0;i<count;i++)
    {
        asterisks(num)
        reverseAsterisks(num)
    }
}
printStarSeries(5, 3)