var num1 = '', num2 = '';
var flag = 0;
var operator = '';
var numbtn = document.getElementsByClassName("num");
Array.from(numbtn).forEach(element => {
    element.addEventListener('click', (e) => {
        if (flag != 0) {
            num2 = num2 + e.target.innerHTML;

        }
        let input = document.querySelector("input");
        let string = input.value;
        string = string + e.target.innerHTML;
        input.value = string;


    })

});


var oprbtn = document.getElementsByClassName("operator");
Array.from(oprbtn).forEach(element => {
    element.addEventListener('click', (e) => {

        if (flag == 0) {

            flag = 1;
            operator = e.target.innerHTML;
        }
        let input = document.querySelector("input");
        let string = input.value;
        num1 = input.value;
        string = string + e.target.innerHTML;
        input.value = string;



    })

});

document.getElementsByClassName("clear")[0].addEventListener('click',(e)=>{
    document.querySelector("input").value="";
});

function compute() {

    var ans;
    switch (operator) {
        case '+':
            ans = parseInt(num1) + parseInt(num2);
            break;
        case '-':
            ans = parseInt(num1) - parseInt(num2);
            break;
        case '*':
            ans = parseInt(num1) * parseInt(num2);
            break;
        case '/':
            ans = parseInt(num1) /  parseInt(num2);
            break;
        default:
            break;
    }
    let input = document.querySelector("input");
    let string = input.value;
    input.value=string+"="+ans;
}

