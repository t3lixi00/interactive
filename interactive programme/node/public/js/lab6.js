/**
 * Created by rita on 2/18/2017.
 */


   var searchText;

  $(document).on('click','#button',function (){
      searchText = $("#input_search") .val();
      console.log(searchText);
      getdata(searchText);
  });

  function getdata(searchText) {

     $.ajax({
        dataType: "jsonp",
        url: "https://api.flickr.com/services/feeds/photos_public.gne",
        data:{"tags": searchText, "format": "json"},
        jsonCallback:"jsonFlickrFeed"
    });
   }

  function jsonFlickrFeed(json){
        console.log(json);
        $(".row").empty();
        $.each(json.items, function(i,item){

            var img = $("<img />").attr("src", item.media.m).appendTo(".row").wrap("<div class='col-xs-12 col-sm-4 col-md-2'></div>");
        })
    }







