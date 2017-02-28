function addPerson()
{
    var firstNameElement = document.getElementById("firstNameField");
    console.log("Adding a person: " + firstNameElement.value);
    viewController.addPerson(firstNameElement.value);

  //  var nameBox = document.getElementById("personNameBox");
//    nameBox.innerText = firstNameElement.value;
}

