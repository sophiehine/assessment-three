console.log("JavaScript is working!");

// store the screens as variables //
let screen1 = document.querySelector("#screen-1");
let screen2 = document.querySelector("#screen-2");
let screen3 = document.querySelector("#screen-3");
let screen4 = document.querySelector("#screen-4");

// store the buttons as variables //
let beginButton = document.querySelector("#beginButton");
let nextButton = document.querySelector("#nextButton");
let calculateButton = document.querySelector("#calculateButton");
let resButton = document.querySelector("#resButton");
let homeButton= document.querySelector("#home-button"); // apart of the fixed navigation bar - shown on all screens //

// begin button functionality //
beginButton.addEventListener("click", function () { // event listener used to run the function once the button is clicked //
    screen1.style.display = "none";
    screen2.style.display = "flex"; // flex = when the button is clicked it takes users to this page not the rest //
    screen3.style.display = "none"; // each button has a specific page it 'flexs' to as shown below //
    screen4.style.display = "none"; // this process allows for the effect of different screens //
});

// next button functionality //
nextButton.addEventListener("click", function () {
    screen1.style.display = "none";
    screen2.style.display = "none"; // same function as above but varied "flex" //
    screen3.style.display = "flex"; // budget page button which transports user to the expense page //
    screen4.style.display = "none";
});

// restart button functionality //
resButton.addEventListener("click", function () {
    screen1.style.display = "flex";
    screen2.style.display = "none"; // same function as above but varied "flex" //
    screen3.style.display = "none"; // result page button which allows users to restart the process //
    screen4.style.display = "none";
});

// home button functionality //
homeButton.addEventListener("click", function () {
    screen1.style.display = "flex"; 
    screen2.style.display = "none"; // same function/structure as above" //
    screen3.style.display = "none"; // as the home button is attached to a fixed navigation bar users can click to return to the home page from any screen //
    screen4.style.display = "none";
});


function calculation () {
    let budget = Number(document.querySelector(".budget").value);

    let transportItem1 = Number(document.querySelector(".transport-item1").value); // connects "table-inputs" and user results to create an individual total for each expense category //
    let transportItem2 = Number(document.querySelector(".transport-item2").value); // process repeated for each category - transport, accomodation, food //
    let transportItem3 = Number(document.querySelector(".transport-item3").value); // total transport ($) //

    let accomodationItem1 = Number(document.querySelector(".accomodation-item1").value); // process, structure and function repeated for each category - total accomodation ($) //
    let accomodationItem2 = Number(document.querySelector(".accomodation-item2").value); 
    let accomodationItem3 = Number(document.querySelector(".accomodation-item3").value);

    let foodItem1 = Number(document.querySelector(".food-item1").value); // process, structure and function repeated for each category - total food ($) //
    let foodItem2 = Number(document.querySelector(".food-item2").value); 
    let foodItem3 = Number(document.querySelector(".food-item3").value);

    let transportSubtotal = transportItem1 + transportItem2 + transportItem3; // this equation creates the total expense ($) for transport //
    let accomodationSubtotal = accomodationItem1 + accomodationItem2 + accomodationItem3; // this equation creates the total expense ($) for accomodation //
    let foodSubtotal = foodItem1 + foodItem2 + foodItem3; // this equation creates the total expense ($) for food //

    let transportSubtotalValue = document.querySelector(".transport-subtotal-value"); // connecting "indi-result-inputs" and the transport category subtotal due to results in table // 
    transportSubtotalValue.innerHTML = transportSubtotal.toFixed(2); // the to.Fixed(2) code means the results will be to the second decimal place //

    let accomodationSubtotalValue = document.querySelector(".accomodation-subtotal-value");
    accomodationSubtotalValue.innerHTML = accomodationSubtotal.toFixed(2); // same process as above but for the accomodation category and includes rounded decimals // 

    let foodSubtotalValue = document.querySelector(".food-subtotal-value");
    foodSubtotalValue.innerHTML = foodSubtotal.toFixed(2); // same process as above but for the food category and includes rounded decimals //

    let totalExpenses = transportSubtotal + accomodationSubtotal + foodSubtotal; // calculation which adds each expense category subtotal to create a total expense result //

    let averageExpenseItem = transportSubtotal + accomodationSubtotal + foodSubtotal/3; // calculation which adds each expense category subtotal and divides it by 3 to get an average expense result //
    
    let netResult = budget - totalExpenses; // net result calculation that subtracts the users inital budget with their total expenses //

    let netResultValue = document.querySelector (".net-result-value");
    netResultValue.innerHTML = netResult.toFixed(2); // relates to code above - connects the 'net-result-value' to the results written in the previous table/s // 

    let totalExpensesValue = document.querySelector (".total-expenses-value");
    totalExpensesValue.innerHTML = totalExpenses.toFixed(2); // relates to code above - connects the 'total-expenses-value' to the results written in the previous table/s // 

    let averageExpenseItemValue= document.querySelector (".average-expense-item-value");
    averageExpenseItemValue.innerHTML = averageExpenseItem.toFixed(2); // relates to code above - connects the 'average-expense-item-value' to the results written in the previous table/s // 

    let conditionalText = document.querySelector("#conditional-text"); // an image/text will appear if the user has a positive result otherwise another image/text will appear if the user has a negative result //
    let conditionalImage = document.querySelector("#conditional-image");

    if (netResult > 0) {
        conditionalText.innerText = "Congratulations, you have budgeted well!";
        conditionalImage.src= "./images/Green-tick.png"; // the conditional text/image if the user has a positive result //
    } else {
        conditionalText.innerText = "Oh no, it looks like you need a larger budget!";
        conditionalImage.src ="./images/Red-cross.png"; // the conditional text/image if the user has a negative result //
    }
}


// calculate button functionality //

calculateButton.addEventListener("click", function () {
    screen1.style.display = "none";
    screen2.style.display = "none"; // same function as previous buttons with varied "flex" //
    screen3.style.display = "none"; // expense page button which transports user to the results page - provides final budget results //
    screen4.style.display = "flex";
    calculation ();
});