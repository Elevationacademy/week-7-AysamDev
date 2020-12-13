const asterisks = function(num)
{
    for(let i = 0;i<num;i++)
    {
        for(let j= 0; j < i + 1; j++)
        {
            console.log("*")
        }
    }
}

asterisks(5)