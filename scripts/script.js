// ----- VARIABLES ----- //

// - display text - 
const primary_text = document.getElementById("primary-text");
const secondary_text = document.getElementById("secondary-text");

// - buttons -
const number_buttons = document.getElementsByClassName("number");
const operator_buttons = document.getElementsByClassName("operator");
const special_operator_buttons = document.getElementsByClassName("special-operator");

// - button tracker - 
let previous_button = "";

// ---------------------------------------------------------------------------------------- //

// ----- BUTTON EVENT LISTENERS ----- //

// - number buttons - 
for (let i = 0; i < number_buttons.length; i++) {

    let this_button = number_buttons[i];

    this_button.addEventListener("click", function () {
        primary_text.innerHTML += this_button.id;

        previous_button = "number"; // < button tracking
    });
}

// - operator buttons - 
for (let i = 0; i < operator_buttons.length; i++) {
    let this_button = operator_buttons[i];

    this_button.addEventListener("click", function () {

        if (previous_button != "operator") { // < prevent multiple operators

            let id = this_button.id;
            let p_text = primary_text.innerHTML;

            let illegal_input = (p_text == "") &&
                ((id == "/") || (id == "*") || (id == "+"));

            if (illegal_input) { // < prevent / * + as first input
                // do nothing
            } else {
                primary_text.innerHTML += " " + id + " ";

                previous_button = "operator"; // < button tracking 
            }


        }



    });
}

// - special operator buttons -
for (let i = 0; i < special_operator_buttons.length; i++) {
    let this_button = special_operator_buttons[i];

    this_button.addEventListener("click", function () {

        switch (this_button.id) {

            case "CLEAR":

                primary_text.innerHTML = "";
                secondary_text.innerHTML = "";
                previous_button = "";

                break;

            case "DELETE":

                // v determine where to end v
                let del_amount = primary_text.innerHTML.length; // < default: don't delete
                
                if (previous_button == "number") {
                    del_amount = -1; // < number: delete 1
                } else if (previous_button == "operator") {
                    del_amount = -3; // < operator: delete 3
                    previous_button = "number";
                }

                primary_text.innerHTML = primary_text.innerHTML.slice(0, del_amount);

                break;

            case "EQUALS":

                if (previous_button == "operator") { // < remove trailing operator
                    let del_amount = -3;
                    primary_text.innerHTML = primary_text.innerHTML.slice(0, del_amount);
                }

                // EVALUATE
                secondary_text.innerHTML = primary_text.innerHTML + " = " + eval(primary_text.innerHTML);

                primary_text.innerHTML = eval(primary_text.innerHTML);



                break;


        }
    });
}