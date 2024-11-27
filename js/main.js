const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");


const dec_to_rom = [
    { 1: 'I' },
    { 4: 'IV' },
    { 5: 'V' },
    { 9: 'IX' },
    { 10: 'X' },
    { 40: 'XL' },
    { 50: 'L' },
    { 90: 'XC' },
    { 100: 'C' },
    { 400: 'CD' },
    { 500: 'D' },
    { 900: 'CM' },
    { 1000: 'M' }
  ];


// Check if input is valid
button.addEventListener("click", (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value == "") {
        output.innerText = "Please enter a valid number";
        input.value = '';
        return;
    } 

    if (input.value <= 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
        input.value = '';
        return;
    } 
    
    if (input.value >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999"
        input.value = '';
        return;
    }

    // Output value
    output.innerText = converter(input.value); 
    console.log(converter(input.value));

    // Clear value from input field
    input.value = ''; 
})


// Clear output when you click inside the input field to enter a new value
input.addEventListener("focus", () => {
    output.innerText = "";
    
})

function converter(val) {

    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    let result = [];
    let new_val = val;
    let i = -1;
    
   
    while (new_val > 0) {
        if (new_val >= decimal[i]) {
            new_val -= decimal[i];
            result.push(roman[i]);
        } else {
            i++;
        }
    }
    return result.join("");
}




