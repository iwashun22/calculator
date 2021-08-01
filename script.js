/**
 * Area for the answer or output of the calculator.
 * @type {HTMLElement}
 */
const resultScreen = document.getElementById('result-output'); // important

const num = {
   zero : document.getElementById('zero-button'), // complete
   one : document.getElementById('one-button'), // complete
   two : document.getElementById('two-button'), // complete
   three : document.getElementById('three-button'), // complete
   four : document.getElementById('four-button'), // complete
   five : document.getElementById('five-button'), // complete
   six : document.getElementById('six-button'), // complete
   seven : document.getElementById('seven-button'), // complete
   eight : document.getElementById('eight-button'), // complete
   nine :  document.getElementById('nine-button') // complete
}

const operator = {
   multiply : document.getElementById('multiplication-button'), // complete
   divide : document.getElementById('division-button'), // complete
   add : document.getElementById('addition-button'), // complete
   subtract : document.getElementById('subtraction-button'), // complete
   decimalDot : document.getElementById('decimal-button'), // complete
   percent : document.getElementById('percent'), // complete
   root : document.getElementById('square-root'), // complete
   clear : document.getElementById('clear-button'), // complete
   result : document.getElementById('equal-button') // complete
}

// set up //

/**
 * Able to add the decimal only one time for each number.
 * Every single time you put the operator, will make a newNumber.
 * @type {boolean}
 */
let newNumber = true;
let isDecimal = false;
function addDecimal(){
   checkDecimalAndZero();
   let a = resultScreen.innerText.charAt(resultScreen.innerText.length - 1);
   if(newNumber && !isDecimal && (a !== '×') && (a !== '÷') && (a !== '+') && (a !== '−')){
      resultScreen.innerText = `${resultScreen.innerText}.`;
      newNumber = false;
      isDecimal = true;
   }
}

// remove 0 when there is no decimal point //
// example : 03 => 3 //
function removeZeroIfNoDecimalPlace(){
   checkDecimalAndZero();
   if(newNumber && !isDecimal && zeroInfront){
      resultScreen.innerText = resultScreen.innerText.substr(0, (resultScreen.innerText.length - 1));
   }
}

let zeroInfront;
function checkDecimalAndZero(){
   let arr = [];
   let inside = resultScreen.innerText;
   inside = inside.replaceAll('×', ' ');
   inside = inside.replaceAll('÷', ' ');
   inside = inside.replaceAll('+', ' ');
   inside = inside.replaceAll('−', ' ');

   arr = inside.split(' ');
   if(arr[arr.length-1].includes('.')){
      isDecimal = true;
   } 
   else {
      isDecimal = false;
   }

   if(arr[arr.length-1].charAt(0) === '0'){
      zeroInfront = true;
   }
   else {
      zeroInfront = false;
   }
   console.log(arr);
}

function addPercent(){
   let a = resultScreen.innerText.charAt(resultScreen.innerText.length - 1);
   let arr = [];
   let inside = resultScreen.innerText;
   inside = inside.replaceAll('×', ' ');
   inside = inside.replaceAll('÷', ' ');
   inside = inside.replaceAll('+', ' ');
   inside = inside.replaceAll('−', ' ');

   arr = inside.split(' ');
   if(arr.length > 1 && (a !== '×') && (a !== '÷') && (a !== '+') && (a !== '−') && (a !== '.') && (a !== '%') && !arr[arr.length-1].includes('√')){
      resultScreen.innerText = `${resultScreen.innerText}%`;
      newNumber = false;
   }
}

function addSquareRoot(){
   let arr = [];
   let inside = resultScreen.innerText;
   inside = inside.replaceAll('×', ' ');
   inside = inside.replaceAll('÷', ' ');
   inside = inside.replaceAll('+', ' ');
   inside = inside.replaceAll('−', ' ');

   arr = inside.split(' ');
   if(arr[arr.length-1].includes('√') || arr[arr.length-1].includes('.')){
      return;
   }
   else {
      removeZeroIfNoDecimalPlace();
      resultScreen.innerText =  `${resultScreen.innerText}√`;
   }
}

// working with operators //
const clearAll = () =>{
   resultScreen.innerText = '0';
   storingNumber = [];
   operatorString = [];
   numberString = [];
   newNumber = true;
   isDecimal = false;
   console.clear();
   console.log('clear');
}
const decimalPlace = ()=>{
   addDecimal();
}
const multiplication = () => {
   checkLastChar();
   if(isNumber){
      isDecimal = false;
      newNumber = true;
      resultScreen.innerText =  `${resultScreen.innerText}×`;
   }
}
const division = () => {
   checkLastChar();
   if(isNumber){
      isDecimal = false;
      newNumber = true;
      resultScreen.innerText =  `${resultScreen.innerText}÷`;
   }
}
const additionPlus = () => {
   checkLastChar();
   if(isNumber){
      isDecimal = false;
      newNumber = true;
      resultScreen.innerText = `${resultScreen.innerText}+`;
   }
}
const subtractionMinus = () => {
   checkLastChar();
   if(isNumber){
      isDecimal = false;
      newNumber = true;
      resultScreen.innerText = `${resultScreen.innerText}−`;
   }
}
const percent = () => {
   addPercent();
}
const squareRoot = () => {
   addSquareRoot();
}


