let obj1 = {
    name : "Sydney",
    population : 1,
    temp : 3.0,
    currenvy : "dollars"
}

let obj2 = {
    name : "Vera",
    population : 1,
    temp : 5.0,
    currenvy : "naira"
}


let obj3 = {
    name : "Divine",
    population : 1,
    temp : 1.0,
    currenvy : "pounds"
}


let obj4 = {
    name : "Ope",
    population : 1,
    temp : 5.0,
    currenvy : "naira"
}


let obj5 = {
    name : "Toby",
    population : 1,
    temp : 15.20,
    currenvy : "naira"
}


let obj6 = {
    name : "Tunde",
    population : 1,
    temp : 5.0,
    currenvy : "naira"
}
let obj7 = {
    name : "Tunde",
    population : 1,
    temp : 25.0,
    currenvy : "naira"
}
let obj8 = {
    name : "Tunde",
    population : 1,
    temp : 85.0,
    currenvy : "naira"
}
let obj9 = {
    name : "Tunde",
    population : 1,
    temp : 5.0,
    currenvy : "naira"
}
let obj10 = {
    name : "Tunde",
    population : 1,
    temp : 5.0,
    currenvy : "naira"
}




let arr = [[null,obj1,obj2,obj3],[obj4,obj5,obj6,null],[obj7,null,obj9,obj10]]






num = 0

for(let index = 0; index < arr.length; index++){
    for(let temp = 0; temp < arr[index].length; temp++){
        if(arr[index][temp] != null){
        num += arr[index][temp]["population"];}
    }
}
console.log(num)





