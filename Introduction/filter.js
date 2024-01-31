const shoppingList = [
    {name : 'Apples',category: 'Fruits',isHealthy : true},
    {name : 'Potato Chips',category: 'Snacks',isHealthy : false},
    {name : 'Carrots',category: 'Vegetables',isHealthy : true},
    {name : 'Chocolate Bars',category: 'Sweets',isHealthy : false},
    {name : 'Greek Yoghurt',category: 'Diary',isHealthy : true},
    {name: 'Soda',category: 'Beverages',isHealty:false}
]


//1)firstName,lastName,cohort,sex,bestColour,location -after giving it value, access the value
// 2)create an array with numbers 1-20 use filter to print even numbers,
//3)use for each to multiply each number by two and display answer, 
//4) use map to multiply each element by itself - puh to git => Ugbo chinedu





const newArray = shoppingList.filter((word) => word.isHealthy === true)
newArray.forEach((element) => console.log(element.name))

