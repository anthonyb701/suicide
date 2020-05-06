let words = ['арбуз', 'персик' , 'яблоко', 'банан'];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
let z = 1;
let k = 0;
let guess;
let j = 0;
let remain;
let checkword;
let checktry;
console.log(word);  // Слово 

///////////////////// Вирахування масиву з _ //////////

for (let i = 0; i < word.length; i++){
   answerArray[i] = '_';
};
let remainingLetters = word.length;

////////////// Основний цикл ///////////////////////
while (remainingLetters >  0){
   if(j = 6){
      j = 0;
   }
   guess = prompt('Угадайте букву, или нажмите отмена для выхода изи игры.');
   if (guess === null){
      break;
   } else if (guess.length !== 1){
      guess = prompt('Пожалуйста, введите одну букву!'); 
   } else {
      while (j < word.length){
         if (word[j] === guess){
            answerArray[j] = guess;
            remainingLetters--;
            var alarm = j;
         } 
         j++;
       }
   }
   if(word[alarm] !== guess){
   console.log(`Mistake: ${z}`);
   z++;
   k= 1
   } 
   else{
   k = 0;
 }
   remain = 6 - z;
   console.log(alarm);


   if(remainingLetters < 2){
      checkword = 'букву.';
   } else if(remainingLetters > 1 && remainingLetters < 5){
      checkword = 'буквы.';
   } else {
      checkword = 'букв.';
   }

   if(remain < 2){
      checktry = 'попытка.';
   } else {
      checktry = 'попытки.';
   }

   
   if(remainingLetters < 1 || z > 5 ){
      break;
   } else if(k < 1) { 
   alert('Вам осталось отгадать ' + remainingLetters + ' ' + checkword + '\n' + '\n' + '                 ' + answerArray.join(' '));
   } else { alert('У вас осталось ' +  remain + ' ' + checktry + '\n' + '\n' +  '                   ' + answerArray.join(' ')); 
      }
};

//////////////// Можливі закінчення гри ///////////

if(guess === null){
   console.log('Quit the game.');
} else if(z > 5) {
   alert('Вы проиграли');
   console.log('Game lost');
} else {
   alert(`Отлично! Было загадано слово [ ${word} ]`);
   console.log('Winner');
}