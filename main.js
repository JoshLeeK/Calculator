let runningTotal1 = "";
let runningOperator = "";
let runningTotal2 = "";
let result = "";


let resulttext = document.getElementById('result');
resulttext.textContent = runningTotal1;

let pastinputtext = document.getElementById('pastInputText')
pastinputtext.textContent = "";


const add = ( (a,b) => a + b);
const subtract = ( (a,b) => a - b);
const multiply = ( (a,b) => a * b);
const divide = ( (a,b) => a / b );


// Buttons
const buttons = document.querySelectorAll('.btn');
const opbtns = document.querySelectorAll('.btnOp');
const btneq = document.getElementById('equalsBtn');
const btnclr = document.getElementById('clearBtn')

// Event Listeners

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (result === ''){
                if (runningOperator === ""){
                runningTotal1 = runningTotal1.concat(btn.textContent);
                resulttext.textContent = runningTotal1;
                } else {
                    runningTotal2 = runningTotal2.concat(btn.textContent);
                resulttext.textContent = runningTotal1.concat( " " + runningOperator).concat( " " + runningTotal2);
                }
            } else if (runningOperator !== "") { 
                runningTotal2 = runningTotal2.concat(btn.textContent);
                resulttext.textContent = runningTotal1 + ( " " + runningOperator) + ( " " + runningTotal2);
            }
            })
        
    });

    opbtns.forEach((btnOp) => {
        btnOp.addEventListener('click', () => {
            if (runningOperator === ""){
                runningOperator = btnOp.textContent;
                resulttext.textContent = runningTotal1 + ( " " + runningOperator) + ( " " + runningTotal2);
            } else {
                return;
            }
    
          })
        });

    btneq.addEventListener('click', () => {
        if (runningOperator === '+'){
           let num1 = Number(runningTotal1);
           let num2 = Number(runningTotal2);
           result = num1 + num2;
            resulttext.textContent = num1 + num2;
        } else if (runningOperator === '-'){
            let num1 = Number(runningTotal1);
            let num2 = Number(runningTotal2);
            result = num1 - num2;
             resulttext.textContent = num1 - num2;
         } else if (runningOperator === '×'){
            let num1 = Number(runningTotal1);
            let num2 = Number(runningTotal2);
            result = num1 * num2;
             resulttext.textContent = num1 * num2;
         } else if (runningOperator === '÷'){
            let num1 = Number(runningTotal1);
            let num2 = Number(runningTotal2);
            result = num1 / num2;
             resulttext.textContent = num1 / num2;
         } else {
            return;
         }
        pastinputtext.textContent = runningTotal1 + ( " " + runningOperator) + ( " " + runningTotal2) + (" = " + result);
        runningTotal1 = result;
        runningOperator = "";
        runningTotal2 = "";
        
    })

    btnclr.addEventListener('click', () => {
        runningTotal1 = "";
        runningOperator = "";
        runningTotal2 = "";
        result = "";
        resulttext.textContent = "";
        pastinputtext.textContent = "";
    })