const data = {
    "ax01": {name: "Ray", age: 28,salary: 1300},
    "qs84": {name: "lucius",age:31,salary:840},
    "bg33": {name:"Taylor",age:18,salary:2700}       
}


const  findEmployeeSalary = function(employeeID)
{
    if(data[employeeID])
    {
        console.log(data[employeeID].salary)
    }
    else
    {
        console.log("no Employee with the desired id was found")
    }
}


findEmployeeSalary("ax01")
findEmployeeSalary("aaaaa")