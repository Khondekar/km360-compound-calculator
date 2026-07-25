console.log("KM360 Loaded");

// =====================
// Currency Selector
// =====================

let currency = "$";

// Ye line change ki gayi hai
const currencyButtons = document.querySelectorAll(".currency button");
const currencySymbol = document.querySelector(".money-input span");

currencyButtons.forEach(button => {

    button.addEventListener("click", function () {

        currencyButtons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        currency = this.innerText;

        currencySymbol.textContent = currency;

    });

});

// =====================
// Calculate
// =====================

const calculate = document.getElementById("calculate");

calculate.addEventListener("click", function () {

    const principal = Number(document.getElementById("principal").value);
    const rate = Number(document.getElementById("rate").value);
    const days = Number(document.getElementById("days").value);

    if (principal <= 0 || rate < 0 || days <= 0) {

        alert("Please enter valid values.");

        return;

    }

    let balance = principal;
    let totalInterest = 0;

    const tbody = document.getElementById("tableBody");

    tbody.innerHTML = "";

    for (let i = 1; i <= days; i++) {

        const earning = balance * rate / 100;

        balance += earning;

        totalInterest += earning;

        tbody.innerHTML += `
        <tr>
            <td>${i}</td>
            <td>${currency}${earning.toFixed(2)}</td>
            <td>${currency}${totalInterest.toFixed(2)}</td>
            <td>${currency}${balance.toFixed(2)}</td>
        </tr>
        `;

    }

    document.getElementById("investmentValue").innerHTML =
        currency + balance.toFixed(2);

    document.getElementById("interest").innerHTML =
        currency + totalInterest.toFixed(2);

    document.getElementById("profitPercent").innerHTML =
        ((totalInterest / principal) * 100).toFixed(2) + "%";

    document.getElementById("totalDays").innerHTML =
        days;

    document.getElementById("dailyRate").innerHTML =
        rate + "%";

    document.getElementById("result").style.display = "block";

});