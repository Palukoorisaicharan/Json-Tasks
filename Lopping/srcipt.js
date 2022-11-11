let data = [
    {
        name : "Saicharan",
        Age : 23,
        Salary: 25000,
        Company : "Guvi"

    },
    {
        name : "Kiran",
        Age : 24,
        Salary : 20000,
        Company : "Guvi Geek"
    },
    {
        name : "Rahul",
        Age : 24,
        Salary : 23000,
        Company : "Guvi Geek Network"

    }
]

for(var i=0;i<data.length;i++){
    user = data[i];
    console.log(
        `
        Name : ${user.name}
        Age  : ${user.Age}
        `
        );
}

data.forEach((user)=>{
    console.log(
        `
        Name : ${user.name}
        Age  : ${user.Age}
        Salary: ${user.Salary}
        `
        );
})

for(var index in data){
    user=data[index];
    console.log(
        `
        Name : ${user.name}
        Age  : ${user.Age}
        Salary: ${user.Salary}
        Company : ${user.Company}
        `
        );
}

for (var key of data){
    console.log(
        `
        Name : ${key.name}
        Age  : ${key.Age}
        Salary: ${key.Salary}
        Company: ${key.Company}
        `
        );
}