function save() {
    var inputElement = getInputElement();
    var userString = inputElement.value;

    localStorage.setItem("userText", userString);
}

function getInputElement()
{
    return document.getElementById("inputText");
}

function load() {
    var inputElement = getInputElement();
    inputElement.value = localStorage.getItem("userText");
}