// working with numbers //
const addOne = () => {
   removeZeroIfNoDecimalPlace();
   let a = resultScreen.innerText.charAt(resultScreen.innerText.length - 1);
   if(a !== '%' && a!== 'x'){
      resultScreen.innerText = `${resultScreen.innerText}1`;
      console.log('add one');
      console.log(resultScreen.innerText.length);
   }
}
const addTwo = () => {
   removeZeroIfNoDecimalPlace();
   let a = resultScreen.innerText.charAt(resultScreen.innerText.length - 1);
   if(a !== '%' && a!== 'x'){
      resultScreen.innerText = `${resultScreen.innerText}2`;
      console.log('add two');
      console.log(resultScreen.innerText.length);
   }
}
const addThree = () => {
   removeZeroIfNoDecimalPlace();
   let a = resultScreen.innerText.charAt(resultScreen.innerText.length - 1);
   if(a !== '%' && a!== 'x'){
      resultScreen.innerText = `${resultScreen.innerText}3`;
      console.log('add three');
      console.log(resultScreen.innerText.length);
   }
}
const addFour = () => {
   removeZeroIfNoDecimalPlace();
   let a = resultScreen.innerText.charAt(resultScreen.innerText.length - 1);
   if(a !== '%' && a!== 'x'){
      resultScreen.innerText = `${resultScreen.innerText}4`;
      console.log('add four');
      console.log(resultScreen.innerText.length);
   }
}
const addFive = () => {
   removeZeroIfNoDecimalPlace();
   let a = resultScreen.innerText.charAt(resultScreen.innerText.length - 1);
   if(a !== '%' && a!== 'x'){
      resultScreen.innerText = `${resultScreen.innerText}5`;
      console.log('add five');
      console.log(resultScreen.innerText.length);
   }
}
const addSix = () => {
   removeZeroIfNoDecimalPlace();
   let a = resultScreen.innerText.charAt(resultScreen.innerText.length - 1);
   if(a !== '%' && a!== 'x'){
      resultScreen.innerText = `${resultScreen.innerText}6`;
      console.log('add six');
      console.log(resultScreen.innerText.length);
   }
}
const addSeven = () => {
   removeZeroIfNoDecimalPlace();
   let a = resultScreen.innerText.charAt(resultScreen.innerText.length - 1);
   if(a !== '%' && a!== 'x'){
      resultScreen.innerText = `${resultScreen.innerText}7`;
      console.log('add seven');
      console.log(resultScreen.innerText.length);
   }
}
const addEight = () => {
   removeZeroIfNoDecimalPlace();
   let a = resultScreen.innerText.charAt(resultScreen.innerText.length - 1);
   if(a !== '%' && a!== 'x'){
      resultScreen.innerText = `${resultScreen.innerText}8`;
      console.log('add eight');
      console.log(resultScreen.innerText.length);
   }
}
const addNine = () => {
   removeZeroIfNoDecimalPlace();
   let a = resultScreen.innerText.charAt(resultScreen.innerText.length - 1);
   if(a !== '%' && a!== 'x'){
      resultScreen.innerText = `${resultScreen.innerText}9`;
      console.log('add nine');
      console.log(resultScreen.innerText.length);
   }
}
const addZero = () => {
   // another way to do //
   /* 
   checkDecimal();
   if(isDecimal || (!isDecimal && resultScreen.innerText.charAt(0) !== '0')){
      resultScreen.innerText = `${resultScreen.innerText}0`;
      console.log('add zero');
      console.log(resultScreen.innerText.length);
   }
   else {
      return;
   }
   */
   removeZeroIfNoDecimalPlace();
   let a = resultScreen.innerText.charAt(resultScreen.innerText.length - 1);
   if(a !== '%' && a!== 'x'){
      resultScreen.innerText = `${resultScreen.innerText}0`;
      console.log('add zero');
      console.log(resultScreen.innerText.length);
   }
}


const getTheResult = ()=>{
   numberString = [];
   storingNumber = [];
   checkLastChar();
   if(!isNumber){
      resultScreen.innerText = resultScreen.innerText.substr(0, resultScreen.innerText.length - 1)
   }

   separateString();
   calculation();

   for(const index of storingNumber){
      console.log(index);
   }
   console.log(operatorString.length);
   console.log(storingNumber.length);

}


/**
 * for storing a number, which you have to saperate it from the resultScreen
 * @type {Array<number>} 
 */
let storingNumber = [];
let operatorString = []; 

/**
 * for storing a number as a string
 * @type {Array<string>}
 */
let numberString = []; // store as a string

operator.clear.onclick = clearAll;
operator.result.onclick = getTheResult;
operator.decimalDot.onclick = decimalPlace;
operator.multiply.onclick = multiplication;
operator.divide.onclick = division;
operator.add.onclick = additionPlus;
operator.subtract.onclick = subtractionMinus;
operator.percent.onclick = percent;
operator.root.onclick = squareRoot;

num.zero.onclick = addZero;
num.one.onclick = addOne;
num.two.onclick = addTwo;
num.three.onclick = addThree;
num.four.onclick = addFour;
num.five.onclick = addFive;
num.six.onclick = addSix;
num.seven.onclick = addSeven;
num.eight.onclick = addEight;
num.nine.onclick = addNine;

let isNumber;
function checkLastChar(){
   const last = resultScreen.innerText.charAt(resultScreen.innerText.length - 1);
   if((last === '×') || (last === '÷') || (last === '+') || (last === '−') || (last === '√') || last === '.'){
      isNumber = false;
   }
   else {
      isNumber = true;
   }
}

/*
const saperateString = () => {
   let aString = '';
   for(let i=0; i<resultScreen.innerText.length; i++){
      let check = resultScreen.innerText.charAt(i);
      if((check === '×') || (check === '÷') || (check === '+') || (check === '−')){
         numberString.push(aString);
         operatorString.push(check);
         aString = '';
      } else {
         aString += check;
      }
   }
   numberString.push(aString);
}
*/

const separateString = () => {
   storingNumber = [];
   operatorString = [];
   numberString = [];
   let theString = resultScreen.innerText;

   for(let i = 0; i < theString.length; i++){
      const characterAtthat = theString.charAt(i);
      if(characterAtthat === '×' || characterAtthat === '÷' || characterAtthat === '+' || characterAtthat === '−'){
         operatorString.push(characterAtthat);
      }
   }

   theString = theString.replaceAll('×', ' ');
   theString = theString.replaceAll('÷', ' ');
   theString = theString.replaceAll('+', ' ');
   theString = theString.replaceAll('−', ' ');

   numberString = theString.split(' ');
}

const calculation = () => {

   calculateRoot();
   calculatePercent();

   for(let i = 0; i < numberString.length; i++){
      storingNumber.push(parseFloat(numberString[i]));
   }

   let result = 0;
   let resultString;
   for(let i = 0; i < operatorString.length; i++){
      if(operatorString[i] === '×'){
         result = storingNumber[i] * storingNumber[i + 1];
         storingNumber[i] = result;
         storingNumber.splice(i+1, 1);
         operatorString.splice(i, 1);
         i--;
      }
      else if(operatorString[i] === '÷'){
         result = storingNumber[i] / storingNumber[i + 1];
         storingNumber[i] = result;
         storingNumber.splice(i+1, 1);
         operatorString.splice(i, 1);
         i--;
      }
   }

   result = storingNumber[0];

   for(let i = 0; i < operatorString.length; i++){
      if(operatorString[i] === '+'){
         result += storingNumber[i+1];
      }
      else {
         result -= storingNumber[i+1]
      }
   }

   resultString = result.toString();

   if(resultString.includes('.')){
      // lable how many decimal number you want to get //
      result = Number.parseFloat(result).toFixed(4);
      resultString = result.toString();
      for(let i = (resultString.length-1); i>0; i--){
         if(resultString.charAt(i) === '0'){
            resultString = resultString.substr(0, i);
         }
         else{
            i = 0;
         }
      }
      if(resultString.charAt(resultString.length-1) === '.'){
         resultString = resultString.substr(0, resultString.length-1);
      }
   }

   resultScreen.innerText = resultString;
}

// working with percent //
function calculatePercent(){
   let num;
   for(let i = 0; i < numberString.length; i++){
      if(numberString[i].includes('%')){
         numberString[i] = numberString[i].replaceAll('%', '');
         if((operatorString[i] ===  '+' || operatorString[i] === '−' || operatorString[i] === undefined) && (operatorString[i-1] === '+' || operatorString[i-1] === '−')){
            if(operatorString[i-1] === '+'){
               num = parseFloat(numberString[i-1]) * (1 + (parseFloat(numberString[i]) / 100));
            }
            else {
               num = parseFloat(numberString[i-1]) * (1 - (parseFloat(numberString[i]) / 100));
            }
            numberString.splice(i-1, 2, num.toString());
            operatorString.splice(i-1, 1);
            i--;
         }
         else {
            num = parseFloat(numberString[i]) / 100;
            numberString[i] = num.toString();
         }
      }
   }
}

// working with square root //
function calculateRoot(){
   let num = []; // string
   let integerNumber, rootNumber, totalNum;
   for(let i = 0; i < numberString.length; i++){
      if(numberString[i].includes('√')){
         if(numberString[i].charAt(0) === '√'){
            numberString[i] = numberString[i].replaceAll('√', '');
            totalNum = Math.sqrt(parseFloat(numberString[i]));
         }
         else {
            num = numberString[i].split('√');
            integerNumber = parseFloat(num[0]);
            rootNumber = Math.sqrt(parseFloat(num[1]));
            totalNum = rootNumber * integerNumber;
         }

         numberString[i] = totalNum.toString();
      }
   }
}
