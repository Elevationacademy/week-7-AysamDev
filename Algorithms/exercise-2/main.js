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

reverseAsterisks(5)