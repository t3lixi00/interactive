function Person(personName)
{
  this.name = personName;

}

var userString = [];

function save() {
    var inputElement = getInputElement();
    userString.push(inputElement.value);

    localStorage.setItem("userText", userString);
}

function getInputElement()
{
    return document.getElementById("firstNameField");
}

function load() {
    var inputElement = getInputElement();
    inputElement.value = localStorage.getItem("userText");
}

