const findIndex = function(numbers, num)
{
    console.log(num)
    let first = 0
    let last = numbers.length - 1
    for(;first < last;)
    {
        let mid = Math.floor((first+last)/2)
        if(num < numbers[mid])
        {
            last = mid - 1
        }
        else if(num > numbers[mid])
        {
            first = mid + 1
        }
        else if(num === numbers[mid])
        {
            console.log(mid)
            first = last
        }

    }
}


const arr = [2,5,8,12,16,23,38,56,72,91]

findIndex(arr,23)