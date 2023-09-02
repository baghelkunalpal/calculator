let display = document.getElementById("display");
let currentInput = "";
let currentresult = "";

function appendToDisplay(value){
    currentInput+=value;
    display.value = currentInput;
}

function clearDisplay(){
    currentInput= "";
    currentresult = "";
    display.value = "";
}

function calculateResult (){
    try{
        currentresult = eval(currentInput);
        display.value = currentresult;
    }
    catch(error){
        display.value = 'Invalid keyword';
    }
}

// can also add keyword support

document.addEventListener('keydown',function(event){
    const key = event.key;
    if (/[0-9+\-*/.=]|Enter|Backspace|Escape/.test(key)) {
        event.preventDefault();
    }
    if(key==='Enter'){
        calculateResult();
    }
    else if(key==='Backspace'){
        currentInput = currentInput.slice(0,-1);
        display.value = currentInput;
    }
    else if(key===Escape){
        clearDisplay();
    }
    else{
        appendToDisplay(key);
    }
});