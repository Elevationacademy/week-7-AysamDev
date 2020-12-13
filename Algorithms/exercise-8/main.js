const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];


const jumble = function (arr1, arr2) {
    let jumbledArr = []
    for(let i=0; i<arr1.length;i++)
    {
        jumbledArr.push(arr1[i])
    }
    for(let i=0; i<arr2.length;i++)
    {
        jumbledArr.push(arr2[i])
    }
    for(let i = 0;i<jumbledArr.length;i++)
    {
        let temp = Math.floor(Math.random() * (jumbledArr.length - 1))
        let toChange = jumbledArr[i]
        jumbledArr[i] = jumbledArr[temp]
        jumbledArr[temp] = toChange
    }
    return jumbledArr
}

console.log(jumble(colors, foods)) // could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]