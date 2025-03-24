const display = document.getElementById('display');

function buttonAppend(button){
    display.value += button;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try {
        display.value = "MISS YOU BEBI";
    }
    catch (error){
        display.value = "ERROR";
    }
}