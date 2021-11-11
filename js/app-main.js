// Pseudo code
// --------------------------------------------------
// 1. Sellect the HTML elements needed 
// 2. Get the user input from the string they provide.
// 3. Loop through and reverse the string 
// 4. Run the Program after the button is pushed
// 5. Display the string in the alert on the page
// --------------------------------------------------


// 1. Sellect the HTML elements needed 
const backtrackBtn = document.getElementById('btn-submit');
let stringResults = document.getElementById('string-results');


// 2. Get the user input from the string they provide.
// controller function 
function getUserString() {
    // Sellecting the HTML form element  
    const userStringInput = document.getElementById('user-stringT');

    // Make the String area invisable
    stringResults.classList.add('invisible');

    // Get the value of the user's string
    let userString = userStringInput.value;

    // Get the value of the user's revirsed string
    let revString = reverseString(userString);

    // Printing the reversed string
    displayString(revString);
}

// 3. Loop through and reverse the string 
// Logic function 
function reverseString(userString){

    let revString = [];

    // loop through the string 
    for (let i = userString.length -1; i >= 0; i--) {
        revString += userString[i];
        console.log(revString);
    }
    return revString;
}

// 4. Display the string in the alert on the page
// Videw function 
function displayString(revString) {

    // Get the string message element 
    const stringMessage = document.getElementById('backtrack-string');

    // Write to the page 
    stringMessage.innerHTML = `Your string is: <span class="messageStyle">${revString}</span>`;

    // Turn on the alert box 
    // Make the String Message area visable
    stringResults.classList.remove('invisible');
}

// 5. Run the Program after the button is pushed
backtrackBtn.addEventListener('click', () => {
    alert("Ass");
    getUserString();
    reverseString(userString);
})