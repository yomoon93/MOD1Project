


function numArguments() {
    return arguments.length
}

// let array=["Munar Hates Arianna", "God wants everyone to love each other"];
let string ="Munar hates Arianna because she didn\'t hit him up"




function reverseString(string){
    return string.split("").reverse().join("");
}

let array =["Arianna", "software", "coding", "bottle","Pneumonoultramicroscopicsilicovolcanoconiosis","Supercalifragilisticexpialidocious "]
let arrayL = array.length

function findLongestWord(x){
for(let x = 1; x<arrayL; x++){

    if(array[x].length > array[0].length){
        let temp =array[x]
        array[x] = array[0]
        array[0] = temp
         }
         
    
    }
    return array[0];
}



let arrayW =['Howdy', 'Bookcase', 'Arianna', 'Marurico', 'Kevin']
let wordsF=[];
function filterLongWords(ar) {
    let length =5;
        for(let x = 0; x< ar.length; x++){
            if(ar[x].length == length){
                wordsF.push(ar[x])
            }
            
        }
        return wordsF
}