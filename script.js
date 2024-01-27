let input=document.getElementById('input');
let wordLengthDisplay=document.getElementById('wordLength');
let inputWord;

function findWordLength(){
    inputWord=input.value
    wordLength=inputWord.length;
    if(wordLength<10){
        wordLengthDisplay.innerHTML='0'+wordLength
    }else{
        wordLengthDisplay.innerHTML=wordLength
    }
    
}