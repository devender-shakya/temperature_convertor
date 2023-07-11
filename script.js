var cel = document.querySelector("#cel");
var fah = document.querySelector("#fah");

cel.addEventListener('input',function () {
    let c = this.value;
    let formula = (c * (9/5)+32);
    if(!Number.isInteger(formula)){
        formula = formula.toFixed(4);
    }
    fah.value = formula;
});

fah.addEventListener('input',function () {
    let f = this.value;
    let formula2 = (f-32)* (5/9);
    if(!Number.isInteger(formula2)){
        formula2 = formula2.toFixed(4);
    }
    cel.value = formula2;
})