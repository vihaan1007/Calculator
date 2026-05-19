/*
alert("Hello");
alert("To a Calculator");
*/

let buttons = document.querySelectorAll("button");
let question = document.querySelector("#Qtext");
let answer = document.querySelector("#Atext");
let ans;

document.addEventListener("keydown", () => {
    let kPB = event.key; 
});

buttons.forEach((b) => {
    b.addEventListener("click", (e) => {
        if(Qtext.innerText == "Question") {
            Qtext.innerText = "";
        }
        if(Atext.innerText == "Answer") {
            answer.innerText = "Waiting...";
        }

        let pB = e.target.dataset.button;

        if(pB == "random" || kPB == "r") {
            let num = Math.floor(Math.random() * 10);
            Qtext.innerHTML += num;
        } else if(pB == "square" || kPB == "^") {
            Qtext.innerHTML += "<sup>2</sup>";
        } else if (pB == "delete" || kPB == "Backspace") {
            if (Qtext.innerHTML.endsWith("<sup>2</sup>")) {
                Qtext.innerHTML = Qtext.innerHTML = Qtext.innerHTML.replace(/<sup>2<\/sup>$/, "");;
            } else{
                Qtext.innerHTML = Qtext.innerHTML.slice(0, -1);
            }
        } else if(pB == "AC" || kPB == "Delete") {
            Qtext.innerHTML = "";
            Atext.innerHTML = "Waiting...";
        } else if(pB == "+" || kPB == "+") {
            Qtext.innerHTML += pB
        } else if(pB == "-" || kPB == "-") {
            Qtext.innerHTML += pB
        } else if(pB == "*" || kPB == "*") {
            Qtext.innerHTML += "&times;"
        } else if(pB == "/" || kPB == "/") {
            Qtext.innerHTML += "&divide;"
        } else if(pB == "equal" || kPB == "Enter"){
            let Expression = Qtext.innerHTML;
            let Exp = Expression.replaceAll("×", "*");
            Exp = Exp.replaceAll("÷", "/");
            Exp = Exp.replaceAll("<sup>2</sup>", "**2");
            ans = eval(Exp);
            Atext.innerHTML = ans;
        } else {
            Qtext.innerHTML += pB;
        }
    });
});

/*
else {
    Qtext.innerHTML += pB;
}
*/