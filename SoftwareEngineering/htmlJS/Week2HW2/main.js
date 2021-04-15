

// The argumentrs.length property provides the number of arguments actually passed to the function
function numArguments() {
    return arguments.length
}


let string ="Munar hates how little HW there is"

// method split method is used to split a string into an array of substrings, and returns the new array ('')the string is split between each character
// .reverse() method reverses the order of the elements in an array
// .join() returns the array as a string
function reverseString(string){
    return string.split("").reverse().join("");
}

let array =["Arianna", "software", "coding", "bottle","Pneumonoultramicroscopicsilicovolcanoconiosis","Supercalifragilisticexpialidocious "]
let arrayL = array.length

function findLongestWord(x){
for(let x = 1; x<arrayL; x++){
// we use the temp to switch the variable when the loop goes through to keep switching the variables
    if(array[x].length > array[0].length){
        let temp =array[x]
        array[x] = array[0]
        array[0] = temp
         }
         
    
    }
    return array[0];
}


// we grab the longest word by grabing the length of each word
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








