  
    var nameList=[];
    var output = document.getElementById("nameList1");
    var newName = document.getElementById("nameInput");

   function test(){
    document.getElementByTagName("p").innerHTML=newName;
   }

    function addPerson() {
        console.log("adding work "+ newName);

          nameList.push(newName);
          show();
    }

    function show() {
        output.innerHTML = "";
        output.innerHTML += nameList.join("<br>");
    }
