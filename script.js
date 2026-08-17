const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearBtn(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
        if(display.value === "Infinity"){
            display.value = "ZeroDivision Error";
        }
    }
    catch(error){
        display.value = "Error";
    }
}