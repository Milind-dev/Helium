
function loadData(){
    // event.preventDefault()
    var hiddenform = document.getElementById("expenses__sections_hiddenform");
    var createNewExpense = document.createElement("div");
    createNewExpense.setAttribute("class","hidden__cards")
    var createtext1 = document.createElement("p");
    createtext1.textContent = "Here i where you will track "
    createtext1.style.color = "black"
    createtext1.style.fontSize = "12px"
    createtext1.style.lineHeight = "1.2em";
    createtext1.style.padding = "3px"; 
    var createtext2 = document.createElement("p");
    createtext2.style.color = "black"
    createtext2.style.fontSize = "12px";
    createtext2.style.lineHeight = "1.2em";
    createtext2.style.padding = "3px";
    createtext2.textContent = "your expenses!"
    var createtext3 = document.createElement("p");
    createtext3.textContent = "to start just add yourself"
    createtext3.style.lineHeight = "1.2em";
    createtext3.style.padding = "3px";
    createtext3.style.fontSize = "12px"
    createtext3.style.color = "black"
    var createButton = document.createElement("button");
    createButton.textContent = "create Project";
    createButton.style.background= "linear-gradient(#4fb840, #14a000)" ;
    createButton.style.fontSize = "18px";
    createButton.style.marginTop = "18px";
    createButton.style.color = "white"
    createButton.style.cursor = "pointer";
    createNewExpense.append(createtext1,createtext2,createtext3,createButton);
    hiddenform.append(createNewExpense)
}
document.getElementById("expenses__sections__btns").addEventListener("click",loadData);
