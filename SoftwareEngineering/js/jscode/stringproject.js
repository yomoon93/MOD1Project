let string = "hey my name is kevin and i am from nyc";
let stringL = string.length
let x;
let vowels= "aeiou";
let manyV=0;
let segment;
let fLetter='' ;
newW = string.replace(/Hey/gi,'Yer')
.replace(/Nyc/gi,'the Concerte gJungle')

for(x=0; x < stringL; x++){
 // segment = string.slice(string.indexOf('kevin'), string.indexOf('kevin') + 'kevin'.length)
    let a = vowels.indexOf(string.charAt(x))
    if( a > -1){
        // console.log(string[x])
        manyV+=1
    }
 if (string[x-1]== ' ' || x==0){
    fLetter=fLetter.concat(string[x].toUpperCase())
    // console.log(fLetter)
 }else{
    fLetter =fLetter.concat(string[x])
 }
   
}

console.log(fLetter)
console.log(newW)

