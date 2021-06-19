// ----- VARIABLES ----- //

// - display text - 
const primary_text = document.getElementById("primary-text");
const secondary_text = document.getElementById("secondary-text");

// - buttons -
const number_buttons = document.getElementsByClassName("number");
const operator_buttons = document.getElementsByClassName("operator");

// - button tracker - 
let previous_button = "";

// ---------------------------------------------------------------------------------------- //

// ----- BUTTON EVENT LISTENERS ----- //

// - number buttons - 
for (let i=0; i<number_buttons.length; i++){

    let this_button = number_buttons[i];

    this_button.addEventListener("click", function(){
            primary_text.innerHTML += this_button.id;  
            
            previous_button = "number"; // < button tracking
    });
}

// - operator buttons - 
for (let i=0; i<operator_buttons.length; i++){
    let this_button = operator_buttons[i];

    this_button.addEventListener("click", function(){

            if (previous_button != "operator"){ // < prevent multiple operators
               primary_text.innerHTML += " " + this_button.id + " ";  
            
                previous_button = "operator"; // < button tracking 
            }
            
    });
}

