let x = prompt("Zadej pozici x ");
let y = prompt("Zadej pozici y ");
let z = Math.sqrt(x * x + y * y);


if (z <= 5){
    document.write("Bod [" + x + ", " + y + "] je v dosahu dělové věže. ")
}
else document.write("Bod [" + x + ", " + y + "] není v dosahu dělové věže. ");