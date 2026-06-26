import { calculatePrice } from "./pricingEngine.js";

let currentCurrency = "USD";
let currentCycle = "monthly";

const prices = document.querySelectorAll(".price");

function updatePrices() {

    prices.forEach(price => {

        const plan = price.dataset.plan;

        price.textContent = calculatePrice(
            plan,
            currentCurrency,
            currentCycle
        );

    });

}

document.querySelectorAll(".currency-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelector(".currency-btn.active")
            ?.classList.remove("active");

        btn.classList.add("active");

        currentCurrency = btn.dataset.currency;

        updatePrices();

    });

});

const monthlyBtn = document.querySelector("#monthly-btn");
const yearlyBtn = document.querySelector("#yearly-btn");

monthlyBtn.addEventListener("click", () => {

    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    currentCycle = "monthly";

    updatePrices();

});

yearlyBtn.addEventListener("click", () => {

    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    currentCycle = "yearly";

    updatePrices();

});

updatePrices();