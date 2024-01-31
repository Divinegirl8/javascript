var mergeAlternately = function(word1, word2){
    newValue = "";
    loop = 0;

    if(word1.length > word2.length){
        loop = word1.length
    }
    else{
        loop = word2.length;
    }


    for(let index = 0; index < loop; index++){
         
        if(index < word1.length){
        newValue += word1[index];}
        
        if(index < word2.length){
        newValue += word2[index];}
       
    
    }
    return newValue;
}
