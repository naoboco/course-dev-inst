const API_KEY = "YOUR_API_KEY";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

const form = document.getElementById("converter-form");
const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const switchButton = document.getElementById("switch");
const convertButton = document.getElementById("convert");
const resultElement = document.getElementById("result");
const rateElement = document.getElementById("rate");
const messageElement = document.getElementById("message");

async function loadCurrencies() {
    try {
        const response = await fetch(`${BASE_URL}/codes`);

        if (!response.ok) {
            throw new Error("Unable to load currencies.");
        }

        const data = await response.json();

        if (data.result !== "success") {
            throw new Error(data["error-type"] || "API error");
        }

        fromSelect.replaceChildren();
        toSelect.replaceChildren();

        data.supported_codes.forEach(([code, name]) => {
            const label = `${code} - ${name}`;

            fromSelect.add(new Option(label, code));
            toSelect.add(new Option(label, code));
        });

        fromSelect.value = "EUR";
        toSelect.value = "ILS";

        convertButton.disabled = false;
        messageElement.textContent = "";

        await convertCurrency();
    } catch (error) {
        messageElement.textContent = error.message;
        console.error(error);
    }
}

async function convertCurrency() {
    const amount = Number(amountInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    if (!Number.isFinite(amount) || amount <= 0) {
        messageElement.textContent = "Enter a valid amount.";
        return;
    }

    if (!from || !to) {
        messageElement.textContent = "Select both currencies.";
        return;
    }

    convertButton.disabled = true;
    messageElement.textContent = "Converting...";

    try {
        const url = `${BASE_URL}/pair/${from}/${to}/${amount}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to convert currencies.");
        }

        const data = await response.json();

        if (data.result !== "success") {
            throw new Error(data["error-type"] || "Conversion failed");
        }

        const formatter = new Intl.NumberFormat("en-US", {
            maximumFractionDigits: 2
        });

        resultElement.textContent =
            `${formatter.format(amount)} ${from} = ` +
            `${formatter.format(data.conversion_result)} ${to}`;

        rateElement.textContent =
            `1 ${from} = ${data.conversion_rate} ${to}`;

        messageElement.textContent = "";
    } catch (error) {
        resultElement.textContent = "";
        rateElement.textContent = "";
        messageElement.textContent = error.message;
        console.error(error);
    } finally {
        convertButton.disabled = false;
    }
}

form.addEventListener("submit", event => {
    event.preventDefault();
    convertCurrency();
});

switchButton.addEventListener("click", () => {
    if (convertButton.disabled) {
        return;
    }

    const previousFrom = fromSelect.value;

    fromSelect.value = toSelect.value;
    toSelect.value = previousFrom;

    convertCurrency();
});

loadCurrencies();