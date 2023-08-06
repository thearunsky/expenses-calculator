// All neccesery variables
const salary = document.getElementById("salary_ht");
let expenses = document.getElementById("name_ht");
let amount = document.getElementById("amount_ht");

let budget = document.getElementById("budget_ht")
let saving = document.getElementById("left_ht");

let list = document.getElementById("list_ht");

let serial_number = 1
let billNames = [];
let bills = [];

// When you click on Add button
const btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {

    // If any box not filled
    if (salary.value == "" || expenses.value == "" || amount.value == "") {
        alert("Please fill all values fiets")

    } else {
        // Putting salary
        budget.innerHTML = salary.value

        // Making an entry like : Rent , 3000
        makeEntry(expenses.value, amount.value);
    }
})

function makeEntry(name, amount) {

    // Appending a child on area
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("alert", "added", "alert-info", "alert-dismissible", "fade", "show", "d-flex", "justify-content-between")

    let markUp = `<strong><span>${serial_number}</span>. ${name}</strong>
    <h4>
        <p class="expense_amount">${amount}</p>
        <button onclick="removed(this.parentElement.firstChild.nextElementSibling, this.parentElement.parentElement.firstChild.firstChild)" 
            type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
    </h4>`
    mainDiv.innerHTML = markUp;
    list.appendChild(mainDiv)
    
    // Adding all bill amounts and name to a array
    bills.push(amount);
    billNames.push(name);

    // Increasing serial number of utility
    serial_number += 1
    
    pieChart(bills,billNames)
    
    // Get sum of all array = total bill
    let sum = 0;
    bills.map(e => {
        sum += parseInt(e)
    })
    
    // Putting saving on box, salary - utilty
    saving.innerHTML = budget.innerHTML - (sum);
};

console.log(billNames,bills);

// When you remove entry
function removed(amount, index) {
    
    // Saving = saving + utility
    saving.innerHTML = (parseInt(saving.innerHTML)) + (parseInt(amount.innerHTML))
    
    console.log(index.innerHTML);
}


function pieChart(bills, billNames,index){

    var xValues = billNames
    var yValues = bills
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145",
        "#F9EC27",
        "#056EFB",
        "#FB0505"
    ];
    
    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Your expenses pie chart"
            }
        }
    });
}
