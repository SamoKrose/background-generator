var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//.................. a way to make it shorter the code
//......... by creating more function holding same code 
//..... function like in (inputLength and creatListElement)
//..Check indexOriginalLength.js file

function inputLength() {
    return input.value.length;
}

function createListElement () {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();  
    }
}

function addListAfterKeydown(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeydown);