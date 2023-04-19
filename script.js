const numbers = document.querySelectorAll(".num");
const display = document.getElementById("display");
const operators = document.querySelectorAll(".operators");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const clearOne = document.getElementById("clear_one");
const parOpen = document.getElementById("open");
const parClose = document.getElementById("close");
const minus = document.getElementById("minus");


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        if (
            display.innerText.charAt(display.innerText.length - 1) !== ")") {
            display.innerText += numbers[i].innerText;
        }
    })
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function
        () {

        if (
            display.innerText && display.innerText.charAt(display.innerText.length - 1) !== "+" &&
            display.innerText.charAt(display.innerText.length - 1) !== "-" &&
            display.innerText.charAt(display.innerText.length - 1) !== "*" &&
            display.innerText.charAt(display.innerText.length - 1) !== "/" &&
            display.innerText.charAt(display.innerText.length - 1) !== "." &&
            display.innerText.charAt(display.innerText.length - 1) !== "(") {
            display.innerText += operators[i].innerText;
        } else if (
            display.innerText.charAt(display.innerText.length - 1) === "+" ||
            display.innerText.charAt(display.innerText.length - 1) === "-" ||
            display.innerText.charAt(display.innerText.length - 1) === "*" ||
            display.innerText.charAt(display.innerText.length - 1) === "/" ||
            display.innerText.charAt(display.innerText.length - 1) === ".") {
            const inn = operators[i].innerText;
            const rep = display.innerText.slice(0, -1) + inn;
            display.innerText = rep;
        }
    })
}

minus.addEventListener("click", function () {
    if (
        display.innerText === "" ||
        display.innerText.charAt(display.innerText.length - 1) === "(") {
            display.innerText += minus.innerText;
    }
})

parOpen.addEventListener("click", function () {
    if (display.innerText === "" ||
        display.innerText.charAt(display.innerText.length - 1) === "+" ||
        display.innerText.charAt(display.innerText.length - 1) === "-" ||
        display.innerText.charAt(display.innerText.length - 1) === "*" ||
        display.innerText.charAt(display.innerText.length - 1) === "/"
    ) {
        display.innerText += parOpen.innerText;
    }
})

parClose.addEventListener("click", function () {
    if (display.innerText.charAt(display.innerText.length - 1) !== "+" &&
        display.innerText.charAt(display.innerText.length - 1) !== "-" &&
        display.innerText.charAt(display.innerText.length - 1) !== "*" &&
        display.innerText.charAt(display.innerText.length - 1) !== "/" &&
        display.innerText.charAt(display.innerText.length - 1) !== "." &&
        display.innerText.charAt(display.innerText.length - 1) !== "(" &&
        display.innerText.split("(").length > display.innerText.split(")").length
    ) {
        display.innerText += parClose.innerText
    }
})

equal.addEventListener("click", function () {
    if (display.innerText) {
        display.innerText = eval(display.innerText);
    } else {

    }
})

clear.addEventListener("click", function () {
    display.innerText = "";
})

clearOne.addEventListener("click", function () {
    display.innerText = display.innerText.slice(0, -1);
})
