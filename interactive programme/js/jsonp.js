
function show(){
    $.ajax({
        dataType: "jsonp",
        url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
    });
}

function jsonCallback(json)
{
    console.log(json);
    $.each(json, function(index, element) {
        $('#jsonp').append($('<div>', {
            text: element.name
        }));
        $('#jsonp').append($('<a>', {
            text: element.email
        }));
    });
}