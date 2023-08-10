const celcius = document.getElementById("cel");
const fahrenheit = document.getElementById("fah");
const kelvin = document.getElementById("kel");
const btn = document.getElementById("btn");


// ----------------
/* For Getting A Round of Numbers */
function roundNumber(number) {
    return Math.round(number*100)/100;
}



/* Celcius to Fahrenheit and Kelvin */
celcius.addEventListener("input", function () {
  let c = parseFloat(celcius.value);
  let f = c * (9 / 5) + 32;
  let k = c + 273.15;
  fahrenheit.value = roundNumber(f);
  kelvin.value = roundNumber(k);
});

// -------

/* Fahrenheit to Celcius and Kelvin */
fahrenheit.addEventListener("input", function () {
  let f = parseFloat(fahrenheit.value);
  let c = (f - 32) * (5 / 9);
  let k = (f - 32) * (5 / 9) + 273.15;

  celcius.value = roundNumber(c)
  kelvin.value = roundNumber(k)
});

// ----------

/* Kelvin to Celcius and Fahrenheit */
kelvin.addEventListener("input", function () {
    let k = parseFloat(kelvin.value)
    let c= k - 273.15
    let f = (k - 273.15)* (9/5) +32

    celcius.value = roundNumber(c)
    fahrenheit.value = roundNumber(f)
})


// -----------
/* Reset All The value */
btn.addEventListener("click", ()=>{
    celcius.value = ""
    fahrenheit.value= ""
    kelvin.value = ""
})