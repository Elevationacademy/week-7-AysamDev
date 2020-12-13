
const findDuplicates = function(arr) {
    let numbers = {}
    for(let i = 0; i<arr.length;i++)
    {
        if(!numbers[arr[i]])
        {
            numbers[arr[i]] = 1
        }
        else
        {
            console.log(`there is a duplicate which is ${arr[i]}`)
        }
    }
}


const array = [1,3,1,2,1,3]

findDuplicates(array)