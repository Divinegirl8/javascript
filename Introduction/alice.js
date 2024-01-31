myArr = [95,78,85,60,45,92];



ans = myArr.map((score) => (score >= 90 && score <= 100 )  ?  "A"
 : (score >= 80 && score <= 89)  ? "B"
 : (score >= 70 && score <= 79 )  ? "C"
 : (score > 60 && score <= 69 )  ?  "D" : "F")
 console.log(ans)
